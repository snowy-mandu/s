# 이미 만들어 둔 코드와 도구

`C:\Users\Administrator\Videos\모션\` 아래 프로젝트에 흩어져 있다. 새 프로젝트에서 처음부터 다시 쓰지 말고 여기서 가져온다. 아직 하나의 공용 폴더로 모으지는 않았다. 경로는 2026-10-10 기준이니 쓰기 전에 파일이 있는지 확인한다.

## 렌더 파이프라인

| 무엇 | 어디 | 메모 |
|---|---|---|
| 헤드리스 Chrome → ffmpeg 렌더러 | `remiel/code2/render.js` | `window.init()`과 `window.seek(프레임)`만 있으면 된다. 프레임당 서브프레임 3장을 `tmix`로 섞어 모션 블러. `still 10,20 <폴더>` / `full <out.mp4>`. 1020프레임 약 3분. playwright-core는 `lotto_title/node_modules`에 있다 |
| 엔진 + 장면 파일 합치기 | `hsin/code2/assemble.js` | `node assemble.js scenes4.js` 식으로 장면 파일만 바꿔 끼운다 |
| 영상 → JPEG 시퀀스 + manifest | `remiel` 세션 기록 참고 | 클립은 `-g 1`로 자르고, 프레임으로 풀어 `frames/<이름>/0001.jpg`. 자막이 박힌 원본은 아래 14%를 잘랐다 |

## 2D 캔버스 (`remiel/code/main.js` 앞부분)

- `plate(name, {t, s, ax, ay, x, y, cover})`: 영상 프레임을 원하는 기준점이 원하는 화면 좌표에 오게 그린다. 화면을 못 덮으면 자동 보정.
- `text(str, {font, size|fitW, x, y, fill, stroke, track, letter, rot, ...})`: 글자 단위 변환을 받는 조판. `slam`, `rise`가 글자별 등장.
- 후처리 셰이더 `post(f)`: 가장자리로 갈수록 세지는 색 분리, 블룸, 비네트, 그레인. 박자에 맞춰 맥동.
- 이징, `hash(seed, i, ch)` 결정적 난수.

## 3D (`remiel/code2/main.js`)

- WebGL2 카드: 둥근 모서리, 앞뒤 다른 영상, 테두리, 림 라이트. `place(x,y,z,rx,ry,rz,s)`와 카메라 `CAM`. 딜, 부채꼴, 카드 벽, 터널이 구현돼 있다.
- `hsin/code/assemble.js`가 이 셰이더를 원반·병풍·풍등용으로 바꾼 판이다(달 위상 넘김 포함).

## 그래픽 요소 (`hsin/code2/`)

- `scenes.js`: 마른 붓 획 `brush()`, 붓이 지나간 자리만 보이게 하는 `inStroke()`, 붓으로 칠해지는 글자 `inkText()`.
- `scenes4.js`: 박자마다 한 칸 도는 눈금 고리 `chart()`, 원형 글자 배열 `ringText()`, 달 위상 `moon()`, 세로쓰기 `vline()`, 줌 보간 `zr()`.
- `sf_scenes.js`, `sf2_scenes.js`: 스타일 프레임과 서체 비교 시트를 뽑는 틀. 프레임 번호가 곧 시안 번호.

## 분석 도구

| 무엇 | 어디 | 메모 |
|---|---|---|
| 박자 격자 또렷함 측정 | `hsin/work/tempo.js` | `node tempo.js <22kHz 모노 wav> <시작초> <끝초>`. 출력의 `x숫자`가 또렷함. 레미엘 곡 11, 5 안팎이면 격자 불가. 구간을 나눠 돌려 템포가 일정한지 본다 |
| 음량 프로파일 | `remiel/work/energy.js` | 2초 단위 막대. 구간 고르기용 |
| 프레임 시트 | `remiel/work/qa.sh`, `hsin/work/sheet.sh` | 6프레임 간격 전 구간 시트, 스틸 폴더 라벨 시트 |

## After Effects 경로 (`remiel/scripts/`)

`lib.jsx` + `build.jsx` → `gen.js` → `AfterFX.exe -r` → `aerender`. 이 PC의 AE 2026에서 동작했다. 사용자는 코드판을 더 낫다고 했으므로 기본은 코드 렌더다.

## 설치된 것

- 서체(사용자 계정 설치, `hsin/code2/fonts/`에도 있음): Shippori Mincho B1, Song Myung, Yuji Syuku/Boku, East Sea Dokdo, Hahmlet. 코드 렌더에서는 `FontFace`로 파일을 직접 불러 쓴다.
- 서체 2차(2026-10-15, 사용자 지시로 51+2 패밀리 129파일을 사용자 계정에 설치). 파일은 `Videos/모션/fonts/`: Google Fonts 저장소 일부(`gf/ofl/<이름>/`, 각 폴더에 OFL.txt), `pretendard/`, `galmuri/`. 전부 OFL이라 상업 이용 가능. 학습한 틀의 글자 모양별로 고른 것이다. 서체를 먼저 고르지 말고 모양을 정한 뒤 여기서 찾는다(workflow.md "글자도 재료다").

| 모양 | 서체 | 쓰인 틀 |
|---|---|---|
| 압축 고딕(화면만 한 글자) | Anton, Oswald, Bebas Neue, Big Shoulders Display, Antonio, Six Caps | M13, M15, M22 |
| 넓은·굵은 그로테스크 | Archivo(너비 축), Archivo Black, Unbounded, Syne | M14, M26 |
| 스위스풍 그로테스크·라벨 | Inter, Inter Tight, Space Grotesk | M27, M18, M21 |
| 디스플레이 세리프 | Instrument Serif, DM Serif Display, Playfair Display, Fraunces | M15, M16, M23 |
| 손글씨·필기체 | Caveat, Permanent Marker, Patrick Hand, Pacifico, Shantell Sans | M25, M12 |
| 둥근 산세리프 | Fredoka, Nunito, M PLUS Rounded 1c, Zen Maru Gothic | M28, M22 |
| 코믹·블록 글자 | Bungee, Bowlby One, Rubik Mono One, Alfa Slab One | M14, M19 |
| 픽셀·레트로 컴퓨터·Y2K | Press Start 2P, Silkscreen, VT323, DotGothic16, Galmuri(한글 픽셀), Michroma, Audiowide, Orbitron | M19, M22, M18 |
| 고정폭(HUD·캡션) | JetBrains Mono, IBM Plex Mono, Space Mono | M18, M27 |
| 일본어 | Dela Gothic One(굵은 디스플레이), Zen Kaku Gothic New, Mochiy Pop One, M PLUS Rounded 1c, DotGothic16 | M16, M19 |
| 한국어 | Pretendard(본문·UI), Black Han Sans, Do Hyeon, Jua, Gaegu(손글씨), Gowun Dodum, Nanum Myeongjo, Gothic A1, IBM Plex Sans KR, Hi Melody, Galmuri | 설명 영상, 숏폼 |

- 로고·타이틀처럼 몇 글자짜리 큰 글자는 위 서체로 때우지 말고 벡터로 직접 만든다(workflow.md). 위 목록은 문장·가사·라벨용이다.
- yt-dlp(winget), ffmpeg, node.
- Python 3.10.11: `C:\Users\Administrator\AppData\Local\Programs\Python\Python310\python.exe` (또는 `py -3.10`). 그냥 `python`은 PATH에서 Microsoft Store 가짜 실행 파일이 먼저 잡혀 "Python"만 찍고 끝나니 전체 경로를 쓴다. numpy, scipy, Pillow, OpenCV, librosa, onnxruntime, torch가 깔려 있다.
- 없는 것: 배경 제거 모델(rembg 미설치, onnxruntime은 있으니 모델만 받으면 된다), whisper.

## 아직 안 만든 것

- 2색 처리·종이 결·망점을 한 번에 거는 재료 가공 함수
- 요소의 위치·크기를 프레임별로 뽑아 가감속을 그래프로 보는 검수 도구
- 박자 지점과 화면 변화량을 겹쳐 보는 싱크 검수 도구
- 위 코드를 한 폴더로 모은 공용 라이브러리

## 영상 보기 스킬 `watch` (2026-10-11 설치)

- 위치 `~/.claude/skills/watch/`. 출처 github.com/bradautomates/claude-video v0.3.2(MIT). 스킬 폴더만 복사했고 플러그인의 SessionStart 훅은 넣지 않았다.
- 실행: `<Python 전체 경로> ~/.claude/skills/watch/scripts/watch.py <URL 또는 파일> --engine local --no-whisper --out-dir <폴더>`. 장면이 바뀌는 지점을 골라 프레임을 뽑아 준다(12초 영상에서 36장). `--start`, `--end`, `--detail`로 구간과 밀도를 조절.
- 모션그래픽 레퍼런스의 첫 훑기에 쓴다. 0.3초 단위 구도 분석이 필요하면 여전히 ffmpeg로 초당 8~12장을 직접 뽑는다.
- Gemini 엔진(`GEMINI_API_KEY` 필요)은 영상을 구글에 올려 움직임을 글로 설명받는 길이다. 키는 설정하지 않았다. 쓰기 전에 사용자에게 묻는다.
- 음성 대본(WhisperX)은 설치하지 않았다. 말이 있는 튜토리얼 영상을 학습할 때 필요해지면 `setup.py --install-whisperx`(약 3GB, uv 설치 포함)를 사용자 확인 후 실행한다.

## 세로 9:16 설명 영상 틀 (`C:\Users\Administrator\Videos\여행정보\ep01\`, 2026-10-11)

Korea Walkthrough 1편에서 만든 것. 나레이션이 있는 숏폼 설명 영상에 다시 쓴다.

- `render.js`: 1080×1920용 렌더러. `still <page.html> 0,30,60 <폴더>` / `full <page.html> <out.mp4> [audio.wav]`. 총 프레임과 fps는 페이지의 `init()`이 돌려준다.
- `lib.js`: 조판 `T`/`fitSize`, 지도 핀 `pin`, 태극 `taegeuk`, 점선 경로 `routeDots`, 망점 `halftone`, 그레인·종이 결.
- `main.js`: 닫힌 형태 스프링 `sp`, 여러 목표를 잇는 `track`, 마스크로 오르내리는 글자 `riseT`, 폭에 맞춘 다단 제목 `headline`, 원형으로 번지는 배경 전환 `WORLDS`/`world`, 나레이션 자막 판 `caption`.
- `caps.js`: 자막 시간표 하나를 화면 자막과 SRT가 같이 읽는다.
- `synth.py <초>`: 120BPM 음악·효과음 합성 + 나레이션 배치 + 목소리 밑 음악 덕킹. 뒤에 ffmpeg `acompressor,alimiter,loudnorm`을 걸어 -14 LUFS를 맞췄다.
- `sheet.sh <폴더> 9x7 [폭]`: 스틸 폴더를 컨택트 시트로.
- TTS는 `dreamina-canvas node create audio --voice-name <이름> --prompt <문장>`으로 문장 단위로 받고(구간당 1~2크레딧), `silencedetect`로 구절 경계를 재서 화면 타이밍을 정했다.

### watch 실측 (2026-10-12, 네 편)

- 기본 설정(512px, balanced)으로 편당 8~30장이 나왔다. 4장씩 가로로 붙여(2048px) 시트로 읽으면 장당 해상도를 거의 잃지 않고 읽기 횟수가 줄어든다.
- **컷 없이 서서히 변하는 영상에는 약하다.** ego death(15초)에서 8장만 골랐고 그중 6장이 첫 1초였다. 5~15초 구간은 2장뿐. 이런 영상은 ffmpeg로 일정 간격을 따로 뽑아야 한다.
- 컷이 많은 영상(borderline, 11초 → 30장)에는 잘 맞는다.
- 권장 순서: ① ffmpeg 초당 7~10장 작은 시트로 타이밍 → ② watch 512px로 세부 → ③ 둘을 합쳐 틀 작성.
- AE 작업 화면이 같이 찍힌 영상은 레이어 이름에서 제작 방법(텍스처, 블렌드 모드, 카메라 사용)을 읽을 수 있다.

### 짧은 레퍼런스 뜯어보기 실측 (2026-10-12, X 영상 네 편, `Videos/모션/refs_1012/`)

- X 영상은 `yt-dlp -o "<이름>.%(ext)s" --write-info-json <게시물 URL>`로 로그인 없이 받아졌다. 게시글 본문(제작 도구, 크레딧)은 info.json의 `description`에 있다. 읽을 때 콘솔이 cp949라 `python -X utf8`이 필요하다.
- 10초 이하 영상은 watch 없이 ffmpeg 두 번으로 충분했다: ① 전 구간 `fps=10,scale=512:-1,tile=4x5`(세로 영상은 `scale=400:-1,tile=5x4`) → ② 고른 시점 6장을 `-ss`로 960px로 뽑아 `xstack`으로 한 장에. 편당 4~6번 읽는다.
- 2초 이하 루프는 `fps=12`로 거의 전 프레임을 본다.

## I SPY 리릭 모션에서 만든 것 (`Videos/모션/ispy/`, 2026-10-12)

- `tools/cutdir.py <in> <out>`: **배경 제거 모델 없이 인물 오려내기.** 흰 스튜디오 컷 한정. 가장자리와 이어진 근백색(최소 채널 > 198, 채도 < 40) 영역을 배경으로 보고 알파 PNG를 낸다. 팔 사이처럼 닫힌 흰 틈은 남지만, 2색 처리에서 밝은 색을 바탕색과 같게 주면 안 보인다. 검은 배경 컷은 오릴 필요 없이 `screen` 합성.
- `code/lib.js`의 `duo(img, dark, light, {sx,sy,sw,sh,scale,contrast})`: 알파를 지키는 2색 인쇄(grayscale → screen → multiply → destination-in). `grain`, `halftone`, `eyePath`, `starPath`가 같이 있다. library.md의 "아직 안 만든 것" 첫 줄이 이것으로 채워졌다.
- `code/render.js`: 장면 파일 이름·오디오 파일·오디오 시작 초를 인자로 받는 판. 길이는 페이지 `init()`이 돌려준다.
- `tools/vox.py <시작> <끝>`: 보컬 대역(1.5–4kHz, HPSS 화성 성분)의 에너지를 16분음표 칸 문자 지도로 찍는다. 자막에 단어별 시간이 없을 때 반복 구절이 몇 박에 떨어지는지 읽는 데 썼다. `tools/beats.py`는 librosa 박자 추적 + 박마다 저역 에너지(킥으로 마디 첫 박 찾기).
- `tools/sheet.sh <스틸 폴더> 6x7 400 <out.jpg>`: 이 PC의 ffmpeg는 glob 입력과 `drawtext`(fontconfig 없음)가 안 되므로 번호를 다시 매겨 타일로 붙인다.
- python `-I`는 사용자 site-packages(librosa 등)를 못 찾는다. 분석 스크립트는 `-X utf8`만 준다.

- `code/wl.js`(Y2K 홈페이지·바탕화면 세트): 창 `xwin`, 구름 타일 `clouds`, 별 틀 `starFrame`, 흐르는 띠 `marquee`, 작업 표시줄 `taskbar`, 검은 테 스티커 글자 `ST`, 워드아트 `wordArt`, 5×7 LED 글자 `led`, 커서를 따라보는 눈 `wlEyes`, 흰 테 스티커 `sticker`. `code/wp2.js`: 깊이 빌보드 `at(x,y,z,fn)` + `arrive/leave/pass`(와서 멈춤·카메라 지나감·안 멈춤), 속도선 터널 `tunnel`, 3프레임 창 버스트 `burst`, 픽셀 번짐 전환 `smear`. `code/wfull.js`: 창들이 날아와 글자를 이루는 `winWord`, 가사를 메시지로 쌓는 `chatWin`.
- 픽셀 서체(Galmuri 등)는 작게 찍어 임계값으로 키우면 한글 획이 뭉개진다. 12의 배수 크기로 직접 `fillText` 한다.
- 로고가 파일로 없으면 MV 엔드 카드 프레임에서 뽑는다: `ispy/tools/logo.py`(4배 확대 → 바깥 영역을 가장자리 연결로 빼서 알파).

## 접힌 편지에서 만든 것 (`Videos/모션/ember/`, 2026-10-12)

- `work/tri.py`: 영상 프레임을 먹남색·미색·주홍 3색 인쇄 톤으로 바꾼다(휘도 → 두 색 보간 + 약한 계단화, 붉은 화소만 주홍으로 남김). `raw/` → `tri/`. 게임 컷신이 한 번에 수묵 판화처럼 된다.
- `code/main.js`: 종이접기 세트. 병풍 접기 `accordion(src,x,y,w,h,o,{n,rot,ax,min})`(띠별 아핀 변환 + 지그재그 + 음영, 캔버스 2D만으로 입체로 보임), 반 접어 넘기는 그림 교체와 네 번 반접기 `bigSheet`, 접혀 펼쳐지는 글씨 쪽지 `slips`, 종이접기 나비 `butterfly`, 시간 키 Catmull-Rom `cr`, 프레임 이미지 LRU + "한 번 그려 빠진 이미지 모으고 다시 그리기" 방식의 `seek`.
- 레터박스 컷신은 그림 영역만 잘라 쓰면(`crop=1920:810:0:135`) 위아래 자막이 한 번에 빠진다. 대사 시작 시점은 아래 자막 띠를 0.5초 간격으로 잘라 붙인 시트로 읽었다.
- 렌더: `node code/render.js full x out/<이름>.mp4 work/seg.wav 0` (630프레임 약 100초).

## 햇반 스펙 광고에서 만든 것 (`Videos/모션/햇반_스펙광고/tools/`, 2026-10-15)

Seedance 실사 클립 여러 개를 고정 카메라 원본 화면 한 장 위에 합성해 "같은 사람이 여럿" 장면을 만드는 도구들.

- `qa_clip.py <clip> <plate> <out>`: 클립 안 카메라 흔들림(천장 영역 위상상관), 원본 화면 → 클립 호모그래피(ORB+RANSAC, `_H.npy`로 저장), 2fps 시트. Seedance 2.5 m2v에 원본 화면을 참조로 주면 흔들림 0.3px 이하, 원본 대비 0.96~0.98배 축소로 나왔다.
- `matte.py <clip> <out>`: RobustVideoMatting TorchScript(`models/rvm/`, CPU 720p 클립당 약 1분) → RGBA PNG. **손에 든 물건(청소기 막대, 옷)은 빠진다.**
- `matte_aug.py <name> <clip>`: 그래서 원본 화면과의 차이 ∩ 클립 시간 중앙값과의 차이(움직이는 것만)를 사람 둘레·허리 아래 영역에서 더한다. 클립 내내 그대로인 차이(옮겨진 가구)는 뺀다. 크림 옷처럼 벽과 색이 비슷한 몸 안쪽은 건드리지 않는다.
- `clone_comp.py <out> [t0 t1]`: 층마다 등장 시각·클립 시작점·소품 자리·옆 이동(dx)을 받는다. 등장 순간 소품 자리도 그 클립 화면으로 바꿔 소품 중복을 막는다. 옆으로 옮긴 층은 소품 영역에서 원래 자리 사람을 빼야 유령이 안 생긴다.
- `hook_audio.py`: 클립 소리를 같은 타이밍으로 겹치고, 클립에 모터 소리가 거의 없는 청소기는 합성음으로 보강.
- 함정: 한글 경로는 `torch.jit.load`와 cv2가 못 연다. 파일 객체로 넘기거나 상대 경로를 쓴다. 이 PC의 ffmpeg는 `-vsync`가 없다(`-fps_mode`).

## 피닉스 프로모에서 만든 것 (`Videos/모션/phoenix_promo/`, 2026-10-18)

- `tools/cut_seq.py <in_dir> <out_dir>`: 프레임 폴더를 RVM으로 연속 오리기. **게임 PV 장면(1인칭 팔다리, 아주 작은 부감 인물, 얼굴 극접사)에서는 실패했다.** 정면 상반신 정지 컷은 `tools/cut.py` + `tools/solid.py`(반투명 구멍 메우기)로 됐다. 움직이는 장면은 오리지 말고 두 색으로 눌러 사선 창(`code/game2.js`의 `panel`)에 넣었다.
- `code/game2.js`: 두께 있는 블록 글자 + 하이라이트 스윕 `block`, 방사선 `rays`, 1프레임 끼움 `insert`, HP 바 파편이 글자 자리로 날아가 착지하는 `shardsToWord`, 15fps 컷아웃 `cut`, 두 색 누르기 `duo2`.
- `code/proto2.js`: WebGL 원근 지면(지도 텍스처를 바닥에 깔고 카메라가 날아다님) + `project()`로 지면 위 물체를 화면 좌표로.
- `tools/tone3.py`: 영상 프레임을 검정·빨강·노랑·크림 4단 + 망점으로.

## 코퍼스 2차 갱신에서 확인한 도구 경로 (2026-10-21, 프롬프트 글 기준, 직접 써 본 것은 아님)

- 음악을 코드로: Python으로 MIDI 악보(화성 진행·선율)를 쓰고 FluidSynth + 무료 사운드폰트로 연주 → ffmpeg로 음량 정리(wangyinrec-532344). Web Audio 합성 피아노(배음·해머 잡음·리버브)로 음표가 화면을 직접 구동(kopert0x-098349, 0xcodez-474136).
- 가사 영상: Demucs로 보컬·드럼 분리 → whisper로 보컬 받아쓰기 → 공식 가사와 맞춰 "가사 한 줄 = 장면 하나" 대본(okazaky-084783).
- 나레이션 단어 타이밍: ElevenLabs `/with-timestamps`로 단어별 시간을 받아 자막을 회색 → 흰색으로(notdwd-998633). 연기 지시 태그([whispering] 등)와 stability 0.3~0.5로 공포 연기(mochi-agi-421448).
- 2.5D 합성: 깊이 추정(Depth Anything V2), 업스케일(Real-ESRGAN), 녹색 배경 생성 후 직접 키잉(zhu185178-255661).
- Blender를 파이썬 모듈로: 장면·조명·카메라·Cycles 렌더·후처리를 스크립트로, 박자마다 춤 시간을 보정해 킥과 ±0.5프레임 일치(oab10don-457273). 기존 메모리 `blender-headless-pipeline`과 같은 방향.
- 원본 데이터: `Videos/모션/opus55-videos-data/videos_2026-10-21.json`(703건). 이전 사본 `videos.json`(513건)도 남겨 두었다. 코퍼스 재생성 스크립트는 이번 세션 스크래치에서 썼다(같은 형식: 카테고리별·긴 순서·고유 프롬프트·신규 표시).

## Looks Can Kill 모션그래픽에서 만든 것 (`projects/looks-can-kill/`, 2026-10-26, 리눅스 클라우드 세션)

- `main.js`: 직접 그린 칼날 블록체 `glyph()`(L·I·K·S·C·A·N·O, 획 굵기 `s`를 애니메이션하면 가는 획 → 굵은 획 훑기), O가 눈이 되는 글자(뜨기·시선 방향·동공), 단독 눈 `drawEye`, 화면 가르기 `splitDraw`(선 하나로 둘로 나눠 어긋남·벌어짐, 여러 번 연달아 적용해 글자 파편), 시선 광선 `beam`, 블록 마스크 글자 `blockText`, WebGL 후처리(색 분리·그레인·비네트) + 서브프레임 평균 모션 블러가 한 파일에 있다.
- `render.js`: 리눅스용 Playwright 렌더러(`still` / `full`). 1080p60 서브프레임 3장 기준 약 1.5fps(20초에 13분).
- `synth.py`: 영상과 같은 시각표로 킥·스네어·서브·시선 광선 소리·슬레이트 소리를 numpy로 합성.
- 이 클라우드 환경은 YouTube(yt-dlp)와 Google Fonts·jsDelivr가 막혀 있다. 서체는 npm `@fontsource/*`로 받았다.
