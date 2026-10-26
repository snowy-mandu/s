// IVE — Looks Can Kill / motion graphic (fan piece)
// 형식 아이디어: 시선이 곧 컷이다. 눈이 한 번 볼 때마다 화면이 베이고, 그 베인 선이 다음 장면으로 넘어가는 전환이 된다.
// 모든 그림은 seek(t)의 순수 함수. 120 BPM, 40박 = 20초, 1920x1080 60fps.
'use strict';
const W = 1920, H = 1080, FPS = 60, DUR = 20, BEAT = 0.5;
const INK = '#0a0a0c', PAPER = '#f1eee6', RED = '#ff2238', COB = '#2b2dff', COB2 = '#3a3cff', RED2 = '#ec1830';

// ---------- 기본 도구 ----------
const cl = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const seg = (t, a, b) => cl((t - a) / (b - a));
const oExpo = x => x >= 1 ? 1 : 1 - Math.pow(2, -10 * x);
const iCub = x => x * x * x;
const oCub = x => 1 - Math.pow(1 - x, 3);
const ioCub = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const oBack = (x, s = 2.2) => x >= 1 ? 1 : 1 + (s + 1) * Math.pow(x - 1, 3) + s * Math.pow(x - 1, 2);
const logLerp = (a, b, e) => Math.exp(lerp(Math.log(a), Math.log(b), e));
function hash(a, b = 0, c = 0) { const h = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453; return h - Math.floor(h); }
function mk(w = W, h = H) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

// ---------- 직접 그린 글자 (칼날 단면 블록체, 높이 1 기준) ----------
const S0 = 0.24;
function glyph(ch, s) {
  switch (ch) {
    case 'L': return { w: .62, p: [[[0, .1], [s, 0], [s, 1 - s], [.62, 1 - s], [.54, 1], [0, 1]]] };
    case 'I': return { w: s, p: [[[0, .1], [s, 0], [s, 1], [0, 1]]] };
    case 'K': { const b = s * 1.15; return { w: .76, p: [[[0, 0], [s, 0], [s, 1], [0, 1]], [[s * .5, .52], [.76 - b, 0], [.76, 0], [s * .5 + b, .52]], [[s + .02 - b * .2, .4], [s + .02 + b * .8, .4], [.76, 1], [.76 - b, 1]]] }; }
    case 'S': { const w = .64, c = .14, m1 = .5 - s / 2, m2 = .5 + s / 2; return { w, p: [[[c, 0], [w, 0], [w, s], [s, s], [s, m1], [w - c, m1], [w, m1 + c], [w, 1 - c], [w - c, 1], [0, 1], [0, 1 - s], [w - s, 1 - s], [w - s, m2], [c, m2], [0, m2 - c], [0, c]]] }; }
    case 'C': return { w: .66, p: [[[.14, 0], [.68, 0], [.6, s], [s, s], [s, 1 - s], [.64, 1 - s], [.64, 1], [.14, 1], [0, .86], [0, .14]]] };
    case 'A': return { w: .7, p: [[[.16, 0], [.54, 0], [.7, .16], [.7, 1], [.7 - s, 1], [.7 - s, .7], [s, .7], [s, 1], [0, 1], [0, .16]]], hole: [[s, s], [.7 - s, s], [.7 - s, .7 - s * .9], [s, .7 - s * .9]] };
    case 'N': return { w: .74, p: [[[0, 0], [s, 0], [.74 - s, .6], [.74 - s, 0], [.74, 0], [.74, 1], [.74 - s, 1], [s, .4], [s, 1], [0, 1]]] };
    case 'O': return { w: .86, eye: true };
    default: return { w: .3, p: [] };
  }
}
function poly(ctx, p) { ctx.moveTo(p[0][0], p[0][1]); for (let i = 1; i < p.length; i++) ctx.lineTo(p[i][0], p[i][1]); ctx.closePath(); }
const OCT = [[.16, 0], [.7, 0], [.86, .16], [.86, .84], [.7, 1], [.16, 1], [0, .84], [0, .16]];
function almond(ctx, cx, cy, hw, hh) { ctx.moveTo(cx - hw, cy); ctx.quadraticCurveTo(cx, cy - 2 * hh, cx + hw, cy); ctx.quadraticCurveTo(cx, cy + 2 * hh, cx - hw, cy); ctx.closePath(); }

// 글자 하나: (x,y)=왼쪽 위, h=높이. o: fg, s, open, lx, ly, iris, pupil, white, stroke
function drawGlyph(ctx, ch, x, y, h, o) {
  const s = o.s ?? S0, g = glyph(ch, s);
  ctx.save(); ctx.translate(x, y); ctx.scale(h, h);
  if (o.stroke) { ctx.strokeStyle = o.fg; ctx.lineWidth = o.stroke / h; ctx.lineJoin = 'miter'; }
  ctx.fillStyle = o.fg;
  const paint = rule => o.stroke ? ctx.stroke() : ctx.fill(rule);
  if (g.eye) {
    const open = o.open ?? 0, cx = .43, cy = .5, hw = .43 - s * .9, hhMax = .5 - s, hh = Math.max(.004, hhMax * open);
    ctx.beginPath(); poly(ctx, OCT); almond(ctx, cx, cy, hw, hh); paint('evenodd');
    if (open > .02 && !o.stroke) {
      ctx.save(); ctx.beginPath(); almond(ctx, cx, cy, hw, hh); ctx.clip();
      if (o.white) { ctx.fillStyle = o.white; ctx.fillRect(0, 0, 1, 1); }
      const r = hhMax * .8, ix = cx + (o.lx ?? 0) * (hw - r * .55), iy = cy + (o.ly ?? 0) * hhMax * .25;
      ctx.fillStyle = o.iris ?? RED; ctx.beginPath(); ctx.arc(ix, iy, r, 0, 7); ctx.fill();
      ctx.fillStyle = o.pupil ?? INK; ctx.beginPath(); ctx.arc(ix, iy, r * (o.pr ?? .42), 0, 7); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ix - r * .34, iy - r * .34, r * .13, 0, 7); ctx.fill();
      ctx.restore();
    }
  } else {
    if (g.hole) { ctx.beginPath(); poly(ctx, g.p[0]); poly(ctx, g.hole); paint('evenodd'); }
    else for (const p of g.p) { ctx.beginPath(); poly(ctx, p); paint(); }
  }
  ctx.restore();
}
// 단어 배치(가운데 기준). 배치는 기본 굵기로 고정해 굵기 애니메이션 중에도 자리가 흔들리지 않는다.
function layout(str, cx, cy, h, track = .08) {
  const ws = [...str].map(ch => ch === ' ' ? .32 : glyph(ch, S0).w);
  const total = ws.reduce((a, b) => a + b, 0) + track * (ws.length - 1);
  let x = cx - total * h / 2; const out = [];
  [...str].forEach((ch, i) => { out.push({ ch, x, y: cy - h / 2, w: ws[i] * h, cx: x + ws[i] * h / 2 }); x += (ws[i] + track) * h; });
  return { items: out, w: total * h };
}
function drawWord(ctx, str, cx, cy, h, o = {}, each) {
  const L = layout(str, cx, cy, h, o.track);
  L.items.forEach((it, i) => {
    if (it.ch === ' ') return;
    const e = each ? each(i, it) : {};
    if (e.hide || e.a === 0) return;
    ctx.save();
    ctx.globalAlpha *= e.a ?? 1;
    ctx.translate(it.cx + (e.dx ?? 0), cy + (e.dy ?? 0)); ctx.rotate(e.rot ?? 0); ctx.scale((e.sc ?? 1) * (e.sx ?? 1), (e.sc ?? 1) * (e.sy ?? 1));
    const s = e.s ?? o.s ?? S0, gw = glyph(it.ch, s).w * h;
    drawGlyph(ctx, it.ch, -gw / 2, -h / 2, h, { ...o, ...e, s });
    ctx.restore();
  });
  return L;
}

