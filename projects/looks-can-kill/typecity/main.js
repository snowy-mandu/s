// IVE — Looks Can Kill / TYPE CITY (three.js 키네틱 타이포)
// 형식 아이디어: 글자가 도시가 되고, 영웅은 빛이다. 컷 없이 카메라 하나가 밤의 도시를 날고,
// 가사 한 줄마다 새 길로 꺾어 들어가며 그 줄의 단어들이 박자마다 하늘에서 착지한다.
// 가사는 lyrics.txt(한 줄에 한 행, 괄호 안은 코러스)를 읽는다. 없으면 직접 쓴 자리 표시 문장을 쓴다.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import * as opentype from 'opentype';

const W = 1920, H = 1080, FPS = 30, START = 60.29, P = 0.4631, BAR = 4 * P;
const LT0 = 62.144 - START, DUR = 31.49;
const lineT = i => LT0 + i * 2 * BAR;
const SIX = ['#ff2a3a', '#ffc61a', '#3fe0b0', '#ff3fa4', '#18b4ff', '#7a4dff'];
const LINE_COL = [2, 5, 2, 5, 0, 3, 1, 4];
const STAND_IN = [
  'ENTER — SIX HEROES', '한 번 보면 끝 (ALREADY WON)', 'ENTER — SIX HEROES', '시선 하나로 정리 (NO SECOND TAKE)',
  'RED YELLOW MINT PINK', 'CYAN PURPLE HERO MODE (ONE LOOK)', 'RED YELLOW MINT PINK', '다 같이 착지 (GAME OVER)',
];

// ---------- 시간 도구 ----------
const cl = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const seg = (t, a, b) => cl((t - a) / (b - a));
const oExpo = x => x >= 1 ? 1 : 1 - Math.pow(2, -10 * x);
const iCub = x => x * x * x;
const oCub = x => 1 - Math.pow(1 - x, 3);
const ioCub = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
function hash(a, b = 0, c = 0) { const h = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453; return h - Math.floor(h); }
const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------- 렌더러 ----------
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1); renderer.setSize(W, H);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color('#06060b');
scene.fog = new THREE.FogExp2('#06060b', .0105);
const camera = new THREE.PerspectiveCamera(42, W / H, .5, 900);
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(W, H), .55, .45, .9);
composer.addPass(bloom); composer.addPass(new OutputPass());

scene.add(new THREE.HemisphereLight('#3a3d66', '#050508', .55));
const moon = new THREE.DirectionalLight('#9aa6ff', .5); moon.position.set(-40, 80, 30); scene.add(moon);

// ---------- 길: 줄마다 한 번씩 꺾인다 ----------
const TURN = [0, 1, -1, 1, -1, 1, -1, 1];
const ST = []; // 줄마다 {p: 단어 자리, d: 진행 방향, c: 다음 모퉁이}
{
  let p = V(0, 0, 0), d = V(0, 0, -1);
  for (let i = 0; i < 8; i++) {
    if (i > 0) { const c = ST[i - 1].c; d = TURN[i] > 0 ? V(d.z, 0, -d.x) : V(-d.z, 0, d.x); p = c.clone().addScaledVector(d, 62); }
    ST.push({ p: p.clone(), d: d.clone(), side: V(-d.z, 0, d.x), c: p.clone().addScaledVector(d, 46) });
  }
}
const PLAZA = ST[7].p.clone().addScaledVector(ST[7].d, 70);
function nearPath(x, z, r) {
  const pts = [ST[0].p.clone().addScaledVector(ST[0].d, -90)];
  ST.forEach(s => { pts.push(s.p); pts.push(s.c); });
  pts.push(PLAZA);
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], abx = b.x - a.x, abz = b.z - a.z, L = abx * abx + abz * abz;
    const u = cl(((x - a.x) * abx + (z - a.z) * abz) / L), dx = a.x + abx * u - x, dz = a.z + abz * u - z;
    if (dx * dx + dz * dz < r * r) return true;
  }
  return Math.hypot(x - PLAZA.x, z - PLAZA.z) < 78;
}

