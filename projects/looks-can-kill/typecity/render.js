// node render.js still <초,...> <폴더>  |  node render.js full <out.mp4> [audio.wav]
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path'), { spawn } = require('child_process');
(async () => {
  const [mode, a1, a2] = process.argv.slice(2);
  const srv = spawn('python3', ['-m', 'http.server', '8765', '--bind', '127.0.0.1'], { cwd: __dirname, stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 800));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('console', m => console.log('[page]', m.text())); page.on('pageerror', e => console.log('[err]', e.message));
  await page.goto('http://127.0.0.1:8765/index.html');
  await page.waitForFunction(() => typeof window.init === 'function');
  const info = await page.evaluate(() => window.init());
  if (mode === 'still') {
    fs.mkdirSync(a2, { recursive: true });
    for (const s of a1.split(',')) { const f = Math.round(parseFloat(s) * info.fps); const t0 = Date.now();
      const d = await page.evaluate(f => window.renderFrame(f), f);
      fs.writeFileSync(path.join(a2, `f${String(f).padStart(4, '0')}.jpg`), Buffer.from(d.split(',')[1], 'base64')); console.log(f, Date.now() - t0, 'ms'); }
  } else {
    const args = ['-y', '-f', 'image2pipe', '-framerate', String(info.fps), '-c:v', 'mjpeg', '-i', '-'];
    if (a2) args.push('-i', a2, '-c:a', 'aac', '-b:a', '256k', '-shortest');
    args.push('-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', a1);
    const ff = spawn('ffmpeg', args, { stdio: ['pipe', 'ignore', 'ignore'] }); const t0 = Date.now();
    for (let f = 0; f < info.frames; f++) {
      const d = await page.evaluate(f => window.renderFrame(f), f);
      if (!ff.stdin.write(Buffer.from(d.split(',')[1], 'base64'))) await new Promise(r => ff.stdin.once('drain', r));
      if (f % 60 === 0) console.log('frame', f, '/', info.frames, ((Date.now() - t0) / 1000).toFixed(0) + 's');
    }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await browser.close(); srv.kill();
})();