// ---------- 서체 글자 ----------
function txt(ctx, str, x, y, { font = 'Anton', size = 100, color = INK, align = 'center', base = 'middle', track = 0, italic = false, alpha = 1 } = {}) {
  ctx.save(); ctx.globalAlpha *= alpha;
  ctx.font = `${italic ? 'italic ' : ''}${size}px "${font}"`; ctx.letterSpacing = track + 'px';
  ctx.textAlign = align; ctx.textBaseline = base; ctx.fillStyle = color;
  ctx.fillText(str, x + (align === 'center' ? track / 2 : 0), y); ctx.restore();
}
const MONO = 'JetBrains Mono';
// 타자: 2프레임에 한 글자
function typed(str, t, t0, per = 1 / 30) { return str.slice(0, cl(Math.floor((t - t0) / per), 0, str.length)); }
// 블록 마스크: 글자 자리를 사각형이 먼저 덮고, 그 안에서 글자가 왼→오로 차오른다
function blockText(ctx, str, x, y, t, t0, opt) {
  ctx.save(); ctx.font = `${opt.size}px "${opt.font}"`; ctx.letterSpacing = (opt.track ?? 0) + 'px';
  const w = ctx.measureText(str).width + opt.size * .35, hgt = opt.size * 1.1;
  const x0 = opt.align === 'left' ? x : opt.align === 'right' ? x - w : x - w / 2;
  ctx.restore();
  const pb = oExpo(seg(t, t0, t0 + .12)), pt = oExpo(seg(t, t0 + .07, t0 + .25)), pe = 0;
  if (pb <= 0) return;
  ctx.save();
  ctx.fillStyle = opt.box; ctx.fillRect(x0 + w * pe, y - hgt / 2, w * (pb - pe), hgt);
  ctx.beginPath(); ctx.rect(x0, y - hgt / 2, w * pt, hgt); ctx.clip();
  txt(ctx, str, x0, y, { ...opt, align: 'left' });
  ctx.restore();
}

// ---------- 눈 (단독) ----------
function drawEye(ctx, cx, cy, w, h, open, lx, ly, o = {}) {
  const hw = w / 2, hh = Math.max(.5, h / 2 * open), lw = o.lw ?? 8;
  ctx.save();
  if (open > .01) {
    ctx.save(); ctx.beginPath(); almond(ctx, cx, cy, hw, hh); ctx.clip();
    ctx.fillStyle = o.white ?? PAPER; ctx.fillRect(cx - hw, cy - h, w, h * 2);
    const r = h * .36, ix = cx + lx * (hw - r * 1.4), iy = cy + ly * h * .12;
    ctx.fillStyle = RED; ctx.beginPath(); ctx.arc(ix, iy, r, 0, 7); ctx.fill();
    ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(ix, iy, r * (o.pr ?? .42), 0, 7); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ix - r * .34, iy - r * .34, r * .12, 0, 7); ctx.fill();
    ctx.restore();
  }
  ctx.strokeStyle = o.lid ?? PAPER; ctx.lineWidth = lw; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); almond(ctx, cx, cy, hw, hh); ctx.stroke();
  // 눈꼬리 칼날(아이라인)
  ctx.fillStyle = o.lid ?? PAPER; ctx.beginPath();
  ctx.moveTo(cx + hw - 6, cy - lw / 2); ctx.lineTo(cx + hw + w * .09, cy - h * .16 - lw); ctx.lineTo(cx + hw + 2, cy + lw / 2); ctx.closePath(); ctx.fill();
  ctx.restore();
}
function irisPos(cx, cy, w, h, lx, ly) { const r = h * .36; return [cx + lx * (w / 2 - r * 1.4), cy + ly * h * .12]; }

// ---------- 베기 ----------
function halfClip(ctx, px, py, ux, uy, sd) {
  const nx = -uy * sd, ny = ux * sd, L = 6000;
  ctx.beginPath(); ctx.moveTo(px - ux * L, py - uy * L); ctx.lineTo(px + ux * L, py + uy * L);
  ctx.lineTo(px + ux * L + nx * L, py + uy * L + ny * L); ctx.lineTo(px - ux * L + nx * L, py - uy * L + ny * L); ctx.closePath(); ctx.clip();
}
// src를 cut 선으로 둘로 갈라 dst에 그린다. d: 선 방향으로 어긋남, g: 수직으로 벌어짐, rot: 반쪽마다 비틀림
function splitDraw(dst, src, cut, d, g, rot = 0) {
  const ux = Math.cos(cut.a), uy = Math.sin(cut.a), nx = -uy, ny = ux;
  for (const sd of [1, -1]) {
    const ox = (ux * d / 2 + nx * g / 2) * sd, oy = (uy * d / 2 + ny * g / 2) * sd;
    dst.save(); halfClip(dst, cut.x + ox, cut.y + oy, ux, uy, sd);
    dst.translate(cut.x + ox, cut.y + oy); dst.rotate(rot * sd); dst.translate(-cut.x, -cut.y);
    dst.drawImage(src, 0, 0); dst.restore();
  }
}
// 시선 광선: 안쪽은 흰 심, 바깥은 빛
function beam(ctx, x0, y0, x1, y1, p, col = RED, wd = 7) {
  if (p <= 0) return;
  const x = lerp(x0, x1, p), y = lerp(y0, y1, p);
  ctx.save(); ctx.lineCap = 'round';
  ctx.shadowColor = col; ctx.shadowBlur = 40; ctx.strokeStyle = col; ctx.lineWidth = wd * 2.2;
  ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
  ctx.shadowBlur = 0; ctx.strokeStyle = '#fff'; ctx.lineWidth = wd * .55;
  ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
  ctx.restore();
}
function lineThrough(cut, len = 3000) { const ux = Math.cos(cut.a), uy = Math.sin(cut.a); return [cut.x - ux * len, cut.y - uy * len, cut.x + ux * len, cut.y + uy * len]; }