// ---------- 도시 ----------
function windowTex() {
  const c = document.createElement('canvas'); c.width = 128; c.height = 256; const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 128, 256);
  for (let y = 6; y < 256; y += 14) for (let x = 6; x < 128; x += 14) { const h = hash(x, y); if (h > .72) { g.fillStyle = h > .95 ? '#ffd9a0' : '#8fa4ff'; g.globalAlpha = .35 + hash(y, x) * .5; g.fillRect(x, y, 7, 8); } }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
{
  const box = new THREE.BoxGeometry(1, 1, 1); box.translate(0, .5, 0);
  const mat = new THREE.MeshStandardMaterial({ color: '#15151f', roughness: .8, metalness: .2, emissive: '#ffffff', emissiveMap: windowTex(), emissiveIntensity: .55 });
  const cells = [];
  const xs = ST.map(s => s.p.x).concat([PLAZA.x]), zs = ST.map(s => s.p.z).concat([PLAZA.z]);
  const x0 = Math.min(...xs) - 180, x1 = Math.max(...xs) + 180, z0 = Math.min(...zs) - 180, z1 = Math.max(...zs) + 220;
  for (let x = x0; x < x1; x += 19) for (let z = z0; z < z1; z += 19) if (!nearPath(x, z, 31)) cells.push([x, z]);
  const im = new THREE.InstancedMesh(box, mat, cells.length), m = new THREE.Matrix4();
  cells.forEach(([x, z], i) => { const h = 10 + Math.pow(hash(x, z), 2) * 90, w = 11 + hash(z, x) * 5; m.compose(V(x, 0, z), new THREE.Quaternion(), V(w, h, w)); im.setMatrixAt(i, m); });
  scene.add(im);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshStandardMaterial({ color: '#08080d', roughness: .32, metalness: .55 }));
  ground.rotation.x = -Math.PI / 2; scene.add(ground);
  // 차선: 속도감
  const dashG = new THREE.PlaneGeometry(.5, 4); dashG.rotateX(-Math.PI / 2);
  const dashM = new THREE.MeshBasicMaterial({ color: '#c9c9d6' });
  const dashes = [];
  const pts = [ST[0].p.clone().addScaledVector(ST[0].d, -90)]; ST.forEach(s => { pts.push(s.p, s.c); });
  for (let i = 0; i < pts.length - 1; i++) { const a = pts[i], b = pts[i + 1], L = a.distanceTo(b); for (let s = 0; s < L; s += 10) dashes.push([a.clone().lerp(b, s / L), Math.atan2(b.x - a.x, b.z - a.z)]); }
  const di = new THREE.InstancedMesh(dashG, dashM, dashes.length);
  dashes.forEach(([p, a], i) => { m.compose(V(p.x, .02, p.z), new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), a), V(1, 1, 1)); di.setMatrixAt(i, m); });
  scene.add(di);
}

// ---------- 글자 ----------
let FONT;
function textShapes(str, size) {
  // 글자마다 따로 모양을 만든다(한 경로로 합치면 구멍 있는 글자 뒤의 글자가 구멍으로 잘못 잡힌다)
  const out = []; let x = 0; const sc = size / FONT.unitsPerEm;
  FONT.stringToGlyphs(str).forEach((g, i, arr) => {
    const path = g.getPath(x, 0, size), sp = new THREE.ShapePath();
    for (const c of path.commands) {
      if (c.type === 'M') sp.moveTo(c.x, -c.y); else if (c.type === 'L') sp.lineTo(c.x, -c.y);
      else if (c.type === 'C') sp.bezierCurveTo(c.x1, -c.y1, c.x2, -c.y2, c.x, -c.y); else if (c.type === 'Q') sp.quadraticCurveTo(c.x1, -c.y1, c.x, -c.y);
    }
    out.push(...sp.toShapes(false));
    x += g.advanceWidth * sc + (i < arr.length - 1 ? FONT.getKerningValue(g, arr[i + 1]) * sc : 0);
  });
  return out;
}
function textMesh(str, size, depth, faceMat, sideMat) {
  const g = new THREE.ExtrudeGeometry(textShapes(str, size), { depth, bevelEnabled: true, bevelThickness: .18, bevelSize: .12, bevelSegments: 2, curveSegments: 6 });
  g.computeBoundingBox(); const bb = g.boundingBox;
  g.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -depth / 2);
  const mesh = new THREE.Mesh(g, [faceMat, sideMat]);
  mesh.userData.w = bb.max.x - bb.min.x; mesh.userData.h = bb.max.y - bb.min.y;
  return mesh;
}
function parseLine(s) {
  const par = []; const main = s.replace(/\(([^)]*)\)/g, (_, x) => { par.push(x.trim()); return ' '; }).trim();
  let toks = main.split(/\s+/).filter(Boolean);
  return { toks, par: par.join('  ') };
}

