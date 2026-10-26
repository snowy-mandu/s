// node render.js still <t1,t2,...초> <outdir>   |   node render.js full <out.mp4> [audio.wav] [subframes]
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), { spawn } = require('child_process');
(async () => {
  const [mode, a1, a2, a3] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('console', m => console.log('[page]', m.text())); page.on('pageerror', e => console.log('[err]', e.message));
  await page.goto('file://' + path.resolve(__dirname, 'index.html'));
  const info = await page.evaluate(() => window.init());
  if (mode === 'still') {
    fs.mkdirSync(a2, { recursive: true });
    for (const s of a1.split(',')) { const f = Math.round(parseFloat(s) * info.fps);
      const d = await page.evaluate(f => window.renderFrame(f, 1, .9), f);
      fs.writeFileSync(path.join(a2, `f${String(f).padStart(4, "0")}.jpg`), Buffer.from(d.split(',')[1], 'base64')); }
  } else {
    const n = parseInt(a3 || '3');
    const args = ['-y', '-f', 'image2pipe', '-framerate', String(info.fps), '-c:v', 'mjpeg', '-i', '-'];
    if (a2) args.push('-i', a2, '-c:a', 'aac', '-b:a', '256k', '-shortest');
    args.push('-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', a1);
    const ff = spawn('ffmpeg', args, { stdio: ['pipe', 'ignore', 'inherit'] });
    const t0 = Date.now();
    for (let f = 0; f < info.frames; f++) {
      const d = await page.evaluate(([f, n]) => window.renderFrame(f, n, .95), [f, n]);
      if (!ff.stdin.write(Buffer.from(d.split(',')[1], 'base64'))) await new Promise(r => ff.stdin.once('drain', r));
      if (f % 120 === 0) console.log('frame', f, ((Date.now() - t0) / 1000).toFixed(0) + 's');
    }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await browser.close();
})();