// ---------- 바탕 무늬 (같은 계열 색) ----------
function dotGrid(ctx, col, gap = 36, r = 2.2, off = 0) {
  ctx.fillStyle = col;
  for (let y = gap / 2; y < H + gap; y += gap) for (let x = (off % gap) + gap / 2 - gap; x < W + gap; x += gap) { ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); }
}
function stripes(ctx, col, gap, wdt, ang, off) {
  ctx.save(); ctx.translate(W / 2, H / 2); ctx.rotate(ang); ctx.fillStyle = col;
  for (let x = -1600 + (off % gap); x < 1600; x += gap) ctx.fillRect(x, -1600, wdt, 3200);
  ctx.restore();
}
function burst(ctx, cx, cy, n, col, rot) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot); ctx.fillStyle = col;
  for (let i = 0; i < n; i++) { const a0 = i / n * Math.PI * 2, a1 = a0 + Math.PI / n; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a0) * 3000, Math.sin(a0) * 3000); ctx.lineTo(Math.cos(a1) * 3000, Math.sin(a1) * 3000); ctx.closePath(); ctx.fill(); }
  ctx.restore();
}
function star4(ctx, cx, cy, r, rot, col) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot); ctx.fillStyle = col; ctx.beginPath();
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, rr = i % 2 ? r * .2 : r; ctx[i ? 'lineTo' : 'moveTo'](Math.cos(a) * rr, Math.sin(a) * rr); }
  ctx.closePath(); ctx.fill(); ctx.restore();
}

// ---------- 화면 흔들림 · 색 분리 ----------
const HITS = [[2.5, 16, .5], [3.0, 10, .4], [3.5, 8, .6], [4.0, 6, 0], [4.25, 6, 0], [4.5, 6, 0], [4.75, 6, 0], [5.0, 8, .3], [6.68, 10, .5], [7.0, 28, 1], [7.9, 8, .6], [9.45, 18, 1], [10.0, 6, .2], [12.0, 36, 1.4], [12.5, 12, .6], [13.0, 12, .6], [13.5, 14, .7], [14.0, 24, 1.2], [16.0, 6, .4], [18.5, 22, 1.2]];
function shake(t) {
  let dx = 0, dy = 0;
  for (const [ti, a] of HITS) if (t >= ti && t < ti + .5) { const k = a * Math.exp(-(t - ti) * 11), st = Math.floor(t * 60); dx += (hash(st, ti) - .5) * 2 * k; dy += (hash(st, ti, 3) - .5) * 2 * k; }
  return [dx, dy];
}
function chromaAt(t) { let c = .15; for (const [ti, , ch] of HITS) if (t >= ti) c += ch * Math.exp(-(t - ti) * 9); if (t > 11 && t < 11.6) c += seg(t, 11, 11.6) * 1.2; return c; }

// ---------- 장면 ----------
const off1 = mk(), off2 = mk(), off3 = mk(), off4 = mk();
const c1 = off1.getContext('2d'), c2 = off2.getContext('2d'), c3 = off3.getContext('2d'), c4 = off4.getContext('2d');

// S0 0–1s: 감긴 눈 → 뜬다 → 오른쪽을 본다 → 시선이 화면을 벤다
const E0 = { x: W / 2, y: H / 2, w: 700, h: 290 };
const CUT0 = (() => { const [ix, iy] = irisPos(E0.x, E0.y, E0.w, E0.h, 1, 0); return { x: ix, y: iy, a: .2 }; })();
function sceneEye(ctx, t, endMode) {
  ctx.fillStyle = INK; ctx.fillRect(-80, -80, W + 160, H + 160);
  let open, lx, ly = 0, pr = .42, s = 1;
  if (!endMode) {
    open = oExpo(seg(t, .08, .42));
    lx = lerp(Math.sin(t * 3) * .12, 1, oExpo(seg(t, .66, .74)));
  } else { // 끝: 정면을 보다가 감는다. t는 18.5–20
    open = 1 - ioCub(seg(t, 19.0, 19.6)); lx = 0; pr = lerp(.25, .42, seg(t, 18.5, 19.2));
    s = 1 + .04 * (1 - seg(t, 18.5, 19.6));
  }
  ctx.save(); ctx.translate(E0.x, E0.y); ctx.scale(s, s); ctx.translate(-E0.x, -E0.y);
  drawEye(ctx, E0.x, E0.y, E0.w, E0.h, open, lx, ly, { pr });
  ctx.restore();
  if (!endMode) {
    txt(ctx, 'SCENE 01  —  ENTRANCE', W / 2, E0.y + 250, { font: MONO, size: 22, color: PAPER, track: 8, alpha: .55 * seg(t, .25, .45) });
    const [ix, iy] = irisPos(E0.x, E0.y, E0.w, E0.h, lx, ly);
    const [, , x1, y1] = lineThrough(CUT0, 1400);
    beam(ctx, ix, iy, x1, y1, oExpo(seg(t, .76, .9)));
  }
}