const LINES = []; // {group, words:[{mesh, onset, ring}], sign, light}
function buildLines(texts) {
  texts.forEach((txt, i) => {
    const st = ST[i], col = new THREE.Color(SIX[LINE_COL[i]]);
    const face = new THREE.MeshStandardMaterial({ color: '#f4f1ea', roughness: .35, metalness: .1, emissive: '#ffffff', emissiveIntensity: .04 });
    const side = new THREE.MeshStandardMaterial({ color: col, roughness: .4, metalness: .3, emissive: col, emissiveIntensity: .22 });
    const { toks, par } = parseLine(txt);
    const size = toks.length > 4 ? 4.4 : 5.6, maxW = 38, gap = size * .45;
    const meshes = toks.map(tk => textMesh(tk, size, 2.4, face, side));
    // 줄바꿈
    const rows = [[]]; let rw = 0;
    meshes.forEach(m => { if (rw + m.userData.w > maxW && rows[rows.length - 1].length) { rows.push([]); rw = 0; } rows[rows.length - 1].push(m); rw += m.userData.w + gap; });
    const group = new THREE.Group(); group.position.copy(st.p); group.rotation.y = Math.atan2(-st.d.x, -st.d.z); scene.add(group);
    const words = []; const step = toks.length > 7 ? P / 4 : P / 2;
    rows.forEach((row, r) => {
      const tw = row.reduce((a, m) => a + m.userData.w, 0) + gap * (row.length - 1); let x = -tw / 2;
      const y = (rows.length - 1 - r) * size * 1.35;
      row.forEach(m => {
        m.position.set(x + m.userData.w / 2, y, (hash(i, words.length) - .5) * 2); x += m.userData.w + gap;
        m.userData.base = m.position.clone(); m.userData.tilt = (hash(i, words.length, 2) - .5) * .5;
        group.add(m);
        const ring = new THREE.Mesh(new THREE.RingGeometry(.92, 1, 64), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
        ring.rotation.x = -Math.PI / 2; ring.position.set(m.position.x, .05, m.position.z); group.add(ring);
        words.push({ mesh: m, ring, onset: lineT(i) + words.length * step, row: r });
      });
    });
    // 괄호 코러스: 오른쪽 건물 벽의 네온 간판
    let sign = null;
    if (par) {
      const nm = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 2.2 });
      sign = textMesh(par, 2.2, .3, nm, nm);
      sign.position.set(0, rows.length * size * 1.35 + 3.5, -8); sign.rotation.y = 0; group.add(sign);
      sign.userData.t0 = lineT(i) + 1.5 * BAR;
    }
    const light = new THREE.PointLight(col, 0, 90, 1.6); light.position.copy(st.p).add(V(0, 14, 10)); scene.add(light);
    const cw = Math.max(...rows.map(r => r.reduce((a, m) => a + m.userData.w, 0) + gap * (r.length - 1))), chh = rows.length * size * 1.35;
    st.dist = Math.max(26, cw * 1.05 + 6, chh * 2.4 + 8); st.lookY = chh * .5 + (par ? 2 : 0);
    LINES.push({ group, words, sign, light, col });
  });
}

