# Looks Can Kill — TYPE CITY (three.js 키네틱 타이포)

형식 아이디어: **글자가 도시가 되고, 영웅은 빛이다.** 컷 없이 카메라 하나가 밤의 도시를 날고, 가사 한 줄마다 새 길로 꺾어 들어가며
그 줄의 단어들이 박자(8분음표)마다 하늘에서 착지한다(히어로 랜딩: 낙하 → 찌그러짐 → 바닥 고리 → 카메라 흔들림).
단어는 앞면이 흰색, 옆면이 그 줄의 색인 압출 글자다. 괄호 속 코러스는 단어 위의 네온 간판으로 깜빡이며 켜진다.
후크 4줄에서는 여섯 색 빛의 궤적(영웅)이 단어 뒤와 옆을 휘감는다. 마지막 줄 둘째 마디에 카메라가 수직으로 올라가고,
광장 바닥에서 직접 그린 칼날 블록체 LOOKS CAN KILL이 솟아오른 뒤 O 두 개가 눈으로 뜬다.

- 구간: MV 60.29–91.78초(31.49초). 도입 1마디 + 가사 8줄 × 2마디. 129.6 BPM(한 박 0.4631초), 1행 시작 62.144초.
- 가사: `lyrics.txt`(한 줄에 한 행, 8줄, 괄호 안은 코러스)를 같은 폴더에 두면 읽는다. 없으면 `main.js`의 자리 표시 문장(직접 쓴 것)을 쓴다.
- 금지: 방사형 줄무늬(욱일기로 읽힘), 영상 창·스티커식 사용, 슬라이드식 2D 띠 구성.

## 렌더
```
npm i three@0.170.0 opentype.js pretendard playwright-core
cp node_modules/pretendard/dist/public/static/Pretendard-Black.otf font.otf
ffmpeg -ss 60.29 -t 31.49 -i <MV 파일> -vn -ar 48000 -ac 2 audio.wav     # 음원은 저장소에 넣지 않는다
node render.js still 2.6,9,17.5,30.2 stills
node render.js full typecity.mp4 audio.wav   # 945프레임, 프레임당 약 2.5초(소프트웨어 WebGL)
```