// S1 1–4s: 촬영장. 슬레이트가 닫히고 ACTION — 시선 한 번에 CUT
function slate(ctx, t) {
  const bx = 470, by = 330, bw = 980, bh = 470;
  const arm = t < 2.38 ? -.42 : t < 2.5 ? -.42 * (1 - iCub(seg(t, 2.38, 2.5))) : -.05 * Math.exp(-(t - 2.5) * 16) * Math.abs(Math.sin((t - 2.5) * 40));
  ctx.fillStyle = INK; ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 14); ctx.fill();
  // 고정된 줄무늬 띠
  const band = (y, flip) => {
    ctx.save(); ctx.beginPath(); ctx.rect(bx, y, bw, 92); ctx.clip();
    ctx.fillStyle = INK; ctx.fillRect(bx, y, bw, 92); ctx.fillStyle = PAPER;
    for (let i = -2; i < 14; i++) { const x = bx + i * 98 + (flip ? 49 : 0); ctx.beginPath(); ctx.moveTo(x, y + 92); ctx.lineTo(x + 49, y + 92); ctx.lineTo(x + 98, y); ctx.lineTo(x + 49, y); ctx.closePath(); ctx.fill(); }
    ctx.restore();
  };
  band(by + 10, false);
  ctx.save(); ctx.translate(bx, by - 6); ctx.rotate(arm); ctx.translate(-bx, -(by - 6)); band(by - 100, true); ctx.restore();
  ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(bx + 26, by - 4, 16, 0, 7); ctx.fill();
  // 칸
  ctx.strokeStyle = PAPER; ctx.lineWidth = 3;
  const rows = [[by + 165, 'SCENE', '01', 1.15], [by + 270, 'TAKE', '01', 1.55], [by + 375, 'ROLE', 'GIRL HERO', 1.95]];
  rows.forEach(([y, k, v, t0], i) => {
    ctx.globalAlpha = .5; ctx.beginPath(); ctx.moveTo(bx + 40, y + 52); ctx.lineTo(bx + bw - 40, y + 52); ctx.stroke(); ctx.globalAlpha = 1;
    txt(ctx, k, bx + 50, y, { font: MONO, size: 26, color: PAPER, align: 'left', track: 6, alpha: .7 });
    const v2 = typed(v, t, t0);
    txt(ctx, v2, bx + 300, y + 4, { font: 'Anton', size: 84, color: i === 2 ? RED : PAPER, align: 'left', track: 2 });
    if (t > t0 && t < t0 + .45 && Math.floor(t * 8) % 2 === 0) { ctx.save(); ctx.font = '84px Anton'; const w = ctx.measureText(v2).width; ctx.restore(); ctx.fillStyle = PAPER; ctx.fillRect(bx + 306 + w, y - 34, 10, 70); }
  });
}
const CUT1 = { x: 960, y: 560, a: -.12 };
function setPaper(ctx, t) { ctx.fillStyle = PAPER; ctx.fillRect(-80, -80, W + 160, H + 160); dotGrid(ctx, 'rgba(10,10,12,.07)', 40, 2, t * 10); }
function sceneSlateA(ctx, t) { // ACTION 까지
  setPaper(ctx, t);
  const push = 1 + .035 * seg(t, 1, 3);
  ctx.save(); ctx.translate(960, 540); ctx.scale(push, push); ctx.rotate(-.035); ctx.translate(-960, -540);
  const ex = iCub(seg(t, 2.78, 3.0));
  if (ex < 1) { ctx.save(); ctx.translate(0, ex * 900); ctx.translate(960, 560); ctx.rotate(ex * .25); ctx.translate(-960, -560); slate(ctx, t); ctx.restore(); }
  ctx.restore();
  if (t >= 3.0) {
    ctx.save(); ctx.font = '400px Anton'; ctx.letterSpacing = '-6px';
    const word = 'ACTION'; let x = 960 - ctx.measureText(word).width / 2;
    [...word].forEach((ch, i) => {
      const w = ctx.measureText(ch).width, p = oExpo(seg(t, 3.0 + i * 2 / 60, 3.0 + i * 2 / 60 + .18));
      if (p > 0) { ctx.save(); ctx.globalAlpha = cl(p * 3); ctx.translate(x + w / 2, 560); ctx.scale(lerp(1.7, 1, p), lerp(1.7, 1, p)); txt(ctx, ch, 0, 0, { size: 400, color: INK }); ctx.restore(); }
      x += w - 6;
    });
    ctx.restore();
    txt(ctx, 'TAKE 01', 960, 820, { font: MONO, size: 26, color: INK, track: 10, alpha: .6 * seg(t, 3.1, 3.2) });
  }
  if (t > 3.38) { const [x0, y0, x1, y1] = lineThrough(CUT1, 1400); beam(ctx, x0, y0, x1, y1, oExpo(seg(t, 3.38, 3.5)), RED, 6); }
}
const CUTWORD = { x: 960, y: 520, size: 560 };
function sceneSlateB(ctx, t) { // ACTION 밑에 있던 CUT
  setPaper(ctx, t);
  txt(ctx, 'CUT', CUTWORD.x, CUTWORD.y, { size: CUTWORD.size, color: INK, track: -8 });
  blockText(ctx, 'TAKE 01  —  OK', 960, 860, t, 3.6, { font: MONO, size: 30, color: PAPER, box: RED, track: 10 });
}
function sceneSlate(ctx, t) {
  if (t < 3.5) return sceneSlateA(ctx, t);
  // 3.5–3.78 베기
  sceneSlateB(ctx, t);
  const p = seg(t, 3.5, 3.78);
  if (p < 1) { sceneSlateA(c3, 3.499); ctx.save(); splitDraw(ctx, off3, CUT1, oCub(p) * 260, oCub(p) * 1100, oCub(p) * .05); ctx.restore(); }
}
function sceneSlateZoom(ctx, t) { // 3.76–4.0: C의 획 속으로 → 검정
  const e = iCub(seg(t, 3.76, 4.0)), z = logLerp(1, 60, e);
  ctx.save(); ctx.font = `${CUTWORD.size}px Anton`; ctx.letterSpacing = '-8px';
  const w = ctx.measureText('CUT').width; ctx.restore();
  const fx = CUTWORD.x - w / 2 + CUTWORD.size * .07, fy = CUTWORD.y;
  ctx.save(); ctx.translate(fx, fy); ctx.scale(z, z); ctx.translate(-fx, -fy); sceneSlateB(ctx, t); ctx.restore();
}