// ---------- 영웅의 빛 (후크 4줄) ----------
const TRAILS = [];
function buildTrails() {
  for (let i = 4; i < 8; i++) {
    const st = ST[i], c = st.p.clone().add(V(0, 5, 0));
    for (let k = 0; k < 6; k++) {
      const s = k % 2 ? 1 : -1, pts = [];
      pts.push(c.clone().addScaledVector(st.d, -60).addScaledVector(st.side, s * (30 + k * 3)).add(V(0, 2 + k * 2, 0)));
      for (let q = 0; q < 5; q++) { const a = q / 4 * Math.PI * 1.6 + k; pts.push(c.clone().addScaledVector(st.side, s * (24 + k * 2) * Math.cos(q / 4 * Math.PI)).addScaledVector(st.d, 6 + Math.sin(q / 4 * Math.PI) * 14 + q * 3).add(V(0, 1 + q * 3 + hash(i, k, q) * 5, 0))); }
      pts.push(c.clone().addScaledVector(st.d, 70).addScaledVector(st.side, s * 20).add(V(0, 30 + k * 3, 0)));
      const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 260, .32, 8, false);
      const col = new THREE.Color(SIX[k]);
      const mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(2.2) }));
      mesh.userData = { t0: lineT(i) + k * P / 2, n: g.index.count }; mesh.geometry.setDrawRange(0, 0); scene.add(mesh);
      TRAILS.push(mesh);
    }
  }
}