// S2 4–8s: LOOKS → ROUND 1 → FIGHT → 시선 → K.O.
const LOOKS_SLAMS = [4.0, 4.25, 4.5, 4.75, 5.0];
const CUT2 = { x: 960, y: 560, a: -1.15 };
function sceneLooks(ctx, t) {
  ctx.fillStyle = INK; ctx.fillRect(-80, -80, W + 160, H + 160);
  stripes(ctx, '#121216', 60, 20, .5, t * 30);
  const up = oExpo(seg(t, 6.0, 6.34));
  const ly = lerp(560, 190, up), lh = lerp(320, 132, up);
  let open = oExpo(seg(t, 5.2, 5.38)), lx = 0, lyy = 0;
  lx = t < 5.5 ? 0 : t < 5.75 ? -oExpo(seg(t, 5.5, 5.56)) : t < 6.55 ? lerp(-1, 0, oExpo(seg(t, 5.75, 5.85))) : t < 7.6 ? oExpo(seg(t, 6.55, 6.6)) : lerp(1, 0, oExpo(seg(t, 7.6, 7.7)));
  if (t > 7.7) lyy = oExpo(seg(t, 7.7, 7.78));
  const push = 1 + .05 * seg(t, 7.0, 8.0);
  ctx.save(); ctx.translate(960, 540); ctx.scale(push, push); ctx.translate(-960, -540);
  const L = drawWord(ctx, 'LOOKS', 960, ly, lh, { fg: PAPER, white: PAPER, open, lx, ly: lyy }, i => {
    const p = oExpo(seg(t, LOOKS_SLAMS[i], LOOKS_SLAMS[i] + .16));
    return p <= 0 ? { hide: true } : { sc: lerp(3, 1, p), a: cl(p * 2.5), dy: (1 - p) * -60 };
  });
  // 두 눈에서 나가는 짧은 시선
  const eyes = L.items.filter(it => it.ch === 'O').map(it => {
    const s = S0, hw = .43 - s * .9, r = (.5 - s) * .8;
    return [it.x + (.43 + lx * (hw - r * .55)) * lh, ly + (lyy * (.5 - s) * .25) * lh];
  });
  if (t > 5.5 && t < 5.7) eyes.forEach(([x, y]) => beam(ctx, x, y, -100, y + 40, oExpo(seg(t, 5.52, 5.62)), RED, 5));
  if (t > 5.75 && t < 5.95) eyes.forEach(([x, y]) => beam(ctx, x, y, 2020, y + 40, oExpo(seg(t, 5.77, 5.87)), RED, 5));
  ctx.restore();
  if (t >= 6.0) hud(ctx, t, eyes, push);
}
function hud(ctx, t, eyes, push) {
  const a = oExpo(seg(t, 6.0, 6.2));
  ctx.save(); ctx.globalAlpha = a;
  ctx.translate(960, 540); ctx.scale(push, push); ctx.translate(-960, -540);
  const bar = (x0, x1, fill, dir) => {
    const y = 330, h = 40, k = 18;
    ctx.strokeStyle = PAPER; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(x0 + k, y); ctx.lineTo(x1 + k, y); ctx.lineTo(x1 - k, y + h); ctx.lineTo(x0 - k, y + h); ctx.closePath(); ctx.stroke();
    if (fill > 0) { ctx.save(); ctx.clip(); ctx.fillStyle = PAPER; if (dir > 0) ctx.fillRect(x0 - k, y, (x1 - x0 + 2 * k) * fill, h); else ctx.fillRect(x1 + k - (x1 - x0 + 2 * k) * fill, y, (x1 - x0 + 2 * k) * fill, h); ctx.restore(); }
  };
  const slideIn = 1 - oExpo(seg(t, 6.0, 6.25));
  ctx.save(); ctx.translate(-400 * slideIn, 0); bar(150, 830, 1, 1); txt(ctx, 'IVE', 150, 300, { font: MONO, size: 26, color: PAPER, align: 'left', track: 8 }); ctx.restore();
  const drain = 1 - oExpo(seg(t, 6.68, 6.76));
  ctx.save(); ctx.translate(400 * slideIn, 0);
  if (t > 6.68 && t < 6.9) { ctx.fillStyle = RED; ctx.globalAlpha = a * (1 - seg(t, 6.68, 6.9)); ctx.fillRect(1090 - 18, 330, 680 + 36, 40); ctx.globalAlpha = a; }
  bar(1090, 1770, drain, -1); txt(ctx, 'CHALLENGER', 1770, 300, { font: MONO, size: 26, color: PAPER, align: 'right', track: 8 });
  ctx.restore();
  ctx.strokeStyle = PAPER; ctx.lineWidth = 3; ctx.strokeRect(910, 312, 100, 76);
  txt(ctx, '99', 960, 353, { size: 60, color: PAPER });
  ctx.restore();
  // ROUND 1 (늘이기 등장) → FIGHT (블록 마스크) → K.O. (도장)
  if (t >= 6.0 && t < 6.5) {
    const p = oExpo(seg(t, 6.0, 6.2)), q = iCub(seg(t, 6.42, 6.5));
    ctx.save(); ctx.translate(960, 660 - q * 300); ctx.scale(lerp(4.2, 1, p), 1); ctx.transform(1, 0, -.18, 1, 0, 0);
    txt(ctx, 'ROUND 1', 0, 0, { size: 230, color: PAPER, track: 4, alpha: 1 - q }); ctx.restore();
  }
  if (t >= 6.5 && t < 7.0) {
    ctx.save(); ctx.translate(960, 660); ctx.transform(1, 0, -.18, 1, 0, 0);
    blockText(ctx, 'FIGHT', 0, 0, t, 6.5, { font: 'Anton', size: 260, color: PAPER, box: RED, track: 6 }); ctx.restore();
  }
  if (t >= 6.58 && t < 6.75) eyes.forEach(([x, y]) => beam(ctx, x, y, 1640, 350, oExpo(seg(t, 6.58, 6.68)), RED, 6));
  if (t >= 7.0) {
    const p = seg(t, 7.0, 7.22), sc = lerp(2.6, 1, oBack(p, 1.6)) * (1 + .012 * Math.sin((t - 7.2) * 6));
    ctx.save(); ctx.translate(960, 680); ctx.rotate(-.09); ctx.scale(sc, sc);
    txt(ctx, 'K.O.', 10, 10, { size: 470, color: '#000', track: -4, alpha: .5 });
    txt(ctx, 'K.O.', 0, 0, { size: 470, color: RED, track: -4 }); ctx.restore();
    blockText(ctx, 'WINNER  IVE   ·   TIME 0.01 SEC', 960, 975, t, 7.2, { font: MONO, size: 28, color: INK, box: PAPER, track: 8 });
  }
  if (t > 7.78) { const [x0, y0, x1, y1] = lineThrough(CUT2, 1400); beam(ctx, x0, y0, x1, y1, oExpo(seg(t, 7.78, 7.9)), RED, 7); }
}

// S3 8–12s: 여섯 칸의 눈 → 한가운데로 모이는 시선 → CAN
const PANELS = (() => { const out = [], cw = 500, ch = 380, gx = 34, gy = 34; for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) out.push({ x: 960 + (c - 1) * (cw + gx) - cw / 2, y: 540 + (r - .5) * (ch + gy) - ch / 2, w: cw, h: ch, i: r * 3 + c }); return out; })();
let HALF = null;
function halftoneTile() {
  if (HALF) return HALF; HALF = mk(500, 380); const g = HALF.getContext('2d');
  g.fillStyle = COB;
  for (let y = 0; y < 380; y += 14) for (let x = (y / 14) % 2 ? 7 : 0; x < 500; x += 14) { const r = 4.6 * Math.pow(y / 380, 1.6); if (r > .4) { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); } }
  return HALF;
}
function panelEye(t, P) {
  const cx = P.x + P.w / 2, cy = P.y + P.h / 2 - 10, w = 300, h = 124;
  const open = oExpo(seg(t, 8.35 + P.i * .04, 8.55 + P.i * .04));
  const tx = cl((960 - cx) / 520, -1, 1), ty = cl((540 - cy) / 220, -1, 1);
  const wander = Math.sin(t * 2.2 + P.i * 1.7) * .5;
  const k = oExpo(seg(t, 9.0, 9.08));
  return { cx, cy, w, h, open, lx: lerp(wander, tx, k), ly: lerp(Math.cos(t * 1.7 + P.i) * .3, ty, k) };
}
function setCob(ctx, t) { ctx.fillStyle = COB; ctx.fillRect(-80, -80, W + 160, H + 160); dotGrid(ctx, COB2, 32, 3, -t * 20); }
function scenePanels(ctx, t) {
  setCob(ctx, t);
  const z = 1 + .15 * oCub(seg(t, 9.2, 9.5));
  ctx.save(); ctx.translate(960, 540); ctx.scale(z, z); ctx.translate(-960, -540);
  PANELS.forEach(P => {
    const t0 = 8.0 + P.i * .05, p = oExpo(seg(t, t0, t0 + .2));
    if (p <= 0) return;
    const dir = [[-1, 0], [0, -1], [1, 0], [-1, 0], [0, 1], [1, 0]][P.i];
    ctx.save(); ctx.translate(dir[0] * 1100 * (1 - p), dir[1] * 700 * (1 - p));
    const rot = (hash(P.i, 4) - .5) * .05; ctx.translate(P.x + P.w / 2, P.y + P.h / 2); ctx.rotate(rot); ctx.translate(-P.x - P.w / 2, -P.y - P.h / 2);
    ctx.fillStyle = PAPER; ctx.fillRect(P.x, P.y, P.w, P.h);
    ctx.save(); ctx.beginPath(); ctx.rect(P.x, P.y, P.w, P.h); ctx.clip(); ctx.globalAlpha = .55; ctx.drawImage(halftoneTile(), P.x, P.y); ctx.restore();
    ctx.strokeStyle = INK; ctx.lineWidth = 6; ctx.strokeRect(P.x, P.y, P.w, P.h);
    txt(ctx, '0' + (P.i + 1), P.x + 22, P.y + 30, { font: MONO, size: 22, color: INK, align: 'left', track: 4 });
    const E = panelEye(t, P);
    drawEye(ctx, E.cx, E.cy, E.w, E.h, E.open, E.lx, E.ly, { lid: INK, white: '#fff', lw: 7 });
    ctx.restore();
  });
  // 여섯 시선이 한가운데로
  if (t > 9.2) PANELS.forEach(P => { const E = panelEye(t, P), [ix, iy] = irisPos(E.cx, E.cy, E.w, E.h, E.lx, E.ly); beam(ctx, ix, iy, 960, 540, oExpo(seg(t, 9.2 + P.i * .012, 9.36 + P.i * .012)), RED, 6); });
  ctx.restore();
  if (t > 9.34) { const r = 2600 * oExpo(seg(t, 9.36, 9.56)); star4(ctx, 960, 540, r, t * 1.5, '#fff'); if (t > 9.5) { ctx.fillStyle = '#fff'; ctx.globalAlpha = seg(t, 9.5, 9.56); ctx.fillRect(-80, -80, W + 160, H + 160); ctx.globalAlpha = 1; } }
}
const CANY = 500, CANH = 560;
function canStar() { const L = layout('CAN', 960, CANY, CANH); const A = L.items[1]; const s = S0; return [A.x + (.35) * CANH, CANY - CANH / 2 + ((s + .7 - s * .9) / 2) * CANH]; }
function sceneCan(ctx, t) {
  setCob(ctx, t);
  const rise = 11.0, sc = (1 + .05 * seg(t, 9.62, 11)) * (1 + .22 * iCub(seg(t, rise, 11.6)));
  ctx.save(); ctx.translate(960, 540); ctx.scale(sc, sc); ctx.translate(-960, -540);
  drawWord(ctx, 'CAN', 960, CANY, CANH, { fg: PAPER }, i => {
    const t0 = 9.66 + i * .08, p = oExpo(seg(t, t0, t0 + .12));
    return { s: lerp(.05, S0, p), a: cl(seg(t, t0 - .05, t0) * 1.0) };
  });
  const [sx, sy] = canStar();
  // 흰 별이 A의 속공간으로 수축 (면적으로 이징)
  const p = seg(t, 9.56, 9.86), area = lerp(2600 * 2600, 70 * 70, oCub(p)), r = Math.sqrt(area) * (1 + .06 * Math.sin(t * 5));
  const col = p < 1 ? '#fff' : RED;
  star4(ctx, lerp(960, sx, oCub(p)), lerp(540, sy, oCub(p)), r, t * 1.5, col);
  ctx.restore();
  txt(ctx, typed('ONE LOOK IS ALL IT TAKES', t, 10.1), 960, 900, { font: MONO, size: 30, color: PAPER, track: 14 });
  ctx.save(); ctx.translate(110, 540); ctx.rotate(-Math.PI / 2); txt(ctx, 'GIRL HERO  ·  SPIN-OFF', 0, 0, { font: MONO, size: 22, color: PAPER, track: 10, alpha: .7 * seg(t, 10.2, 10.4) }); ctx.restore();
  ctx.save(); ctx.translate(1810, 540); ctx.rotate(Math.PI / 2); txt(ctx, 'IVE', 0, 0, { font: MONO, size: 22, color: PAPER, track: 14, alpha: .7 * seg(t, 10.2, 10.4) }); ctx.restore();
}
function sceneStop(ctx) { ctx.fillStyle = INK; ctx.fillRect(-80, -80, W + 160, H + 160); ctx.fillStyle = RED; ctx.beginPath(); ctx.arc(960, 540, 12, 0, 7); ctx.fill(); }