// ---------- 마지막: 땅에서 솟는 LOOKS CAN KILL (눈이 뜨는 O) ----------
const S0 = .24;
function glyphPolys(ch, s = S0) {
  switch (ch) {
    case 'L': return { w: .62, p: [[[0, .1], [s, 0], [s, 1 - s], [.62, 1 - s], [.54, 1], [0, 1]]] };
    case 'I': return { w: s, p: [[[0, .1], [s, 0], [s, 1], [0, 1]]] };
    case 'K': { const b = s * 1.15; return { w: .76, p: [[[0, 0], [s, 0], [s, 1], [0, 1]], [[s * .5, .52], [.76 - b, 0], [.76, 0], [s * .5 + b, .52]], [[s + .02 - b * .2, .4], [s + .02 + b * .8, .4], [.76, 1], [.76 - b, 1]]] }; }
    case 'S': { const w = .64, c = .14, m1 = .5 - s / 2, m2 = .5 + s / 2; return { w, p: [[[c, 0], [w, 0], [w, s], [s, s], [s, m1], [w - c, m1], [w, m1 + c], [w, 1 - c], [w - c, 1], [0, 1], [0, 1 - s], [w - s, 1 - s], [w - s, m2], [c, m2], [0, m2 - c], [0, c]]] }; }
    case 'C': return { w: .66, p: [[[.14, 0], [.68, 0], [.6, s], [s, s], [s, 1 - s], [.64, 1 - s], [.64, 1], [.14, 1], [0, .86], [0, .14]]] };
    case 'A': return { w: .7, p: [[[.16, 0], [.54, 0], [.7, .16], [.7, 1], [.7 - s, 1], [.7 - s, .7], [s, .7], [s, 1], [0, 1], [0, .16]]], hole: [[s, s], [.7 - s, s], [.7 - s, .7 - s * .9], [s, .7 - s * .9]] };
    case 'N': return { w: .74, p: [[[0, 0], [s, 0], [.74 - s, .6], [.74 - s, 0], [.74, 0], [.74, 1], [.74 - s, 1], [s, .4], [s, 1], [0, 1]]] };
    case 'O': return { w: .86, eye: true };
  }
}
const OCT = [[.16, 0], [.7, 0], [.86, .16], [.86, .84], [.7, 1], [.16, 1], [0, .84], [0, .16]];
function almondPts(cx, cy, hw, hh, n = 24) { const out = []; for (let i = 0; i <= n; i++) { const u = i / n; out.push([lerp(cx - hw, cx + hw, u), cy - 4 * hh * u * (1 - u)]); } for (let i = 1; i < n; i++) { const u = 1 - i / n; out.push([lerp(cx - hw, cx + hw, u), cy + 4 * hh * u * (1 - u)]); } return out; }
const toShape = (pts, sz) => new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x * sz, -y * sz)));
const LOGO = []; let EYES = [];
function buildLogo() {
  const rows = [['LOOKS', 20], ['CAN', 15], ['KILL', 22]], tr = .08;
  const face = new THREE.MeshStandardMaterial({ color: '#f4f1ea', roughness: .3, metalness: .15, emissive: '#ffffff', emissiveIntensity: .18 });
  const side = new THREE.MeshStandardMaterial({ color: '#ff2a3a', roughness: .35, metalness: .3, emissive: '#ff2a3a', emissiveIntensity: .5 });
  const root = new THREE.Group(); root.position.copy(PLAZA); root.rotation.y = Math.atan2(-ST[7].d.x, -ST[7].d.z); scene.add(root);
  let zRow = -34;
  rows.forEach(([word, sz], r) => {
    const ws = [...word].map(ch => glyphPolys(ch).w), tw = (ws.reduce((a, b) => a + b, 0) + tr * (ws.length - 1)) * sz; let x = -tw / 2;
    [...word].forEach((ch, j) => {
      const g = glyphPolys(ch), shapes = [];
      if (g.eye) { const s = toShape(OCT, sz); s.holes.push(new THREE.Path(almondPts(.43, .5, .43 - S0 * .9, .5 - S0).map(([a, b]) => new THREE.Vector2(a * sz, -b * sz)))); shapes.push(s); }
      else if (g.hole) { const s = toShape(g.p[0], sz); s.holes.push(new THREE.Path(g.hole.map(([a, b]) => new THREE.Vector2(a * sz, -b * sz)))); shapes.push(s); }
      else g.p.forEach(p => shapes.push(toShape(p, sz)));
      const geo = new THREE.ExtrudeGeometry(shapes, { depth: 1, bevelEnabled: false }); // 높이는 scale로 키운다
      const mesh = new THREE.Mesh(geo, [face, side]);
      mesh.rotation.x = -Math.PI / 2; mesh.position.set(x, 0, zRow); root.add(mesh);
      mesh.userData = { t0: lineT(7) + BAR * .9 + (r * 4 + j) * .045, hgt: 3 + sz * .3 };
      LOGO.push(mesh);
      if (g.eye) { // 홍채 + 눈꺼풀
        const cx = x + .43 * sz, cz = zRow + .5 * sz;
        const white = new THREE.Mesh(new THREE.CircleGeometry(.24 * sz, 40), new THREE.MeshBasicMaterial({ color: '#f4f1ea' }));
        white.rotation.x = -Math.PI / 2; white.position.set(cx, .2, cz); root.add(white);
        const iris = new THREE.Mesh(new THREE.CircleGeometry(.17 * sz, 40), new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff2a3a').multiplyScalar(2.4) }));
        iris.rotation.x = -Math.PI / 2; iris.position.set(cx, .3, cz); root.add(iris);
        const pupil = new THREE.Mesh(new THREE.CircleGeometry(.07 * sz, 32), new THREE.MeshBasicMaterial({ color: '#000' }));
        pupil.rotation.x = -Math.PI / 2; pupil.position.set(cx, .35, cz); root.add(pupil);
        const lid = new THREE.Mesh(new THREE.ShapeGeometry(toShape(almondPts(0, 0, .43 - S0 * .9, .5 - S0), sz)), face);
        lid.rotation.x = -Math.PI / 2; lid.position.set(cx, .4, cz); root.add(lid);
        EYES.push({ white, iris, pupil, lid, cx, cz, sz });
      }
      x += (g.w + tr) * sz;
    });
    zRow += sz * 1.22;
  });
  LOGO.root = root;
}

// ---------- 카메라 ----------
function camAt(i, t) { // 줄 i를 보는 자리. 줄 동안 천천히 다가간다
  const st = ST[i], k = seg(t, lineT(i), lineT(i) + 2 * BAR), dist = (st.dist || 30) * lerp(1.15, 1, oCub(k));
  const sway = Math.sin(t * .9 + i) * 2.2;
  return { pos: st.p.clone().addScaledVector(st.d, -dist).addScaledVector(st.side, sway).add(V(0, (st.lookY ?? 5) * .7 + 2 + k * 1.2, 0)), look: st.p.clone().add(V(0, st.lookY ?? 5, 0)) };
}
let SHAKE = 0;
function placeCamera(t) {
  let pos, look;
  if (t < lineT(0) - .4) { // 도입: 어두운 길 끝에서 출발
    const e = seg(t, 0, lineT(0) - .4), a = camAt(0, lineT(0));
    pos = a.pos.clone().addScaledVector(ST[0].d, lerp(-50, -12, ioCub(e))).add(V(0, lerp(-2.6, -1, e), 0)); look = a.look;
  } else {
    let i = 0; while (i < 7 && t >= lineT(i + 1) - .42) i++;
    const wStart = lineT(i) - .42, wEnd = lineT(i) + .1;
    if (i > 0 && t < wEnd) { // 모퉁이를 넘어 다음 길로: 단어 위를 뛰어넘는 포물선
      const A = camAt(i - 1, wStart), B = camAt(i, wEnd), u = ioCub(seg(t, wStart, wEnd));
      const C = ST[i - 1].c.clone().add(V(0, 26, 0));
      pos = A.pos.clone().multiplyScalar((1 - u) * (1 - u)).addScaledVector(C, 2 * (1 - u) * u).addScaledVector(B.pos, u * u);
      look = A.look.clone().lerp(B.look, oCub(u));
    } else if (i === 0 && t < lineT(0) + .1) {
      const a0 = camAt(0, lineT(0)), e = seg(t, lineT(0) - .4, lineT(0) + .1);
      pos = a0.pos.clone().addScaledVector(ST[0].d, lerp(-12, 0, oCub(e))).add(V(0, lerp(-1, 0, e), 0)); look = a0.look;
    } else { const a = camAt(i, t); pos = a.pos; look = a.look; }
    // 마지막: 크레인으로 수직 상승해 광장을 내려다본다
    const up = ioCub(seg(t, lineT(7) + BAR * .75, lineT(7) + BAR * 1.75));
    if (up > 0) {
      const top = PLAZA.clone().addScaledVector(ST[7].d, -8).add(V(0, 118, 0)), tl = PLAZA.clone().addScaledVector(ST[7].d, 1);
      pos = pos.clone().lerp(top, up); look = look.clone().lerp(tl, up);
    }
  }
  // 착지 흔들림
  const sh = SHAKE, st = Math.floor(t * 30);
  pos.add(V((hash(st, 1) - .5) * sh, (hash(st, 2) - .5) * sh, 0));
  camera.position.copy(pos); camera.up.set(0, 1, 0);
  if (t > lineT(7) + BAR) { const f = ST[7].d; camera.up.set(f.x, 0, f.z); }
  camera.lookAt(look);
}

// ---------- 한 프레임 ----------
const INTRO_LIGHTS = [];
function update(t) {
  SHAKE = 0;
  // 도입: 여섯 색 불빛이 8분음표마다 하나씩 켜진다
  INTRO_LIGHTS.forEach((L, k) => { const on = t >= k * P / 2 + .05; L.intensity = on ? 900 * (1 + .6 * Math.exp(-(t - k * P / 2) * 8)) : 0; });
  LINES.forEach((Ln, i) => {
    const t0 = lineT(i);
    Ln.light.intensity = t < t0 - .2 ? 0 : 420 * (1 + 1.2 * Math.exp(-Math.max(0, t - t0) * 4));
    if (i === 5) { const c = new THREE.Color(SIX[Math.floor(Math.max(0, t - t0) / (P / 2)) % 6]); Ln.light.color.copy(c); }
    Ln.words.forEach(w => {
      const m = w.mesh, b = m.userData.base, dt = t - w.onset;
      if (dt < -.24) { m.visible = false; w.ring.material.opacity = 0; return; }
      m.visible = true;
      if (dt < 0) { const e = iCub(seg(dt, -.24, 0)); m.position.set(b.x, b.y + 46 * (1 - e), b.z); m.scale.set(.9, 1.15, .9); m.rotation.z = m.userData.tilt * (1 - e); }
      else {
        const sq = Math.exp(-dt * 10) * Math.cos(dt * 34);
        m.position.copy(b); m.scale.set(1 + .14 * sq, 1 - .2 * sq, 1 + .14 * sq); m.rotation.z = 0;
        SHAKE += .9 * Math.exp(-dt * 12) * (b.y === 0 ? 1 : .5);
      }
      // 마지막 크레인 때 줄 8 단어는 땅으로 가라앉는다
      if (i === 7) { const sink = iCub(seg(t, lineT(7) + BAR * .8, lineT(7) + BAR * 1.2)); m.position.y -= sink * 30; }
      const rr = seg(dt, 0, .55); w.ring.material.opacity = dt >= 0 && rr < 1 ? (1 - rr) * .9 : 0; w.ring.scale.setScalar(1 + oExpo(rr) * 11);
    });
    if (Ln.sign) { const d = t - Ln.sign.userData.t0, flick = d < 0 ? 0 : d > .25 ? 1 : (hash(Math.floor(d * 30), i) > .45 ? 1 : .1); Ln.sign.visible = flick > 0; Ln.sign.material[0].emissiveIntensity = 2.2 * flick; }
  });
  TRAILS.forEach(tr => { const p = oCub(seg(t, tr.userData.t0, tr.userData.t0 + 1.1)); tr.geometry.setDrawRange(0, Math.floor(tr.userData.n * p / 3) * 3); tr.visible = p > 0 && t < lineT(7) + BAR * .9; });
  LOGO.forEach(m => { const p = seg(t, m.userData.t0, m.userData.t0 + .35); m.visible = p > 0; m.scale.z = Math.max(.001, oExpo(p) * m.userData.hgt); m.position.y = 0; });
  const open = oExpo(seg(t, lineT(7) + BAR * 1.6, lineT(7) + BAR * 1.6 + .2));
  const look = t < lineT(7) + BAR * 1.75 ? 0 : t < lineT(7) + BAR * 1.75 + P ? -1 : 1;
  EYES.forEach(E => {
    const h = LOGO[0].userData.hgt * 0 + 3 + E.sz * .3, lift = h + .05, vis = t > lineT(7) + BAR * 1.2;
    [E.white, E.iris, E.pupil].forEach(o => { o.visible = vis && open > .02; });
    E.white.position.y = lift; E.iris.position.y = lift + .05; E.pupil.position.y = lift + .1;
    E.iris.position.x = E.cx + look * E.sz * .06 * open; E.pupil.position.x = E.iris.position.x;
    E.lid.visible = vis && open < .98; E.lid.position.y = lift + .15; E.lid.scale.set(1, Math.max(.001, 1 - open), 1);
  });
  placeCamera(t);
}

// ---------- 공개 API ----------
window.init = async () => {
  FONT = opentype.parse(await (await fetch('font.otf')).arrayBuffer());
  let texts = STAND_IN;
  try { const r = await fetch('lyrics.txt'); if (r.ok) { const l = (await r.text()).split('\n').map(s => s.trim()).filter(Boolean); if (l.length >= 8) texts = l.slice(0, 8); } } catch (e) { }
  buildLines(texts); buildTrails(); buildLogo();
  for (let k = 0; k < 6; k++) { // 도입 불빛: 길 양옆 높은 곳
    const L = new THREE.PointLight(SIX[k], 0, 70, 1.8), s = k % 2 ? 1 : -1;
    L.position.copy(ST[0].p).addScaledVector(ST[0].d, -40 + k * 7).addScaledVector(ST[0].side, s * 14).add(V(0, 12 + k * 2, 0)); scene.add(L); INTRO_LIGHTS.push(L);
  }
  return { fps: FPS, frames: Math.round(DUR * FPS), w: W, h: H };
};
window.renderFrame = async (f, n = 1, q = .93) => {
  update(f / FPS); composer.render();
  return renderer.domElement.toDataURL('image/jpeg', q);
};