// S4 12–16s: KILL. 박자마다 시선이 글자를 벤다 → 반전 → 다섯 줄
const KCUTS = [{ t: 12.5, x: 640, y: 520, a: .55, d: 90, g: 22 }, { t: 13.0, x: 1260, y: 560, a: -.42, d: -110, g: 26 }, { t: 13.5, x: 960, y: 610, a: .04, d: 150, g: 30 }];
function sceneKill(ctx, t) {
  ctx.fillStyle = RED; ctx.fillRect(-80, -80, W + 160, H + 160);
  burst(ctx, 960, 560, 28, RED2, t * .15);
  // KILL 층
  c1.clearRect(0, 0, W, H);
  const p0 = oExpo(seg(t, 12.0, 12.1)), s0 = lerp(1.3, 1, p0) * (1 + .03 * seg(t, 12, 14));
  c1.save(); c1.translate(960, 560); c1.scale(s0, s0); c1.translate(-960, -560);
  drawWord(c1, 'KILL', 960, 560, 760, { fg: INK, track: .07 });
  c1.restore();
  let src = off1, dst = off2, dc = c2;
  for (const k of KCUTS) {
    if (t < k.t) break;
    const p = oExpo(seg(t, k.t, k.t + .2));
    dc.clearRect(0, 0, W, H); splitDraw(dc, src, k, k.d * p + (t - k.t) * 8 * Math.sign(k.d), k.g * p, 0);
    [src, dst] = [dst, src]; dc = dst.getContext('2d');
  }
  ctx.drawImage(src, 0, 0);
  for (const k of KCUTS) { if (t > k.t - .07 && t < k.t + .08) { const [x0, y0, x1, y1] = lineThrough(k, 1400); beam(ctx, x0, y0, x1, y1, oExpo(seg(t, k.t - .07, k.t)), '#fff', 5); } }
  txt(ctx, 'Looks can', 960, 118, { font: 'Instrument Serif', italic: true, size: 96, color: INK });
  txt(ctx, 'NO SECOND TAKE', 960, 990, { font: MONO, size: 26, color: INK, track: 14, alpha: seg(t, 12.3, 12.4) });
}
function sceneRows(ctx, t) {
  ctx.fillStyle = INK; ctx.fillRect(-80, -80, W + 160, H + 160);
  const col = 1 - ioCub(seg(t, 15.5, 15.85));
  for (let r = 0; r < 5; r++) {
    const t0 = 14.0 + Math.abs(r - 2) * 2 / 60, p = oExpo(seg(t, t0, t0 + .2));
    const y = lerp(540, 540 + (r - 2) * 205, col), dir = r % 2 ? 1 : -1, off = dir * (t - 14) * 520 + r * 180;
    ctx.save(); ctx.translate(0, y); ctx.scale(1, Math.max(.004, p * col)); ctx.translate(0, -y);
    for (let k = -3; k < 4; k++) {
      const cx = 960 + k * 760 + ((off % 760) + 760) % 760 - 380;
      drawWord(ctx, 'KILL', cx, y, 172, { fg: r === 2 ? RED : '#26262c' });
      if (r === 2) { ctx.fillStyle = PAPER; ctx.beginPath(); ctx.arc(cx + 380, y, 14, 0, 7); ctx.fill(); }
    }
    ctx.restore();
  }
  // 다섯 줄이 한 줄로 → 그 선이 눈꺼풀이 된다
  if (t > 15.5) { const w = lerp(W, 1300, ioCub(seg(t, 15.7, 16.0))); ctx.fillStyle = PAPER; ctx.globalAlpha = seg(t, 15.6, 15.8); ctx.fillRect(960 - w / 2, 538, w, 4); ctx.globalAlpha = 1; }
}

// S5 16–20s: 눈 모양 조리개가 열리며 로고 → 정면 응시 → 섬광 → 감긴 눈 (= 첫 프레임)
function lockup(ctx, t) {
  ctx.fillStyle = INK; ctx.fillRect(-80, -80, W + 160, H + 160);
  stripes(ctx, '#111115', 60, 20, -.5, t * 20);
  let open = oExpo(seg(t, 16.7, 16.88)), lx = 0, pr = .42;
  lx = t < 17.0 ? 0 : t < 17.25 ? -oExpo(seg(t, 17.0, 17.06)) : t < 17.5 ? lerp(-1, 1, oExpo(seg(t, 17.25, 17.31))) : lerp(1, 0, oExpo(seg(t, 17.5, 17.58)));
  if (t > 18.0) pr = lerp(.42, .22, oExpo(seg(t, 18.0, 18.15)));
  const push = 1 + .03 * seg(t, 16, 18) + .05 * iCub(seg(t, 18.0, 18.3));
  ctx.save(); ctx.translate(960, 540); ctx.scale(push, push); ctx.translate(-960, -540);
  const asm = (i, n, seed) => { const t0 = 16.0 + hash(i, seed) * .2, p = oExpo(seg(t, t0, t0 + .4)); return { dx: (hash(i, seed, 1) - .5) * 900 * (1 - p), dy: (hash(i, seed, 2) - .5) * 600 * (1 - p), rot: (hash(i, seed, 3) - .5) * 1.4 * (1 - p) }; };
  const L = drawWord(ctx, 'LOOKS', 960, 330, 280, { fg: PAPER, white: PAPER, open, lx, pr }, i => asm(i, 5, 1));
  drawWord(ctx, 'KILL', 960, 770, 340, { fg: PAPER }, i => asm(i, 4, 2));
  txt(ctx, 'can', 960, 548, { font: 'Instrument Serif', italic: true, size: 150, color: RED, alpha: seg(t, 16.25, 16.45) });
  blockText(ctx, 'IVE', 790, 552, t, 17.5, { font: 'Anton', size: 64, color: PAPER, box: RED, track: 18, align: 'right' });
  blockText(ctx, '등장하는 순간, 이미 끝', 1130, 552, t, 17.58, { font: 'Black Han Sans', size: 40, color: PAPER, box: RED, track: 2, align: 'left' });
  ctx.restore();
  // 정면 응시 → 두 홍채가 화면을 채운다
  if (t > 18.25) {
    const e = seg(t, 18.25, 18.5), R = Math.sqrt(lerp(0, 2300 * 2300, iCub(e)));
    L.items.filter(it => it.ch === 'O').forEach(it => { const cx = 960 + (it.x + .43 * 280 - 960) * push, cy = 540 + (330 - 540) * push; ctx.fillStyle = RED; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill(); });
  }
}
// 조리개: 눈 모양 구멍으로 아래 그림을 보인다
function aperture(ctx, t, drawUnder) {
  const e = oExpo(seg(t, 16.0, 16.5));
  drawUnder(c4, t);
  ctx.fillStyle = INK; ctx.fillRect(-80, -80, W + 160, H + 160);
  ctx.save(); ctx.beginPath(); almond(ctx, 960, 540, lerp(650, 2600, e), lerp(2, 1400, e)); ctx.clip(); ctx.drawImage(off4, 0, 0); ctx.restore();
  ctx.strokeStyle = PAPER; ctx.lineWidth = 4; ctx.globalAlpha = 1 - e; ctx.beginPath(); almond(ctx, 960, 540, lerp(650, 2600, e), lerp(2, 1400, e)); ctx.stroke(); ctx.globalAlpha = 1;
}

// ---------- 타임라인 ----------
function drawFrame(ctx, t) {
  ctx.save();
  const [sx, sy] = shake(t); ctx.translate(sx, sy);
  if (t < 0.9) sceneEye(ctx, t, false);
  else if (t < 1.28) { // S0 → S1 베기
    sceneSlate(ctx, t);
    const p = seg(t, .9, 1.28);
    sceneEye(c3, Math.min(t, .899), false);
    const [ix, iy] = irisPos(E0.x, E0.y, E0.w, E0.h, 1, 0); const [, , x1, y1] = lineThrough(CUT0, 1400); beam(c3, ix, iy, x1, y1, 1);
    const [x0, y0] = lineThrough(CUT0, 1400); beam(c3, x0, y0, x1, y1, 1, RED, 5);
    splitDraw(ctx, off3, CUT0, oCub(p) * 300, oExpo(p) * 1400, oCub(p) * .06);
  }
  else if (t < 3.76) sceneSlate(ctx, t);
  else if (t < 4.0) sceneSlateZoom(ctx, t);
  else if (t < 7.9) sceneLooks(ctx, t);
  else if (t < 8.2) { // S2 → S3 베기
    scenePanels(ctx, t);
    sceneLooks(c3, 7.899); const [x0, y0, x1, y1] = lineThrough(CUT2, 1400); beam(c3, x0, y0, x1, y1, 1, RED, 7);
    const p = seg(t, 7.9, 8.2); splitDraw(ctx, off3, CUT2, oCub(p) * 260, oExpo(p) * 2200, oCub(p) * .05);
  }
  else if (t < 9.56) scenePanels(ctx, t);
  else if (t < 11.6) sceneCan(ctx, t);
  else if (t < 12.0) sceneStop(ctx);
  else if (t < 14.0) sceneKill(ctx, t);
  else if (t < 16.0) sceneRows(ctx, t);
  else if (t < 16.5) aperture(ctx, t, lockup);
  else if (t < 18.5) lockup(ctx, t);
  else { // 섬광 → 큰 눈이 정면을 보다 감는다
    sceneEye(ctx, t, true);
    const f = 1 - oCub(seg(t, 18.5, 18.85));
    if (f > 0) { ctx.fillStyle = `rgba(255,255,255,${f})`; ctx.fillRect(-50, -50, W + 100, H + 100); }
  }
  ctx.restore();
}

// ---------- 후처리 (WebGL: 색 분리 · 그레인 · 비네트) ----------
const frame = mk(), fctx = frame.getContext('2d');
const glc = mk(); const gl = glc.getContext('webgl', { preserveDrawingBuffer: true, premultipliedAlpha: false });
let prog, tex, U = {};
function initGL() {
  const vs = `attribute vec2 p;varying vec2 uv;void main(){uv=p*.5+.5;gl_Position=vec4(p,0,1);}`;
  const fs = `precision highp float;varying vec2 uv;uniform sampler2D tex;uniform float chroma,grain,seed,vig;uniform vec2 res;
  float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+seed)*43758.5453);}
  void main(){vec2 d=uv-.5;float r=length(d*vec2(1.0,.5625));vec2 o=d*chroma*.012*(.4+r*2.);
  vec3 c=vec3(texture2D(tex,clamp(uv+o,0.,1.)).r,texture2D(tex,uv).g,texture2D(tex,clamp(uv-o,0.,1.)).b);
  c+= (h(floor(uv*res))-.5)*grain;
  c*=1.-vig*smoothstep(.25,.75,r*1.2);
  gl_FragColor=vec4(c,1);}`;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(s); return s; };
  prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(prog); gl.useProgram(prog);
  const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  for (const n of ['chroma', 'grain', 'seed', 'vig', 'res']) U[n] = gl.getUniformLocation(prog, n);
  gl.viewport(0, 0, W, H);
}
function post(t) {
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, frame);
  const still = t >= 11.6 && t < 12.0;
  gl.uniform1f(U.chroma, still ? 0 : chromaAt(t)); gl.uniform1f(U.grain, .07);
  gl.uniform1f(U.seed, still ? 3 : Math.floor(t * 12) % 97); gl.uniform1f(U.vig, .35); gl.uniform2f(U.res, W, H);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

// ---------- 공개 API ----------
const out = document.getElementById('out'), octx = out.getContext('2d');
window.init = async () => {
  await document.fonts.load('100px Anton'); await document.fonts.load('italic 100px "Instrument Serif"');
  await document.fonts.load('40px "Black Han Sans"', '등장하는 순간, 이미 끝'); await document.fonts.load(`30px "${MONO}"`);
  initGL(); return { fps: FPS, frames: DUR * FPS, w: W, h: H };
};
// 서브프레임 n장(셔터 반 프레임)을 평균해 모션 블러
window.renderFrame = (f, n = 3, q = .93) => {
  for (let k = 0; k < n; k++) {
    const t = (f + k * .5 / n) / FPS;
    fctx.setTransform(1, 0, 0, 1, 0, 0); drawFrame(fctx, t); post(t);
    octx.globalAlpha = 1 / (k + 1); octx.drawImage(glc, 0, 0);
  }
  octx.globalAlpha = 1;
  return out.toDataURL('image/jpeg', q);
};
