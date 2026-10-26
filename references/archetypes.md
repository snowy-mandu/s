# 장르별 틀

요청에 맞는 틀을 하나 고르고, 중괄호를 채워 쓴다. 각 틀의 "원본" slug를 `corpus/*.md`에서 Grep 하면 전문이 나온다. 틀을 섞어도 된다(예: 런치 필름 + 원셰이프 전환).

## 찾아보기

틀마다 제목 바로 아래에 `태그:` 줄이 있다. 조건으로 찾을 때는 이 파일과 [techniques.md](techniques.md)를 태그로 Grep 한다. 예: `#원작:Blender`, `#구현:blender필요`, `#연속변형`, `#재료:글자`, `#미검증`.

| 태그 | 값 | 뜻 |
|---|---|---|
| 성격 | `#빠른편집` `#연속변형` `#서사설명` `#루프` `#인터랙티브` `#여러성격` | [workflow.md](workflow.md)의 세 성격 + 루프·인터랙티브. 확인 목록이 이걸로 갈린다 |
| `#원작:` | `코드` `AE` `Blender` `Cavalry` `C4D` `AlightMotion` `Newton` `Cardboard` `미상` | 원작을 만든 도구. 사용자가 알려 줬거나 게시글·작업 화면에 적혀 있던 것만 쓴다. 모르면 `미상` |
| `#구현:` | `canvas2d` `webgl` `three` `dom` `blender필요` `배경제거필요` `이미지생성` `자유` | 우리가 만들 때의 길. `dom`은 HTML/CSS·Remotion·HyperFrames. `blender필요`·`배경제거필요`는 코드만으로 안 되는 부분이 있다는 표시 |
| `#재료:` | `글자` `도형` `영상` `인물` `UI` `3D` `사진` `캐릭터` `질감덩어리` `주제따라` | 화면의 주인공이 무엇으로 되어 있나 |
| 출처 | `#코퍼스` `#영상역추출` | 프롬프트 글에서 정리했나, 완성 영상을 뜯어보고 거꾸로 뽑았나 |
| 상태 | `#미검증` `#통과` `#탈락` | 우리가 그 틀로 만들어 판정받았나 |
| `#스타일:` | `미니멀클린` `스위스타이포` `그레인일러스트` `아이소메트릭디오라마` `카툰일러스트` `플랫벡터` `에디토리얼일러스트` `동화일러스트` `손그림` `캐릭터애니` `코믹팝` `인쇄물망점` `콜라주` `포스터타이포` `키네틱타이포` `Y2K` `레트로컴퓨터` `네온` `파스텔` `사이버HUD` `글리치` `필름질감` `종이질감` `유리크롬` `소프트3D` `시네마틱` `추상셰이더` `VJ` `애플식제품` `SaaS-UI` `기술도해` `절차적3D` `실사재현` `실사사진` `여러스타일` `자유` | 화면의 장르·화풍. 여러 개 달 수 있다. 맞는 값이 없으면 새로 만들고 이 줄에 추가한다 |
| `#무드:` | `하이에너지` `경쾌` `차분` `절제` `몽환` `긴장` `향수` | 보고 난 느낌. 화면에서 받은 인상이라 내 해석이다 |

기법 카드의 `태그:` 줄 끝의 `→ M13` 같은 표시는 그 카드에서 나온 틀이다.

| 틀 | 이름 | 성격 | 원작 | 구현 | 스타일 | 무드 | 출처 | 상태 |
|---|---|---|---|---|---|---|---|---|
| M1 | 쇼릴 한 줄 | 빠른편집 | 코드 | 자유 | 자유 | 하이에너지 | 코퍼스 | 미검증 |
| M2 | 프리미엄 제품 필름 | 서사설명 | 코드 | dom | 애플식제품 미니멀클린 | 절제 | 코퍼스 | 미검증 |
| M3 | 런치 영상 (30초 스토리형) | 서사설명 | 코드 | dom | SaaS-UI 키네틱타이포 | 경쾌 | 코퍼스 | 미검증 |
| M4 | 원셰이프 UI 루프 | 연속변형 루프 | 코드 | dom | 미니멀클린 SaaS-UI | 경쾌 | 코퍼스 | 미검증 |
| M5 | 원테이크 키노트 필름 | 연속변형 | 코드 | dom webgl | 유리크롬 미니멀클린 | 절제 | 코퍼스 | 미검증 |
| M6 | 키네틱 타이포 | 빠른편집 | 코드 | canvas2d | 키네틱타이포 포스터타이포 | 하이에너지 | 코퍼스 | 미검증 |
| M7 | 연속 카메라 데스크톱 티저 | 연속변형 | 코드 | dom | SaaS-UI 미니멀클린 | 차분 | 코퍼스 | 미검증 |
| M8 | 뮤직비디오·가사 영상 | 빠른편집 | 코드 | canvas2d | 키네틱타이포 | 하이에너지 | 코퍼스 | 미검증 |
| M9 | 스타일·콘셉트 한 줄 | 여러성격 | 코드 | 자유 | 자유 |  | 코퍼스 | 미검증 |
| M10 | 도형 연쇄 변형 (Hexzel "quick edit") | 연속변형 | AlightMotion | canvas2d | 플랫벡터 파스텔 | 몽환 | 영상 | 미검증 |
| M11 | 한 덩어리의 변질 (ego death) | 연속변형 | 미상 | webgl | 추상셰이더 글리치 | 몽환 | 영상 | 미검증 |
| M12 | 손그림 로고 팝 (KIRBY logo animation) | 연속변형 | 미상 | canvas2d | 손그림 캐릭터애니 | 경쾌 | 영상 | 미검증 |
| M13 | 인물 뒤의 거대 글자 편집 (borderline edit, zresin 계열) | 빠른편집 | AE | canvas2d 배경제거필요 | 포스터타이포 인쇄물망점 콜라주 | 하이에너지 | 영상 | 미검증 |
| M14 | 두 화면 코믹 팝 타이틀 (aco, 공연 배경 영상) | 빠른편집 | 미상 | canvas2d | 코믹팝 인쇄물망점 | 하이에너지 | 영상 | 미검증 |
| M15 | 평면 그래픽 × 3D 유체 (jyuni-byo "FLOWING") | 빠른편집 | C4D AE | three blender필요 | 포스터타이포 소프트3D | 하이에너지 | 영상 | 미검증 |
| M16 | 유리 3D + 포스터 글자 콜라주 (Furyxzia) | 빠른편집 | AE | three webgl | 유리크롬 포스터타이포 필름질감 | 향수 | 영상 | 미검증 |
| M17 | 대칭 셰이더 VJ 루프 (ke-go) | 루프 | 미상 | webgl | 추상셰이더 VJ | 긴장 | 영상 | 미검증 |
| M18 | 빛나는 핵 + 글자 성운 (Pinckus, MEP 파트) | 빠른편집 | Blender Cavalry AE | canvas2d webgl three blender필요 | 사이버HUD 필름질감 글리치 | 하이에너지 | 영상 | 미검증 |
| M19 | 소품이 다음 장면을 여는 시대 재현 편집 (KIIIKIII world, Y2K) | 빠른편집 | AE Blender | canvas2d three blender필요 배경제거필요 | Y2K 콜라주 | 향수 경쾌 | 영상 | 미검증 |
| M20 | 흔적에서 다음 물체가 나오는 3D 변신 (BTS 종이 → 알약) | 연속변형 | AE | three canvas2d | 미니멀클린 소프트3D | 차분 | 영상 | 미검증 |
| M21 | 개인 로고로 열고 닫는 쇼릴 구성 (guimotion) | 여러성격 | 미상 | 자유 | 여러스타일 | 경쾌 | 영상 | 미검증 |
| M22 | 화면 속으로 들어가 처음으로 돌아오는 플랫 루프 (HUANG 표지) | 연속변형 루프 | AE | canvas2d | 플랫벡터 레트로컴퓨터 네온 | 경쾌 | 영상 | 미검증 |
| M23 | 별 하나에서 줌아웃해 큰 그림을 드러내는 에디토리얼 루프 (Extension of Life) | 연속변형 루프 | AE | canvas2d | 에디토리얼일러스트 종이질감 | 차분 향수 | 영상 | 미검증 |
| M24 | 2D 그러데이션을 지도로 삼는 액체 유리 (Liquid glass gradients) | 연속변형 | AE | webgl | 유리크롬 추상셰이더 | 몽환 | 영상 | 미검증 |
| M25 | 문장마다 화풍을 갈아입는 종이 콜라주 설명 영상 (Why does AI…) | 서사설명 | 미상 | canvas2d | 콜라주 종이질감 손그림 캐릭터애니 | 경쾌 | 영상 | 미검증 |
| M26 | 그레인 일러스트 + 실사 카드 + 대형 타이포의 긴 브랜드 필름 (Paddle) | 서사설명 | 미상 | canvas2d three | 그레인일러스트 콜라주 포스터타이포 | 경쾌 | 영상 | 미검증 |
| M27 | 지금 놓인 것만 강조색인 도시 타이포 (TOKYO) | 빠른편집 | Cardboard | canvas2d three | 스위스타이포 미니멀클린 | 절제 | 영상 | 미검증 |
| M28 | 물리량을 색으로 매핑하는 매끈한 3D 과학 설명 (You can't recycle plastic forever) | 서사설명 | 미상 | three canvas2d | 소프트3D 미니멀클린 그레인일러스트 | 차분 | 영상 | 미검증 |
| M29 | 찾는 재미가 있는 아이소메트릭 디오라마 한 장 (서울 릴) | 연속변형 루프 | 미상 | three blender필요 | 소프트3D 아이소메트릭디오라마 플랫벡터 | 경쾌 | 영상 | 미검증 |
| M30 | 그림 속 켜지는 물건을 박자 장치로 쓰는 일러스트 루프 (CraveFX 신호등) | 루프 | 미상 | canvas2d | 카툰일러스트 Y2K 종이질감 | 하이에너지 경쾌 | 영상 | 미검증 |
| M31 | 고정된 표지 틀 + 사진 한 장 + 박자마다 바뀌는 셰이더 필터 (Figma Shader 탐구) | 빠른편집 루프 | 미상 | webgl | 에디토리얼일러스트 인쇄물망점 미니멀클린 | 차분 | 영상 | 미검증 |
| M32 | 로딩 고리가 그러데이션 꽃으로 피는 루프 (꽃잎 로더) | 루프 | 미상 | canvas2d | 파스텔 추상셰이더 | 몽환 | 영상 | 미검증 |
| M33 | 화각 자체를 애니메이션하는 평면 ↔ 입체 방 (Room perspective) | 연속변형 루프 | Blender | three | 플랫벡터 소프트3D | 경쾌 | 영상 | 미검증 |
| M34 | 소품 하나에 절차 규칙 하나, 계절 앨범 (Summer, Cavalry 추정) | 빠른편집 | Cavalry | canvas2d | 콜라주 플랫벡터 | 경쾌 향수 | 영상 | 미검증 |
| M35 | 두 색 면이 쪼개지며 글자를 드러내는 방송 패키지 (팟캐스트 패키지) | 빠른편집 | AE | canvas2d | 포스터타이포 스위스타이포 | 하이에너지 | 영상 | 미검증 |
| M36 | 가사 단어를 실물 오브젝트로 번역하는 키네틱 타이포 (HEADLOCK) | 빠른편집 | 미상 | canvas2d three 배경제거필요 | 포스터타이포 콜라주 미니멀클린 | 하이에너지 | 영상 | 미검증 |
| M37 | 나레이션 구절마다 글자 하나가 무대가 되는 단일 재료 이야기 영상 (凍った手記) | 서사설명 | 코드 | three canvas2d | 미니멀클린 필름질감 종이질감 | 긴장 차분 | 영상 | 미검증 |
| M38 | 한 선이 세 가지 잉크로 승격되는 쇼릴 (연필 → 청사진 → 홀로그램) | 연속변형 루프 | 코드 | canvas2d | 손그림 기술도해 네온 | 경쾌 | 코퍼스 | 미검증 |
| M39 | 워드마크의 마침표 안에서 벌어지는 원테이크 런치 | 연속변형 루프 | 코드 | canvas2d | 유리크롬 SaaS-UI | 경쾌 | 코퍼스 | 미검증 |
| M40 | 아카이브 실물 + 유일하게 채색된 히어로 오브젝트 브랜드 필름 | 서사설명 | 코드 | three canvas2d | 필름질감 시네마틱 | 긴장 향수 | 코퍼스 | 미검증 |
| M41 | 실사 영상을 입자로 다시 짓는 비트 편집 (깊이 + 주체 마스크) | 빠른편집 | 코드 | three canvas2d 배경제거필요 | 추상셰이더 VJ | 하이에너지 | 코퍼스 | 미검증 |
| M42 | 실제 클립을 디자인 물건 안에서 트는 포스터 런치 트레일러 | 빠른편집 루프 | 코드 | canvas2d | 포스터타이포 콜라주 필름질감 | 하이에너지 | 코퍼스 | 미검증 |
| M43 | 브랜드 한 색 키네틱 가사 → 제품의 실제 화면 → 팔레트 공개 (음악 앱 콘셉트) | 빠른편집 | AE | canvas2d three | 키네틱타이포 SaaS-UI 미니멀클린 | 하이에너지 | 영상 | 미검증 |
| M44 | 선화로 먼저 보여 주고 채색으로 다시 터뜨리는 두 색 가사 MV (Wireframe WIP) | 빠른편집 | AE | canvas2d 이미지생성 | 캐릭터애니 플랫벡터 키네틱타이포 | 경쾌 하이에너지 | 영상 | 미검증 |
| M45 | 가사 한 줄마다 글자로 만든 소품 하나 + 매치 컷 (seven 「Actor」) | 빠른편집 | 미상 | canvas2d three | 키네틱타이포 포스터타이포 플랫벡터 종이질감 | 경쾌 하이에너지 | 영상 | 미검증 |
| E1 | 자율 제작 60초 설명 영상 | 서사설명 | 코드 | canvas2d | 동화일러스트 | 경쾌 | 코퍼스 | 미검증 |
| E2 | 사업 설명 5장면 | 서사설명 | 코드 | dom | SaaS-UI | 차분 | 코퍼스 | 미검증 |
| E3 | 개념 설명 (스타일 지정형) | 서사설명 | 코드 | 자유 | 자유 |  | 코퍼스 | 미검증 |
| E4 | 인피니트 줌 | 연속변형 루프 | 코드 | canvas2d 이미지생성 | 실사사진 | 몽환 | 코퍼스 | 미검증 |
| E5 | 스케일 여행 (한 숏 줌인/줌아웃) | 연속변형 | 코드 | canvas2d three | 자유 | 차분 | 코퍼스 | 미검증 |
| E6 | 분해 가능한 인터랙티브 랩 | 인터랙티브 | 코드 | three | 기술도해 | 차분 | 코퍼스 | 미검증 |
| E7 | 팟캐스트·토킹헤드 삽입 그래픽 | 서사설명 | 코드 | dom | SaaS-UI |  | 코퍼스 | 미검증 |
| E8 | 제품 설명 영상 자동 파이프라인 | 서사설명 | 코드 | dom | SaaS-UI |  | 코퍼스 | 미검증 |
| E9 | 증명·원리를 기계 장치로 연출하는 설명 루프 | 서사설명 루프 | 코드 | canvas2d | 기술도해 미니멀클린 | 차분 | 코퍼스 | 미검증 |
| D1 | 단일 HTML 프로시저럴 씬 | 인터랙티브 | 코드 | three | 절차적3D |  | 코퍼스 | 미검증 |
| D2 | 자료 기반 역사·실물 재현 | 서사설명 | 코드 | three | 절차적3D 실사재현 |  | 코퍼스 | 미검증 |
| D3 | 스타일 지정 3D 한 줄 | 여러성격 | 코드 | three | 자유 |  | 코퍼스 | 미검증 |
| D4 | 오디오 반응형 오브젝트 | 연속변형 | 코드 | three | 추상셰이더 |  | 코퍼스 | 미검증 |
| D5 | 물리 시뮬레이션 쇼케이스 | 연속변형 | 코드 | three webgl | 실사재현 | 긴장 | 코퍼스 | 미검증 |
| D6 | 스크롤 스크럽·인터랙티브 히어로 (웹) | 인터랙티브 | 코드 | dom | 미니멀클린 |  | 코퍼스 | 미검증 |
| D7 | 빛을 막았다가 되찾는 3D 상징 단편 (대성당 스테인드글라스) | 서사설명 | 코드 | three | 시네마틱 소프트3D | 긴장 차분 | 코퍼스 | 미검증 |
| D8 | 수십만 장의 타일로 지어지다 마지막에 광고였음이 드러나는 영상 | 연속변형 | 코드 | three | 소프트3D 시네마틱 | 차분 | 코퍼스 | 미검증 |
| D9 | 레이마칭 프랙털 데모신 원테이크 | 연속변형 | 코드 | webgl | 추상셰이더 시네마틱 | 하이에너지 | 코퍼스 | 미검증 |
| D10 | 생성 원화를 2.5D 합성기로 한 세계에 넣는 단편 (깊이·초점·빛 공유) | 서사설명 | 코드 | canvas2d 이미지생성 배경제거필요 | 시네마틱 필름질감 | 차분 | 코퍼스 | 미검증 |

## 모션 그래픽

### M1. 쇼릴 한 줄
태그: #빠른편집 #원작:코드 #구현:자유 #재료:주제따라 #코퍼스 #미검증 #스타일:자유 #무드:하이에너지

가장 많이 쓰였다(동일 프롬프트 34건, 변형 수십 건). 주제만 주고 연출을 맡길 때.

```text
make a dynamic {15}-second motion graphics video that shows what an incredible motion designer
you are, like it's your showreel for a résumé. go all out.
{주제 한 줄: about <URL> / brand it for <브랜드> / research <제품> first}
```

- 변형 축: 길이(10/15/20/30/40초), 화면(portrait, 1080×1080), 주제, 음악("Oppenheimer 테마에서 영감을 받되 직접 작곡"), 루프, 언어.
- 판돈을 올리는 말: "X에서 1만 명에게 보여줄 것", "이게 약하면 채용되지 않는다", "에이전시에 지원하는 모션 디자이너".
- 구체화 버전: 훅 1초 → 서로 다른 기법의 연속(타이포, 도형 놀이, 카메라, 색 전환) → 깔끔한 마지막 프레임, "음악에 맞춰 편집한 듯한 페이싱"(reflex-cloud-304046). 기법 나열형은 lukasersil-726495.
- 원본: ajith-io-890146, prasenx-693512, ho-ba-761062, heyiammallik-293397

### M2. 프리미엄 제품 필름
태그: #서사설명 #원작:코드 #구현:dom #재료:UI #코퍼스 #미검증 #스타일:애플식제품 #스타일:미니멀클린 #무드:절제

15초, 절제, "애플급". 가장 완성도 높은 상세 브리프.

구성: 역할 지정 → 아닌 것 3줄(범용 SaaS 설명 영상 아님, 기능 훑기 아님, 템플릿 아님) → 원하는 반응 한 문장("잠깐, 이게 독일 장부 앱이라고?") → 실제 소스 경로 → 실제 디자인 토큰(색 HEX, 폰트) → 창작 규칙 번호 목록 → 포맷 → 감정 아크 → 초 단위 스토리보드(제안이지 강제 아님) → 전환 좋은 예/나쁜 예 → 모션·조명·타이포·사운드 → 실제 제품만 → 구현 기대 → "첫 구현에서 멈추지 마라" 10단계 → 품질 기준(기각 목록) → 산출물 10종.

```text
You are the senior motion designer, product designer and {Remotion} engineer for {제품}.
Create a genuinely premium product film, max {15}s. NOT a generic SaaS explainer, NOT a feature
walkthrough, NOT a template animation. Desired reaction: "{한 문장}".
First inspect the real repo/site: {경로}. Use the real tokens: {색·폰트}. Do not invent screens or metrics.
Arc: {CHAOS → CONTROL → CLARITY → 브랜드}. ~4 visual ideas. Premium by 1.5s, first product moment by 2s.
Rules: one shot = one idea; UI is the hero; object-driven transitions (a card becomes the next card);
no linear motion; overshoot under 2%; no particles, no bouncing UI, no constant zooming.
Storyboard (starting point): {0.0–1.2 … / 1.2–4.4 … / … / 12.8–15.0 brand payoff}
Then: storyboard → implement → render stills at {0, 1, 2.5, 4.5 … 14.8}s → visually inspect → fix →
full render → inspect decoded frames from the final MP4. The deliverable is the FILM, not compiling code.
Reject it if it feels like: a SaaS template, a PowerPoint, five screenshots sliding around.
```

- 원본: daniel-haida-636937 (15,583자, 전문 정독 가치 있음)

### M3. 런치 영상 (30초 스토리형)
태그: #서사설명 #원작:코드 #구현:dom #재료:UI #재료:글자 #코퍼스 #미검증 #스타일:SaaS-UI #스타일:키네틱타이포 #무드:경쾌

```text
Act as a senior motion designer and build a {30}-second launch video for {제품} in {Remotion},
entirely in code. First read my landing page and codebase to pull the real story, copy, colors,
font and logo (trace the logo to SVG). One story in 4–5 scenes with one short title each:
why the market matters → why it's painful today → how {제품} fixes it → what you get.
Kinetic typography word by word, spring easing, smooth camera pushes and pans, elements build in
on the beat. Keep each scene long enough to read. One soft SFX per element that appears, silence
otherwise. End on an animated logo reveal with tagline and URL. Render it, check the frames
yourself and fix anything that overlaps, clips or feels rushed before showing me.
```

- 짧은 계열: "make a modern slick and punchy video for {…}"(deedydas-252537), "highly professional SaaS product launch video… 실제 에셋을 인터넷에서 가져와라"(moritzkremb-466494, 5건).
- 초 단위 타임라인을 직접 쓰는 계열: howdevelop-733090(15초 6구간, 구간마다 화면 문구와 정확성 가드레일), brainextends-606193(18초 15구간, 무대 프레임 + 화면 하단에 계속 남는 플레이어 바가 숏을 이어줌).
- 변수 치환 템플릿: ik-builds-585923 (`{{PRODUCT}}`, `{{BANNED_WORDS}}`, 종이 캔버스 + 마커 노트 스타일).
- 원본: aschapmann-724497

### M4. 원셰이프 UI 루프
태그: #연속변형 #루프 #원작:코드 #구현:dom #재료:UI #코퍼스 #미검증 #스타일:미니멀클린 #스타일:SaaS-UI #무드:경쾌

정사각 14초 루프. 하나의 도형이 컷 없이 버튼 → 로더 → 체크 → … → 토스트 → 버튼으로 변한다. 커서가 실제 클릭·드래그로 모든 변화를 몬다.

```text
<inputs> Ask me for: 8–12 UI states, black & white or one accent color, a royalty-free ~120 BPM song.
<direction> Dribbble-level UI motion. One shape, never cut: every state is the same element morphing
size, radius and color while its content swaps with a short blur. A cursor drives every change with
real clicks and drags. Warm-gray canvas, one UI font (Geist). Springs, tiny overshoot at most.
Camera zooms so each state fills the frame. Last frame = first frame.
Banned: bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes,
dead time, anything that looks like a template.
<structure> 120 BPM, 7 bars, something on every beat. {상태 → 상태 → …}
<build> seek(t) pure function · closed-form springs summed · two-edge springs for indicators ·
direct-manipulation drags · numpy beat analysis · Playwright 4 subframes + tmix @60fps ·
one frame per beat before the full render.
<gotchas> no will-change on scaled elements · swapped text needs its own enter/exit · loop must match
cursor position and speed.
<start> Show me the state list on the beat grid before writing any code.
```

- 자기 제품에 적용: 상태 목록을 실제 제품 플로로 바꾼다(annacher-433425). 테마 적용: 포켓볼이 포켓덱스 UI로 변함, 28비트를 한 줄씩 지정(thegrootdev-966114).
- 원본: twoclipping-402193(6건), morse-369333, verbove-268381
- 2026-10-21 추가 변형: 음악 앱 루프(twoclipping-762046, rossaxbt-312793: 점 → 채팅 → 재생 버튼 → 볼륨을 끝까지 당기면 고무줄처럼 카메라를 끌고 나감 → 차트 → 로고), 프롬프트 바 → 진행 링 → 미리보기 → 토스트(0xnicc0-516612), 숫자로만 지정한 간결판(flxrnc-251921: 모양 감쇠 0.72·0.35초, 카메라 감쇠 1.0·0.6초, 커서 속도 프레임당 65px 이하, 루프 경계 t-14·floor(t/14)), 일본어판(okapi-fukugyo-166351).

### M5. 원테이크 키노트 필름
태그: #연속변형 #원작:코드 #구현:dom #구현:webgl #재료:도형 #재료:영상 #코퍼스 #미검증 #스타일:유리크롬 #스타일:미니멀클린 #무드:절제

2D, 한 번의 연속 테이크. "모든 장면이 이전 장면으로 만들어진다. 페이드·블러·컷 없음." 54비트, 리퀴드 글래스, 아이리스 날개, 검은 도형 플러드. 실사 벽 영상 위에 합성.

- 원본: twoclipping-496100 (구현 기법이 가장 촘촘함: 유리, goo, 아이리스, 워드마크 압축)
- 실사 클립을 쓰는 16:9 버전(10마디, 클립 벽 → 3D 캐러셀 → 폰 → 통계): twoclipping-000267

### M6. 키네틱 타이포
태그: #빠른편집 #원작:코드 #구현:canvas2d #재료:글자 #코퍼스 #미검증 #스타일:키네틱타이포 #스타일:포스터타이포 #무드:하이에너지

모션 수치와 연출 규칙은 [kinetic-type.md](kinetic-type.md)에 있다. 가사·대사 초안은 거기 적힌 JIZURA 절차로 빨리 뽑을 수 있다.

- **단어가 건축이 된다:** 연설문을 정확한 단어·순서로 고정하고, 단어마다 구조 역할을 준다(WAIT는 인방, VOICE는 기둥, ROOM의 O는 개구부). 마지막 선언은 앞 단어들이 실제로 지은 것 위에 선다. 비트가 아닌 구절·쉼 기준 큐 시트. 원본: gdgtify-929495
- **스트리트 포스터 범퍼:** 메시지 6비트를 순서 고정, 3색 엄격 팔레트, 3서체 시스템, 필수 기법 9개, 금지 목록. 원본: techhalla-498547
- **매니페스토:** "{문장}"을 20초로, 모든 프레임과 소리를 코드로. 원본: advait-jayant-712107

### M7. 연속 카메라 데스크톱 티저
태그: #연속변형 #원작:코드 #구현:dom #재료:UI #코퍼스 #미검증 #스타일:SaaS-UI #스타일:미니멀클린 #무드:차분

하나의 맥 데스크톱 위를 컷 없이 움직이는 카메라. 느린 푸시·풀·팬, 큰 커서, 실제 앱을 정확히 재현한 창들, 번호 붙인 7단계. 원본: jake11moran-414633

### M8. 뮤직비디오·가사 영상
태그: #빠른편집 #원작:코드 #구현:canvas2d #재료:영상 #재료:글자 #코퍼스 #미검증 #스타일:키네틱타이포 #무드:하이에너지

- 가사 싱크: 첨부 음악에 맞춰 가사와 애니메이션을 보컬·비트에 동기화(samaote-124569, anabology-491441).
- 비트 컷 편집: 1박마다 컷 전환, 컷 유형 순환, 섹션별 효과 강도(인트로 40% / A멜로 70% / 사비 100%), 효과 5종 정의, 본 렌더 전 섹션별 스크린샷 확인. 원본: pound75423-464968
- 대형 자율 브리프: 캐릭터 시트 → 영상 생성으로 베이스 → 그 위를 JS로 다시 그리는 로토스코프식. 가사는 때로 자막처럼, 때로 화면을 지배하게. 원본: anabology-491441
- 수정 지시의 실제 예(입 흔들림 제거, 팔 자세): doubleunplussed-181894

### M9. 스타일·콘셉트 한 줄
태그: #여러성격 #원작:코드 #구현:자유 #코퍼스 #미검증 #스타일:자유

형식 아이디어가 문장 안에 들어 있어서 짧아도 통한다.

- "포스터가 자기 프레임을 깨고 나오는 모션 디자인 영상" (pankajkumar-dev-718609)
- "기차 창밖으로 사계절이 지나감, 아늑한 객차, 테이블 위 커피, 그랜드 부다페스트 호텔 스타일" (itsolelehmann-762215)
- "모든 음이 눈에 보이는 충돌에서 나오는, 45초짜리 음악 연주 기계" (kamstudiolabs-440893)
- "붙이지 않은 유리·금박 모자이크. 물고기는 타일 떼가 헤엄치는 것" (zeezomb-726206)
- "존재하지 않는 넷플릭스 스릴러의 20초 타이틀 시퀀스, 에미상 받은 것처럼" (abhinayguptha-259981)
- "로고를 와이어프레임으로 먼저 그리고, 로우폴리 조각이 하나씩 날아와 조립" (mounnna-497266)
- "대사 없는 45초 단편, 소리가 이야기의 절반" (kamstudiolabs-100086)
- "{스튜디오}를 오실로스코프/리소그래프 스타일로" (rneayan-406275, rneayan-441493)

### M10–M13. 영상을 보고 역으로 뽑은 틀

아래 넷은 프롬프트가 아니라 **완성 영상**에서 나왔다. 2026-10-11에 사용자가 준 영상을 초당 7~10장으로 뜯어보고, 그 결과물이 나오려면 어떤 지시가 필요한지 거꾸로 적었다. 위 M1–M9와 같은 자격의 틀이다. 요청에 맞으면 고르고, 섞어도 된다. 화면 묘사와 스틸은 [techniques.md](techniques.md)의 "2026-10-11 학습분". 정지 프레임만 본 것이라 이징 수치는 [kinetic-type.md](kinetic-type.md)와 [craft.md](craft.md)의 값을 출발점으로 쓴다.

### M10. 도형 연쇄 변형 (Hexzel "quick edit")
태그: #연속변형 #원작:AlightMotion #구현:canvas2d #재료:도형 #영상역추출 #미검증 #스타일:플랫벡터 #스타일:파스텔 #무드:몽환

영상 소재 없이 도형만으로 주인공을 만든다. 원 → 반원 → 쌓인 탑 → 관통하는 막대 → 눈금 고리 → 별 → 행성처럼, 앞 도형이 다음 도형으로 변하며 컷 없이 이어진다.

```text
Make a {8}-second shape-morph motion piece on the theme "{주제}". No footage, no photos: only
geometric shapes that turn into one another without a single cut.
Chain: {원 → 반으로 접혀 반원 → 반원이 쌓여 탑 → 가로 막대가 관통 → 뒤에서 마름모와 동심원이
펼쳐짐 → 눈금·글자가 새겨진 고리 다이얼 → 네 꼭지 별 → 고리 두른 행성 → 로고}.
One hue family ({연보라}) with ONE accent ({노랑}). Every shape has a top-to-bottom gradient, never
a flat fill. Thin line ornaments (concentric circles, dotted columns, crosshairs) sit behind the hero.
Each transformation takes 0.4–0.8s; the next one starts before the last settles. Background colour
changes by a circular wipe that grows out of the hero shape. End on a lockup that holds 1.5s.
Banned: cuts, footage, flat single-colour shapes, more than one accent, shapes that just fade in.
```

- 변수: 주제, 변형 사슬(8~12단계), 색 계열, 길이. 사슬은 주제의 물건들로 짠다(별 → 망원경 → 궤도).
- 구현: 캔버스 2D. 각도·반지름·개수를 시간 함수로 보간, 선형 그러데이션 채움.
- 스틸: `technique-stills/hexzel_stella_shapes.jpg`

### M11. 한 덩어리의 변질 (ego death)
태그: #연속변형 #원작:미상 #구현:webgl #재료:질감덩어리 #영상역추출 #미검증 #스타일:추상셰이더 #스타일:글리치 #무드:몽환

글자도 컷도 없다. 화면을 채운 유기적 덩어리 하나가 단계별로 다른 왜곡을 겪으며 다른 것이 된다.

```text
Make a {15}-second abstract piece: ONE organic mass fills the frame and degrades through stages,
no cuts, no text. Stages: {유리질 소용돌이가 돌며 중심이 뚫림 → 가로 줄무늬로 찢어짐(pixel sort)
→ 만화경 대칭으로 접힘 → 구름 하늘로 풀림 → 유리 조형물이 남음}.
Stay inside one hue family ({청록 → 민트 → 하늘}). Each stage hands over through a distortion of
the previous image, never a crossfade. Small green data-specks drift over the first stage only.
Banned: text, cuts, crossfades, a second colour family, symmetric kaleidoscope for the whole length.
```

- 변수: 덩어리의 재질, 왜곡 단계 4~6개, 색 계열.
- 구현: WebGL 프래그먼트 셰이더(극좌표 소용돌이, 행 단위 픽셀 정렬, 각도 접기 대칭). 덩어리 소재는 셰이더 노이즈로 만들거나 블렌더 렌더를 텍스처로 쓴다.
- 스틸: `egodeath_glitch_abstract.jpg`

### M12. 손그림 로고 팝 (KIRBY logo animation)
태그: #연속변형 #원작:미상 #구현:canvas2d #재료:글자 #재료:도형 #영상역추출 #미검증 #스타일:손그림 #스타일:캐릭터애니 #무드:경쾌

한 색 손그림 로고. 덩어리가 튀어 들어와 뭉쳐 로고가 되고, 머물다가, 빨려 나가며 작은 마스코트만 남는다.

```text
Animate the logo "{이름}" as a {5.5}-second hand-drawn piece, square. ONE colour ({분홍}) on
off-white. Blobs and stars fling in from the edges, squash together and resolve into a chunky
hand-lettered logo by 1.3s. Hold 2.5s: the outline boils (redrawn every 2 frames at 12fps), small
stars keep wobbling, the mascot on top blinks or looks around. Exit 0.8s: the logo is sucked into
the mascot / smears away, leaving the mascot and a few stars. A very pale tone-on-tone pattern of
the same motifs fills the background.
Banned: clean vector edges, a second colour, a static hold, a fade-out exit.
```

- 변수: 로고 글자, 마스코트, 색, 등장 덩어리의 모양.
- 구현: 로고 외곽선 경로가 필요하다(직접 그리거나 이미지 생성 후 벡터화). 경로 점에 2프레임 단위 노이즈, 스쿼시·스트레치 변형.
- 스틸: `kirby_logo_handdrawn.jpg`

### M13. 인물 뒤의 거대 글자 편집 (borderline edit, zresin 계열)
태그: #빠른편집 #원작:AE #구현:canvas2d #구현:배경제거필요 #재료:영상 #재료:인물 #재료:글자 #영상역추출 #미검증 #스타일:포스터타이포 #스타일:인쇄물망점 #스타일:콜라주 #무드:하이에너지

영화·MV·게임 영상으로 만드는 타이포 편집. 인물을 오려 내고, 화면만 한 글자를 인물 **뒤**에 세운다.

```text
Make a {11}-second typography edit from {영상}. For every beat, a new composition (0.3–0.7s each).
In each one: cut the subject out of the footage; flood the frame with ONE fluorescent colour (a
different one per section: {주황 / 노랑 / 분홍 / 하늘 / 보라}); stand a frame-high condensed
word BEHIND the subject and let the subject overlap it; add one framing device (circular window,
three-way split, diagonal stripes, name tag). Words tilt, lie down in 3D, and get cropped by the
frame edge. Every transition carries directional motion blur in the direction of travel.
Lyrics on screen: {가사 단어 목록}, one word per composition.
Banned: full-colour untreated footage for more than 0.3s, text with outlines or drop shadows,
text sitting on top of the face, the same layout twice in a row.
```

- 변수: 영상, 구간별 색, 단어 목록, 틀의 종류.
- 구현: 배경 제거 모델로 인물 마스크 → 뒤 글자 → 인물 → 앞 장식 순서로 합성. 글자 3D는 변환 행렬. 전환 블러는 서브프레임 블렌드.
- 같은 계열: zresin(인쇄물 소품과 종이 질감이 추가됨). techniques.md "오려 붙이기 포스터".
- 스틸: `borderline_type_edit.jpg`, `zresin_*.jpg`

### M10–M13 보강: 큰 프레임에서 읽은 세부 (2026-10-12)

`watch` 스킬 기본 해상도(512px)로 다시 보고 추가한다. 위 프롬프트에 아래 세부를 더해 쓴다.

**M10 도형 연쇄**
- 바탕도 단색이 아니라 위가 진하고 아래가 옅은 세로 그러데이션이다. 첫 프레임은 흰 바탕 위 그러데이션 원 하나.
- 주인공 뒤에 반투명한 큰 마름모 두세 겹이 어긋나게 겹친다(불투명도 15~30%). 그 위에 가는 금색 원 2개와 세로축 선 1개.
- 좌우에 작은 별 5개를 세로로 늘어놓은 점선 기둥. 주인공 아래로 별 3개가 크기를 줄이며 떨어진다. 주인공 둘레에 가는 타원 궤도선 3개.
- 다이얼: 굵기가 다른 동심원 4~5겹, 바깥 고리에 한자(風 火 水 土)와 괘 기호, 안쪽 고리에 작은 빈 네모와 짧은 대시가 번갈아 놓인다. 가운데 네 꼭지 별의 꼭짓점마다 작은 원 마디.
- 배경 전환은 두꺼운 흰 고리가 한 번 조였다 풀리며 일어난다. 중간에 청록 바탕이 0.5초쯤 끼어든다(계열 밖의 색을 딱 한 번).
- 마지막: 육각 외곽선 + 끊어진 호 + 사선으로 날아오는 노란 별똥별 + 통통한 노란 로고(같은 색 그림자).
- 바탕에 아주 옅은 구름 얼룩과 흰 점 몇 개.

**M11 한 덩어리의 변질**
- 시작은 밝지 않다. 검정 위에 반투명 청록 유리 띠가 휘어 있다가 0.2초 만에 파스텔 소용돌이로 밝아진다.
- 소용돌이에 분홍·노랑 무지갯빛이 살짝 비친다(주색의 5% 이하). 중심에 가는 동심원 물결.
- 초록 점들은 가로로 짧게 늘어진 대시이고 옆에 아주 작은 숫자 라벨이 붙어 있다.
- 줄무늬 구간의 가장자리에 분홍·노랑 색 번짐. 만화경 구간은 채도가 확 낮아진 청회색·갈색이고 네 귀퉁이에 유리 장미가 놓인다.

**M12 손그림 로고**
- 글자는 속이 빈 외곽선이다(선 굵기 일정, 글자끼리 겹침). 등장하는 덩어리는 속이 찬 면이고, 로고가 될 때 외곽선으로 바뀐다.
- 별은 속 찬 것과 외곽선뿐인 것이 섞여 있다. 마스코트는 유지 구간에 표정이 3~4번 바뀐다.
- 배경 무늬는 같은 캐릭터를 화면보다 크게 그린 외곽선으로, 바탕과 5% 차이밖에 안 난다.
- 퇴장에 이유가 있다: 마스코트가 로고를 **빨아들인다**(그 캐릭터의 능력). 퇴장 방식을 캐릭터나 브랜드의 성질에서 가져온다.

**M13 인물 뒤 거대 글자**
- 영상은 **흑백으로 뺀다.** 색은 그래픽에서만 나온다. 이것이 형광색을 살린다.
- 오려 낸 인물 둘레에 그 구간 색의 외곽선이 한 줄 둘러진다.
- 타임라인 레이어 이름에서 읽힌 것: `halftone…photo.jpg`, `Texture….jpg`가 Overlay로 전체에 깔리고, 카메라와 널이 있어 3D 공간에서 움직인다. Adjustment 레이어가 여러 장.
- 틀의 종류: 큰 망점(물방울무늬) 면, 흑백 부채꼴이 도는 조리개 원 + 푸른 대리석 무늬 고리, 파랑 한 색으로 단순화(포스터화)한 인물, 인물 위를 지나는 주황 붓 자국.
- 글자: 굵은 압축 고딕, 두 줄이 색이 다르다(파랑 "SOBER" / 하늘 "UP!"). 그 위에 아주 작은 설명 문장 한 줄. 등장할 때 세로로 번진다.
- 흰 바탕 구간이 중간에 들어가 숨을 쉰다.

### M14–M17. 영상을 보고 역으로 뽑은 틀 2차 (2026-10-12)

M10–M13과 같은 방식으로 뽑았다. 화면 묘사와 스틸은 [techniques.md](techniques.md)의 "2026-10-12 학습분". 아직 직접 만들어 본 적이 없는 틀이다.

### M14. 두 화면 코믹 팝 타이틀 (aco, 공연 배경 영상)
태그: #빠른편집 #원작:미상 #구현:canvas2d #재료:글자 #재료:도형 #영상역추출 #미검증 #스타일:코믹팝 #스타일:인쇄물망점 #무드:하이에너지

화면을 둘로 나눠 각자 다른 내용을 다른 박자로 돌린다. 한쪽이 버틸 때 다른 쪽이 연타한다. 만화 효과선, 망점, 두 색짜리 이름 카드.

```text
Make a {6}-second comic-pop title sequence for {그룹·행사명} on TWO stacked ultra-wide screens
(each about 3.6:1) inside one {1920x1080} frame. The two screens never show the same thing and
never cut on the same beat: while one holds 1–1.5s, the other fires 0.1–0.5s hits; then they swap.
Screen A (title track): {경고 딱지 떼 → 글리치 → "TRANSFORM" 가로 흐름 3줄 → 방사선 위에 그룹명이
한 글자씩 꽂힘 → 글자 하나씩 흰색으로 번쩍 → 블록 글자 곡 제목}.
Screen B (cast track): {이름 카드 → 붓 자국 와이프 → 다음 이름 카드 → 도시 실루엣과 큰 해 →
폭발 → 이름 카드 4장 연타}.
Name cards: two colours per card ({보라+하늘 / 초록+보라 / 분홍+회백 …}), jagged shards converging
on the centre, the name in a wide heavy grotesque on two lines, cropped by the top and bottom edge,
one tiny vertical label ({소속명}). Speed lines: wedges from one point, re-rolled every frame.
Block title: white face, black extrusion, a highlight sweeping across. Coarse halftone, paper
stains and small white sparkles over everything.
Banned: both screens cutting together, gradients, more than two colours on one card, a card that
appears without a wipe (brush stroke, halftone slab or reticle), thin elegant type.
```

- 변수: 화면 구성(2단, 3면, 초광폭 1면), 이름 목록, 카드별 색 쌍, 제목 문구, 길이.
- 구현: 캔버스 2D. 한 캔버스에 뷰포트 둘, 시간표도 둘. 방사선은 삼각형 다발, 블록 두께는 밀어 찍기.
- 화면이 하나뿐이면 위아래로 나눠 쓰거나, 타이틀 트랙과 이름 트랙을 번갈아 컷으로 잇는다.
- 스틸: `technique-stills/acco_stage_comic_pop.jpg`, `acco_stage_timing.jpg`

### M15. 평면 그래픽 × 3D 유체 (jyuni-byo "FLOWING")
태그: #빠른편집 #원작:C4D #원작:AE #구현:three #구현:blender필요 #재료:도형 #재료:3D #재료:글자 #영상역추출 #미검증 #스타일:포스터타이포 #스타일:소프트3D #무드:하이에너지

주제 단어 하나가 모든 모양의 이유가 된다. 납작한 도형과 글자 사이로 공 알갱이 유체가 자라나 화면을 먹는다.

```text
Make a {6.5}-second type piece on the single word "{FLOW}". Everything on screen must be a form of
that word: {물결 줄무늬, 물결 리본, 흐르는 선, 유체}. Black ground; flat shapes in {군청, 노랑,
민트, 흰색}: a thick ring, a white square with a circular hole, a thin ring, hairlines ending in
dots, all rotating slowly. Through them grows ONE 3D element: a clustered fluid made of thousands of
small spheres, lit and shaded, which changes colour family per section ({청록 → 회색 → 보라 →
알갱이 밭}).
Beats: (1) the word slams in filling the frame in an ultra-condensed face, shrinks to ~15% of the
frame and tracks out, then holds 1.5s while the fluid grows; (2) the fluid swirls and carries the
word away into wavy ribbons repeating a serif phrase ({TIME FLOWS}); (3) the fluid folds into
left-right symmetry over a grid of flat tiles holding four short words, each in a different face and
colour; (4) fat wavy bands wipe the frame, wavy outlines converge into the closing line
({time flows by.}) over a macro bead field, hold 1.5s.
Banned: text larger than the fluid during holds, one typeface throughout, a flat 2D "blob" standing
in for the fluid, shapes unrelated to the word, gradients on the flat shapes.
```

- 변수: 주제 단어와 그 단어에서 나오는 모양 목록, 평면 색 3~4개, 유체의 구간별 색, 문구 3개.
- 구현: 유체는 three.js 인스턴스 구 + 컬 노이즈 + 매트캡, 또는 블렌더 메타볼 렌더를 알파 시퀀스로. 평면 층은 캔버스 2D로 유체 앞뒤에 합성.
- 스틸: `jyuni_flowing_fluid_type.jpg`

### M16. 유리 3D + 포스터 글자 콜라주 (Furyxzia)
태그: #빠른편집 #원작:AE #구현:three #구현:webgl #재료:3D #재료:글자 #재료:사진 #영상역추출 #미검증 #스타일:유리크롬 #스타일:포스터타이포 #스타일:필름질감 #무드:향수

약 1초마다 전혀 다른 세계로 넘어가되, 네 색과 맨 아래 정보 줄이 끝까지 같아 한 편으로 묶인다. 구간 사이에는 1프레임짜리 끼움 화면.

```text
Make an {8}-second vertical ({4:5}) music teaser for "{곡명}" by {가수}. Four colours only:
white, black, {빨강}, {군청}. A thin info line stays on screen the whole time: {곡명 ——●—— by 가수}.
Six worlds, about 1–1.5s each, each a complete change of space:
(1) a 3D set of black lattice frames over white tiles with brush marks, glass spheres holding
{파란} liquid, camera tilting; flat hairline boxes and tiny captions overlaid;
(2) the same set seen through a circle on white, letters scattering, a repeating serif ticker below;
push in until it defocuses and splits into chromatic fringes;
(3) scraps of text and small poster cards scattered in 3D white space, camera flying through, then
inverted to black with a brief off-palette burst ({라임, 자홍, 노랑}) — the only time;
(4) macro of the glass spheres on black/white stripes, a lyric typing on bottom-left;
(5) a cream poster: ONE huge character at a time with a coloured extrusion, swapping every 0.4s
({가사 글자들}), a tilted serif name behind it, the lyric accumulating below with the current
character in colour;
(6) blurred black-and-white close-ups of {손그림 콘티}, focus pulling, then black.
Between worlds insert ONE-frame cards: negative with scanlines, radial zoom blur, solid {파랑},
solid white, two vertical colour bars. Grain over everything.
Banned: a fifth colour outside world 3, crossfades, the same camera move twice, lorem ipsum (all
small text is real: lyrics, credits, song facts), glass without refraction.
```

- 변수: 곡명·가수, 두 포인트 색, 세계 6개의 내용, 큰 글자로 띄울 가사 글자, 끼움 화면 종류.
- 구현: 유리는 three.js transmission 재질 또는 블렌더. 1프레임 끼움·색 수차·픽셀 늘이기·그레인은 후처리 셰이더. 정보 줄은 고정 층. 6번의 콘티는 실제 작업 스케치를 찍은 사진이 있으면 쓰고, 없으면 빼거나 묻는다.
- 스틸: `furyxzia_glass_type_mv.jpg`

### M17. 대칭 셰이더 VJ 루프 (ke-go)
태그: #루프 #원작:미상 #구현:webgl #재료:도형 #영상역추출 #미검증 #스타일:추상셰이더 #스타일:VJ #무드:긴장

글자도 물체도 없는 2색 루프. 네 방향 대칭인 세로 결 덩어리가 몇 프레임마다 뚝뚝 바뀐다.

```text
Make a {2}-second seamless VJ loop, {1280x720}, as a single fragment shader. Two colours: black and
{진홍}, with a trace of {보라} and white-hot edges. A feathery, pleated mass with vertical grain,
mirrored left-right AND top-bottom. Black horizontal bands cut it into layers (one across the
centre). The form does not flow: it steps to a new state every 2–4 frames. Every {8} steps the top
and bottom edges blow out to white for one step.
Banned: text, recognisable objects, smooth continuous motion, a third hue, radial (kaleidoscope)
symmetry.
```

- 변수: 색, 한 걸음의 프레임 수, 띠의 위치, 길이(박자에 맞춘 루프).
- 구현: 좌표를 `abs()`로 접기, 세로로 늘인 노이즈, 띠 마스크, 걸음 단위 시간, 블룸. BPM을 받으면 한 걸음을 16분음표에 맞춘다.
- 다른 틀의 배경이나 전환 구간으로 섞어 쓰기 좋다.
- 스틸: `kego_mirror_vj_loop.jpg`

### M18. 빛나는 핵 + 글자 성운 (Pinckus, MEP 파트) — 빠른 편집형, 미검증
태그: #빠른편집 #원작:Blender #원작:Cavalry #원작:AE #구현:canvas2d #구현:webgl #구현:three #구현:blender필요 #재료:글자 #재료:3D #재료:인물 #영상역추출 #미검증 #스타일:사이버HUD #스타일:필름질감 #스타일:글리치 #무드:하이에너지

화면 가운데 빛나는 핵 하나를 끝까지 지키고, 둘레의 배치와 색 세계만 갈아입힌다. 2026-10-14 학습분.

```text
Make a {19}-second part for a multi-creator collab, 16:9, framed by host slates ("{MOV READY}" before,
"{작가명}" and "{MOV END.}" after). Title: "{HyperMotion}".
The hero is ONE glowing core at frame centre for the whole piece: a lens-flare star with a horizontal
streak, wrapped in hairline orbit ellipses. Around it, dozens of tiny glowing fragments of the title,
small boxes and thumbnail cards are distributed on a sphere / ring and drift with noise. Keep the
core in place; change what surrounds it per section: {글자 성운 → 궤도 다발 → 네모 격자 판 →
사방으로 뻗는 판재 통로}. The core's colour changes per section ({분홍 → 주황 → 흰 → 파랑 → 빨강}).
Colour worlds, each graded to ONE tone: {검정+따뜻한 빛 → 분홍·미색으로 하얗게 날아가는 터널 →
청록 하늘·바다에 3D로 떨어지는 인물과 둘레를 도는 가시 나선 → 남색 → 빨강 단색과 레이저 선 →
다시 검정의 핵}. A song slate splits the piece in two.
Title type: a wide sans in {연두} stamped half-frame size with a shifted duplicate; later tiny
letters on a horizontal + vertical cross that fold into one line. Tiny labels in the frame corners.
Transitions (0.2–0.5s): vertical pixel-sort stretch, horizontal slit-scan smear, radial zoom blur,
full white blow-out, an ultra-wide letterbox strip. Holds 1–1.5s.
Finish everything like old film: grain, red halation around highlights, chromatic fringes, vignette,
slightly lifted blacks.
Banned: moving the core off centre, clean digital finish, more than one hue family per section,
crossfades, big text over the core.
```

- 변수: 제목, 구간 수와 색 세계, 핵 둘레 배치 4~5종, 3D 모티프(떨어지는 인물 등), 슬레이트 문구.
- 구현: 글자 성운·궤도·격자·십자 글자는 캔버스 2D(구·원·격자 분포 + 노이즈). 플레어·할레이션·그레인·색 수차·픽셀 정렬·슬릿 스캔은 후처리 셰이더. 판재 통로와 가시 나선은 three.js, 인물은 블렌더 렌더를 알파로. 원작은 Blender + Cavalry + After Effects.
- 스틸: `pinckus_hypermotion_A.jpg`, `pinckus_hypermotion_B.jpg`, `pinckus_hypermotion_timing.jpg`

### M19. 소품이 다음 장면을 여는 시대 재현 편집 (KIIIKIII world, Y2K)
태그: #빠른편집 #원작:AE #원작:Blender #구현:canvas2d #구현:three #구현:blender필요 #구현:배경제거필요 #재료:영상 #재료:인물 #재료:3D #재료:글자 #영상역추출 #미검증 #스타일:Y2K #스타일:콜라주 #무드:향수 #무드:경쾌

이 작품을 위해 만든 3D 소품 하나가 이야기 장치가 된다. 소품의 화면이 지난 장면을 보여 주고, 소품의 기능(렌즈, 스피커, 문)이 다음 장면을 연다. 그 위를 한 시대의 화면 모티프로만 채운다. 2026-10-14 학습분.

```text
Make an {11}-second fan edit of {영상} in the look of {2000년대 초 한국·일본 디지털 화면}. 4:3-ish frame.
Build ONE hero prop for this piece in 3D: {분홍 장난감 디지털카메라, 렌즈 둘레에 꽃, 투명한 몸통 안에
작은 장식}. The prop is the storytelling device:
(1) open on the footage blown out to white with bloom, two shots melting into each other;
(2) a one-frame solid {연두} flash, then the prop seen from behind — its screen is playing that same
footage; it turns to show its front;
(3) the prop flies to a corner and its {렌즈} fires a {무지개} beam; inside the beam, gradient-filled
dancer silhouettes appear on a {사선 은색 레일} with {가사 음절} running along its side in perspective,
a vector city skyline and thin concentric circles behind;
(4) a scrapbook collage: performers cut out with a white outline over spray paint, flowers and a
film-label scrap, glossy 3D stickers ({별, 십자, CD}) in front;
(5) a pixel-mosaic wipe into a halftoned {스피커}; push into the woofer;
(6) {자홍} gradient sky, perspective checkerboard floor, two silhouettes dancing.
Every motif must belong to the era: {벡터 도시, 동심원, 그러데이션 실루엣, 체크무늬 바닥, CD, 반짝이는
플라스틱, 과노출}. Every shot of the footage is processed (blown out / inside the prop's screen / cut
out / filled as silhouette) — never shown plain.
End by bringing the prop back (it takes the last picture / the beam closes), not a fade to white.
Banned: plain untreated footage, motifs from another era, a fade-out ending, more than one hero prop.
```

- 변수: 영상, 재현할 시대와 그 모티프 목록, 소품과 그 기능(무엇을 보여 주고 무엇을 여는가), 장면 5~6개.
- 구현: 소품은 블렌더 렌더(화면 자리는 비워 두고 코드에서 영상을 매핑)나 three.js 광택 재질. 실루엣·오려내기는 배경 제거 모델 필요. 과노출·블룸·픽셀 모자이크·망점은 후처리 셰이더. 도시·동심원·바닥·레일 글자는 캔버스 2D와 원근 변환.
- 원작은 결말이 흰색 페이드라 약했다. 틀에는 소품을 다시 불러와 닫도록 적었다(내 판단).
- 스틸: `kiiikiii_y2k_camera.jpg`, `kiiikiii_y2k_timing.jpg`

### M20. 흔적에서 다음 물체가 나오는 3D 변신 (BTS 종이 → 알약)
태그: #연속변형 #원작:AE #구현:three #구현:canvas2d #재료:도형 #재료:3D #영상역추출 #미검증 #스타일:미니멀클린 #스타일:소프트3D #무드:차분

```text
Make a {15}-second cut-free 3D piece on ONE dark {파랑} gradient ground. One family of soft matte objects
transforms five times; each new object is born from a trace the previous one left:
{휘어진 종이 조각 구름 → 한 장이 펴져 정사각 종이 → 종이비행기가 원을 그리며 지나감 → 그 원이 고리가 되고
종이에서 공이 솟음 → 공이 알약으로 늘어나 별 가루 속을 떠다님 → 별 점이 모여 알약 둘레의 빛나는 고리}.
Colour: one hue family + white + one glow colour. Every move is hand-eased: anticipation, overshoot under
3%, settle. Camera drifts slowly; no cuts, no text.
Banned: hard cuts, a second colour family, glossy chrome, particles that are only decoration, objects that
appear without coming from the previous one.
```

- 변수: 물체 사슬 4~6단계와 각 단계의 "흔적"(그린 선, 남은 그림자, 접힌 자국), 색 계열.
- 구현: three.js(휘어진 평면, 캡슐, 점 스프라이트, 매트캡). 원작은 AE 3D에 널과 경로를 붙여 손으로 키프레임했다.
- 스틸: `bts_paper_to_pill.jpg`, `bts_paper_to_pill_2.jpg`

### M21. 개인 로고로 열고 닫는 쇼릴 구성 (guimotion)
태그: #여러성격 #원작:미상 #구현:자유 #재료:주제따라 #영상역추출 #미검증 #스타일:여러스타일 #무드:경쾌

M1(쇼릴 한 줄)은 한 편짜리 작품을 새로 만드는 틀이고, 이것은 **이미 있는 작업들을 엮는** 틀이다.

```text
Cut a {55}-second showreel from {작업 목록}. Open on my personal mark being drawn in 3D on {책상 위 공책}
(3s). Then my most personal project first, as a mini-sequence of 4–5 shots linked by the same object.
Then client work, 2–4s each, ordered so that consecutive pieces share a colour, an object or a screen
(a laptop on the desk plays the next piece). Every shot carries a two-line label top-left in tiny type:
"{스튜디오 / 클라이언트}" and "{맡은 일}". Close by drawing the mark again, then the URL.
Banned: title cards between projects, chronological order, one piece longer than 5s, labels that move
between shots.
```

- 변수: 작업 목록, 개인 로고, 라벨 두 줄의 내용, 길이.
- 구현: 편집 위주라 dom(Remotion·HyperFrames)이나 ffmpeg로 이어 붙이고, 로고 그리기만 three.js 튜브나 캔버스 경로로.
- 스틸: `guimotion_reel_A.jpg`, `guimotion_reel_B.jpg`

### M22. 화면 속으로 들어가 처음으로 돌아오는 플랫 루프 (HUANG 표지)
태그: #연속변형 #루프 #원작:AE #구현:canvas2d #재료:도형 #재료:UI #재료:캐릭터 #영상역추출 #미검증 #스타일:플랫벡터 #스타일:레트로컴퓨터 #스타일:네온 #무드:경쾌

```text
Make a {7.7}-second seamless loop at {10fps} (stepped, limited animation). Flat vector illustration with
thin dark outlines, three bold fields ({자홍, 형광 초록, 보라}) and one accent ({노랑}). A desk scene of
{창, 폴더, 키보드, 전등, 얼굴 있는 작은 원들} with the title "{이름} / {연도} SHOWREEL".
A pointing cursor clicks the mascot ({노란 별, 점 눈}) → the camera pushes into the monitor → a loading bar
fills 0→100% → the screen becomes a {체크무늬 방}, the mascot drops in and bounces → push further until the
frame is exactly the opening frame again.
Banned: smooth 60fps motion, gradients, a cut anywhere in the loop, more than one accent colour.
```

- 변수: 장면(책상·방·거리), 들어가는 문(모니터·창문·액자), 마스코트, 세 면의 색, 길이.
- 구현: 캔버스 2D 벡터, 고정점 지수 줌(E4와 같은 수학), 시간을 10fps 계단으로.
- 스틸: `huang_cover_loop.jpg`

### M23. 별 하나에서 줌아웃해 큰 그림을 드러내는 에디토리얼 루프 (Extension of Life)
태그: #연속변형 #루프 #원작:AE #구현:canvas2d #재료:도형 #재료:인물 #영상역추출 #미검증 #스타일:에디토리얼일러스트 #스타일:종이질감 #무드:차분 #무드:향수

```text
Make a {7.5}-second loop in an editorial-illustration style: flat shapes with paper grain and stains,
five muted colours ({남색, 미색, 테라코타, 강철 파랑, 모래}). Start on one small {네 꼭지 별} lighting up on
{남색} paper (grey → gold → white, half a turn). Pull back: it sits at the centre of a disc whose ring
segments rotate and lock into place; tiny diamond confetti drifts. Keep pulling back until the disc is
the centre of a large composition that quotes {널리 알려진 구도: 두 손이 가운데를 향해 뻗음}: {사람 손} from
one side, {기계 손} from the other, layered hills and architecture at the edges. Hold 3s with small breathing
motion, then cut back to the star so the loop closes.
Banned: strong gradients, clean digital flats without grain, text, repeating the loop inside the file.
```

- 변수: 시작하는 작은 물체, 인용할 구도와 주제, 다섯 색.
- 구현: 캔버스 2D. 줌아웃은 레이어별 스케일, 고리 조각은 호 회전, 종이 질감은 multiply.
- 원작은 한 바퀴를 네 번 반복했다. 틀은 한 바퀴만 만든다(금지 목록).
- 스틸: `extension_of_life.jpg`

### M24. 2D 그러데이션을 지도로 삼는 액체 유리 (Liquid glass gradients)
태그: #연속변형 #원작:AE #구현:webgl #재료:도형 #재료:질감덩어리 #영상역추출 #미검증 #스타일:유리크롬 #스타일:추상셰이더 #무드:몽환

움직임과 재질을 나눈다. 움직임은 단순한 2D 그러데이션으로 만들고, 그 그러데이션을 높이 지도로 써서 유리를 입힌다.

```text
Make a {9}-second vertical piece of {5} liquid-glass loops. For each: first animate a plain 2D scene of soft
blurred radial gradient blobs ({자홍, 형광 초록, 파랑, 주황} with a few black holes), slow and syrupy,
sometimes mirrored. Then treat that animation as a HEIGHT MAP: bright = raised, dark = sunken. From it derive
normals and render thick glass: refract a background colour field by the normal, split R/G/B slightly for
iridescent fringes, add a sharp white specular rim and a fresnel edge. The glass keeps the exact layout and
motion of the gradient animation; only the material changes. Grade the result toward {분홍, 청록, 은색}.
Format per clip: 1s split screen "ORIGINAL ANIMATION | FINAL LOOK", then 1s full-frame final look.
Banned: cuts inside a clip, hard-edged shapes in the source animation, flat unrefracted colour, a material
that ignores the source layout.
```

- 변수: 원본 2D 애니메이션(덩어리의 수·색·대칭), 유리 두께(높이 배율), 굴절 세기, 색 번짐 양, 최종 색 정리.
- 구현: WebGL 셰이더 한 장(높이 → 법선 → 굴절·색 분리·반사·프레넬). 원본 애니메이션은 캔버스 2D로 그려 텍스처로 넘기면 된다. 원작은 AE(방법은 추정: CC Glass·변위 맵 계열).
- 다른 틀과 섞기 좋다: M10 도형 연쇄, M11 덩어리 변질, M17 VJ 루프의 화면을 그대로 높이 지도로 넣으면 유리 판이 된다.
- 스틸: `liquid_glass_gradients.jpg`, `liquid_glass_gradients_2.jpg`

### M25. 문장마다 화풍을 갈아입는 종이 콜라주 설명 영상 (Why does AI…)
태그: #서사설명 #원작:미상 #구현:canvas2d #재료:캐릭터 #재료:글자 #재료:사진 #영상역추출 #미검증 #스타일:콜라주 #스타일:종이질감 #스타일:손그림 #스타일:캐릭터애니 #무드:경쾌

짧은 설명 한 문장을 마디로 쪼개고, 마디마다 다른 화풍의 세계로 넘어간다. 종이 질감과 네 색만 끝까지 같다.

```text
Make a {23}-second explainer answering "{질문}" in {5–6} beats, one beat per clause of the answer
({문장을 마디로 나눈 목록}). Every beat is a different visual world, but all share ONE paper texture and
FOUR colours ({파랑, 빨강, 노랑, 미색}):
(1) a flat character illustration with {머리가 열려 생각이 솟는 은유}, the clause stacked word by word,
each word in a different letterform; (2) a cut-out character performing the clause, small reaction
characters below, pen doodles accumulating; (3) a doodle-covered notebook page, words being crossed out,
red underlines and circles; (4) a 3D push-pin flies in and pins a sticky note with the key question;
(5) an investigation board, red strings drawn across, the clause hand-lettered; (6) a desk collage of
torn magazine ads, notes and clips, the clause in ransom-note cut-out letters, a hand takes away the
crumpled draft; end on the punchline in cut-out letters over a bin of crumpled paper.
The letterform follows the meaning (confident = script, wrong = torn strip, stitched-together = ransom
letters). A prop from the opening must come back at the end.
Banned: one illustration style throughout, a fifth colour, clean digital flats without paper grain,
voice-over-only pacing where the picture does not change per clause.
```

- 변수: 질문과 답 문장, 마디 수, 네 색, 마디마다 고를 화풍(일러스트·컷아웃 캐릭터·공책 낙서·수사 보드·잡지 콜라주·오려 낸 글자), 처음과 끝을 잇는 소품.
- 구현: 캔버스 2D(종이 질감 multiply, 오려 낸 글자, 손떨림 선, 컷아웃 캐릭터). 사진처럼 보이는 소품(압정, 구겨진 종이, 잡지 조각)은 이미지를 오려 넣는다.
- 설명 영상(E 계열)에 붙여 쓰기 좋다. 나레이션이 있으면 마디 경계를 음성의 구절 경계에 맞춘다.
- 스틸: `ai_wrong_collage.jpg`, `ai_wrong_collage_2.jpg`

### M26. 그레인 일러스트 + 실사 카드 + 대형 타이포의 긴 브랜드 필름 (Paddle)
태그: #서사설명 #원작:미상 #구현:canvas2d #구현:three #재료:UI #재료:사진 #재료:글자 #재료:캐릭터 #영상역추출 #미검증 #스타일:그레인일러스트 #스타일:콜라주 #스타일:포스터타이포 #무드:경쾌

매체를 계속 바꾸되(3D 그래프, 반입체 UI, 실사 카드, 캐릭터, 항공 사진) 색 다섯·그레인 질감·상징 하나를 끝까지 지켜 한 편으로 묶는다.

```text
Make a {90}-second brand film for {회사} ({무엇을 해 주는지}). Story: problem → chaos → one answer →
how it works → results → logo. Palette: the brand's {5} colours + black; almost every shot sits on one
flat brand-colour field. Everything illustrated has heavy airbrush grain and soft gradient shading;
icons (cursor, windows, currency signs, folders) are chunky and semi-3D, never flat line icons.
Beats: {3D 막대그래프가 자라다 무너짐} → {UI 창이 쌓이고 물건 수십 개가 동심원으로 소용돌이치는 혼돈} →
stock footage of the problem ({지구, 서류 더미, 지친 얼굴}) inside rounded cards on colour fields with one
big word each → ONE symbol ({노란 네 꼭지 별}) lights up in the chaos and everything else fades to grey →
product flow ({요금제 선택 → 결제 → 성공 체크}) with a fat grainy cursor → words cycling through languages
and currencies → real people succeeding → walking characters, big numbers over landscapes → a button click
with confetti → aerial photos in coloured frames → the symbol becomes part of the logo → wordmark on black.
Type: wide grotesque caps mixed with italic and very wide tracking, often larger than the frame, with a
grainy gradient band behind.
Banned: flat vector icons without grain, full-frame stock footage for more than 2s, a colour outside the
palette, the symbol appearing only at the end.
```

- 변수: 회사·제품, 브랜드 색, 상징 하나, 문제 장면 목록, 제품 흐름 단계, 결과 숫자, 길이.
- 구현: 캔버스 2D(분무 그레인 음영, 밀어 찍은 반입체 아이콘, 색면 카드), three.js(3D 그래프·소용돌이, 같은 그레인 후처리). 실사는 클립을 카드에 넣는다. 원작 도구는 미상.
- 설명 영상 E2·E8이나 런치 M3와 섞어 쓰기 좋다.
- 스틸: `paddle_brand_A.jpg`, `paddle_brand_B.jpg`

### M27. 지금 놓인 것만 강조색인 도시 타이포 (TOKYO)
태그: #빠른편집 #원작:Cardboard #구현:canvas2d #구현:three #재료:글자 #재료:사진 #재료:3D #영상역추출 #미검증 #스타일:스위스타이포 #스타일:미니멀클린 #무드:절제

```text
Make a {10}-second city title for "{도시}" on a light grey ground with a faint grid. Two colours only:
black and {진홍}, plus black-and-white photos. Rule: whatever has just arrived is {진홍}; the moment the
next thing arrives, the previous one turns black.
Beats: the name builds letter by letter in a heavy grotesque (each new letter {진홍}) with B&W photo cards
({탑, 골목, 빌딩}) stacking between the letters, fanning out sideways and scattering; a {진홍} square holds a
slowly spinning 3D object ({부채}), the frame floods {진홍}, another object ({김밥}); then the name again,
huge, shrinking, with {진홍} 3D objects ({자전거, 김밥, 부채}) slotted into the gaps, completing
"{도시} {나라}" with tiny coordinates below; everything slides out.
Tiny captions (city, coordinates) sit near the corners.
Banned: a third colour, colour photos, the accent colour on more than one element at a time, decorative
transitions (the letters and photos ARE the transitions).
```

- 변수: 도시·나라 이름, 강조색, 흑백 사진 목록, 상징 물건 3~4개.
- 구현: 캔버스 2D(글자, 격자, 사진 카드, 색면). 3D 물건은 three.js 로우폴리를 두 색으로 칠하거나 블렌더 알파 시퀀스.
- 스틸: `tokyo_type_photo.jpg`

### M28. 물리량을 색으로 매핑하는 매끈한 3D 과학 설명 (You can't recycle plastic forever)
태그: #서사설명 #원작:미상 #구현:three #구현:canvas2d #재료:3D #재료:글자 #영상역추출 #미검증 #스타일:소프트3D #스타일:미니멀클린 #스타일:그레인일러스트 #무드:차분

설명하려는 물리량 하나(온도, 압력, 속도…)를 화면 전체의 색에 그대로 연결한다. 한 물체로 파고들었다가 나와서 결과를 보여 준다.

```text
Make a {20}-second science explainer: "{한 문장 주장}". Near-white {하늘색} ground, ONE soft translucent 3D
object ({플라스틱 병}) with shallow depth of field. The physical quantity being explained ({열}) IS the
colour: cold = {하늘색·파랑}, then {분홍 → 주황 → 노랑} as it rises; the whole background follows. No other
colours.
Beats: object at rest, narration appearing word by word in tiny sans beside it → {성냥} approaches, the
inside warms → cut to the micro level: {파란 분자 사슬} running diagonally, the key term large, the rest tiny →
push into one link; the {열} spreads from the contact point, link goes {파랑 → 주황 → 노랑} → it snaps,
grainy fragments drift, the consequence written beside them → back to object scale: a row of objects
cycling through the colours, each smaller and more tilted, ending as flat broken shards → sign-off: the
channel name in a big rounded sans behind the object, the letters seen through the translucent body.
Text colour follows the scene temperature. Grain appears only in the hottest shots.
Banned: a colour that does not mean anything, narration as full subtitles at the bottom, hard cuts between
the macro and micro scale (zoom through), more than one hero object family.
```

- 변수: 주장 문장, 물리량과 색 램프, 물체(거시)와 그 안의 구조(미시), 결과 장면, 마지막 서명.
- 구현: three.js 반투명 재질 + 셰이더 색 램프(접촉점 거리·시간), 후처리로 피사계 심도·그레인. 단어별 자막은 나레이션 구절 타이밍에 맞춰 캔버스나 DOM으로.
- 같은 연출가의 M25와 짝: 주제가 재료·과학이면 이쪽, 생각·말이면 M25.
- 스틸: `plastic_heat_explainer.jpg`, `plastic_heat_explainer_2.jpg`

### M29. 찾는 재미가 있는 아이소메트릭 디오라마 한 장 (서울 릴)
태그: #연속변형 #루프 #원작:미상 #구현:three #구현:blender필요 #재료:3D #재료:인물 #재료:캐릭터 #영상역추출 #미검증 #스타일:소프트3D #스타일:아이소메트릭디오라마 #스타일:플랫벡터 #무드:경쾌

여러 가지 내용(정책, 기능, 장소)을 하나씩 설명하지 않고, 한 장의 미니어처 세계에 전부 넣어 각자 작은 반복 동작으로 살려 둔다.

```text
Make a {30}-second vertical piece: ONE isometric miniature world of {도시·브랜드} on a {연분홍} ground, soft
clay-like 3D, short soft shadows, glow only on a few landmark buildings. Pack it with {12–20} vignettes,
each one item of the message ({정책·기능·장소 목록}): {강, 랜드마크, 시장, 공원, 탈것, 마스코트}. Dozens of
small people loop tiny actions ({달리기, 자전거, 휠체어, 연주, 춤, 사진, 휴식}).
Frame the 3D world with a FLAT 2D vector border of {형광 분홍·연두·노랑} flowers and leaves.
Camera: hold the wide view for the first 3s, then glide slowly to {3–4} vignettes one by one (2–3s each)
so each reads on a phone, and pull back out to the full view.
End card (2.5s): the world fades, the same flower border stays, a large headline "{문구}" and logos inside.
Banned: cuts, characters standing still, a 3D border, text inside the world other than signs and logos.
```

- 변수: 넣을 항목 목록, 바닥색, 테두리 모티프, 다가갈 장면, 엔드 카드 문구.
- 구현: three.js 직교 카메라 + 점토 재질 소품, 인물은 블렌더에서 반복 동작을 구워 glTF 또는 스프라이트 시퀀스로. 테두리는 캔버스 2D 벡터 오버레이. 원작은 30초 고정 카메라라 인물이 작았다. 틀에는 장면별로 다가가는 카메라를 넣었다(내 판단).
- 스틸: `seoul_diorama.jpg`

### M30. 그림 속 켜지는 물건을 박자 장치로 쓰는 일러스트 루프 (CraveFX 신호등)
태그: #루프 #원작:미상 #구현:canvas2d #재료:캐릭터 #재료:글자 #영상역추출 #미검증 #스타일:카툰일러스트 #스타일:Y2K #스타일:종이질감 #무드:하이에너지 #무드:경쾌

완성된 일러스트 한 장을 최소한의 움직임으로 영상으로 만든다. 그림 안에서 원래 켜지고 꺼지는 물건을 찾아 박자에 묶고, 클라이맥스에만 배경을 글자로 덮는다.

```text
Make a {12}-second vertical loop from ONE cartoon illustration: low-angle {신호등} with three signs, purple
buildings, blue sky. Thick black outlines, stickers all over the pole, faces on the signs, coarse print
noise. The three lights are characters ({빨강·노랑·초록 얼굴}); a light glows and changes expression only
when it is on.
Beats: a bouncy rounded headline builds word by word ("{ready,}" → "{set,}") with red then yellow lights →
on green, a giant {노랑} block-letter "{GO}" pattern floods the whole background (chunky rounded letters, two
offset shadow layers in {빨강} and {파랑}, tightly tiled) → lights blink in turn on the beat while the pattern
scrolls sideways → pattern slides out, lights go off, back to the first frame.
The illustration itself barely moves; only lights, faces, words and the background pattern animate.
Banned: animating everything, smooth gradients, a second climax, characters taken from existing games or
cartoons (draw original mascots).
```

- 변수: 그림 속 박자 장치(신호등·전광판·네온사인·엘리베이터 숫자), 구호 세 단어, 클라이맥스 글자, 색.
- 구현: 캔버스 2D. 일러스트를 레이어로 나누고(직접 그리거나 이미지 생성으로 레이어별로) 불 밝기·표정 교체를 박자에 묶는다. 글자 패턴은 격자 반복 + 오프셋 그림자 층 + 스크롤, 종이 노이즈 multiply.
- 스틸: `crave_traffic_light.jpg`

### M31. 고정된 표지 틀 + 사진 한 장 + 박자마다 바뀌는 셰이더 필터 (Figma Shader 탐구)
태그: #빠른편집 #루프 #원작:미상 #구현:webgl #재료:사진 #재료:도형 #영상역추출 #미검증 #스타일:에디토리얼일러스트 #스타일:인쇄물망점 #스타일:미니멀클린 #무드:차분

```text
Make an {8}-second 4:5 loop styled as a magazine cover. The cover frame never moves: {연분홍} ground, italic
serif title "{제목}" top-left with a small {보라} subtitle, tiny labels in the four corners ({호수, 연도}),
{한자 네 글자} bottom centre, one {초록} tag.
In the centre, ONE photo inside a soft geometric mask. {4} photos ({계절 사진 네 장}), 2s each; the mask shape
changes with each photo ({네 잎 꽃 → 둥근 십자 → 물방울 네 개 → 반원 별}) and tilts slightly.
While a photo holds, swap a shader treatment every {0.25}s: diagonal refraction stripes, coarse halftone,
duotone halftone, black-and-white, swirl, pixel mosaic, two-colour posterise, thermal colour ramp, line
halftone, rough paper grain; land back on the original colour before the next photo.
Banned: moving the cover frame, more than one photo at a time, crossfades between treatments (hard swaps
on the beat), treatments that are just colour tints.
```

- 변수: 표지 문구, 사진 목록, 도형 마스크, 필터 목록과 교체 간격(박자에 맞춰), 길이.
- 구현: WebGL 셰이더 하나에 효과 모드 여러 개 + 시간으로 모드 선택, SDF 도형 마스크, 표지 글자는 오버레이. 원작은 게시글 제목상 Figma Shader 등 셰이더 도구.
- 스틸: `figma_shader_cover.jpg`

### M32. 로딩 고리가 그러데이션 꽃으로 피는 루프 (꽃잎 로더)
태그: #루프 #원작:미상 #구현:canvas2d #재료:도형 #영상역추출 #미검증 #스타일:파스텔 #스타일:추상셰이더 #무드:몽환

```text
Make a {12}-second seamless loop on a warm {회색} ground: ONE ring of {16} petals, nothing else. Start as thin
loader dashes; they swell into plump teardrop petals, the ring grows and slowly rotates, petals overlap and
swap depth order, then thin back down to the dashes so the last frame equals the first.
Every petal has its own colour ({자홍, 갈색, 연보라, 초록, 파랑, 겨자, 분홍}) and a 2–3 colour internal gradient;
some petal tips fade out as if lit from within.
Banned: shadows, texture, text, a second shape, colours that repeat on neighbouring petals.
```

- 변수: 꽃잎 수, 색 목록, 바탕색, 길이, 출발 모양(로딩 막대·점·선).
- 구현: 캔버스 2D. 캡슐 경로의 두께·길이를 시간 함수로, 선형 그러데이션 + 끝 알파, 각도 정렬로 겹침 순서. 앱 로딩 화면이나 다른 틀의 전환 구간으로 섞기 좋다.
- 스틸: `petal_ring_loop.jpg`

### M33. 화각 자체를 애니메이션하는 평면 ↔ 입체 방 (Room perspective)
태그: #연속변형 #루프 #원작:Blender #구현:three #재료:3D #영상역추출 #미검증 #스타일:플랫벡터 #스타일:소프트3D #무드:경쾌

```text
Make a {6}-second seamless vertical loop of ONE small furnished {방} floating on a flat {파랑} ground.
Animate only the camera's field of view and distance, never the furniture: start nearly orthographic
(the room reads as a flat front-view drawing), widen to an extreme wide angle so the floor flips to a
diamond and ceiling panels shoot towards the lens, return to flat, then drop to floor height looking up
with an ultra-wide lens, shrink back to the flat drawing. Dolly-zoom compensation keeps the room's size
on screen roughly steady. Flat colour planes with soft gradients, faint white perspective guide lines,
a tiny label "{02 PERSPECTIVE VIEW}" at the top.
Banned: moving or animating the furniture, realistic textures, cuts, a second room.
```

- 변수: 공간(방, 상점, 무대), 색, 화각 범위와 순서, 길이.
- 구현: three.js. fov 5°↔120° 보간 + 카메라 거리 보정(dolly zoom), 박스 가구 + 그러데이션 재질. 원작은 Blender.
- 스틸: `room_perspective.jpg`

### M34. 소품 하나에 절차 규칙 하나, 계절 앨범 (Summer, Cavalry 추정)
태그: #빠른편집 #원작:Cavalry #구현:canvas2d #재료:도형 #재료:사진 #재료:글자 #영상역추출 #미검증 #스타일:콜라주 #스타일:플랫벡터 #무드:경쾌 #무드:향수

```text
Make a {21}-second vertical piece at {12fps} about the end of {여름}: {5} scenes, 3–5s each, each on ONE flat
background colour, each = ONE seasonal object + ONE procedural rule:
{그물 주머니에 무늬 공이 떨어져 쌓이고 그물이 늘어남(쌓기)} / {라켓 두 개가 공을 주고받고 궤적이 손그림 선으로
남아 엉킴(궤적)} / {작은 단어들이 물고기 떼 모양으로 헤엄, 한 단어만 다른 색(분포)} / {옛 엽서 글자 안에
해변 사진, 글자 조각 색이 바뀜} / {스티커 원 수십 개가 반원 덮개를 열고 닫으며 뒤집힘(반복)}.
Objects use real photo textures cut out; everything else is flat.
Banned: more than one rule per scene, smooth 60fps motion, text explaining the scene, a shared background
colour between consecutive scenes.
```

- 변수: 계절·주제, 소품 목록과 소품마다의 규칙(쌓기·궤적·분포·뒤집기·복제), 장면 색.
- 구현: 캔버스 2D(원 충돌 쌓기, 궤적 누적 선, 모양 안 점 분포 + 흐름 노이즈, scaleY 뒤집기), 12fps 계단. 원작은 Cavalry로 추정(사용자 확인은 아님).
- 스틸: `summer_cavalry.jpg`

### M35. 두 색 면이 쪼개지며 글자를 드러내는 방송 패키지 (팟캐스트 패키지)
태그: #빠른편집 #원작:AE #구현:canvas2d #재료:도형 #재료:글자 #영상역추출 #미검증 #스타일:포스터타이포 #스타일:스위스타이포 #무드:하이에너지

한 가지 규칙으로 오프닝, 전환, 하단 자막, 엔드 카드를 모두 만든다.

```text
Make a broadcast package for the show "{쇼 이름}" in two colours only: {빨강} and {미색}, plus black type.
ONE rule everywhere: the frame is a grid of rectangular blocks that split, slide past each other with
staggered delays and reveal type between them.
Deliver: (1) {4}s opener — cream plate breaks into blocks, red floods in, blocks shear up/down and leave
the logo in a heavy condensed sans; (2) {2}s initials sting — two giant letters built from diagonal
red/cream slabs that ARE the background; (3) {1}s transition — the screen splits into two bands sliding
opposite ways with a small hourglass gap that opens and closes; (4) lower third — a cream bar grows
sideways and the name pops in word by word; (5) end card.
Banned: a third colour, gradients, fades, any element that does not follow the block rule.
```

- 변수: 쇼 이름·이니셜, 두 색, 블록 격자 크기, 각 납품물 길이.
- 구현: 캔버스 2D. 블록 격자 + 블록별 지연 슬라이드, 글자 마스크. 매개변수만 바꿔 납품물 다섯 개를 한 함수로 뽑는다. 원작은 AE.
- 스틸: `podcast_package.jpg`

### M36. 가사 단어를 실물 오브젝트로 번역하는 키네틱 타이포 (HEADLOCK)
태그: #빠른편집 #원작:미상 #구현:canvas2d #구현:three #구현:배경제거필요 #재료:글자 #재료:사진 #재료:3D #영상역추출 #미검증 #스타일:포스터타이포 #스타일:콜라주 #스타일:미니멀클린 #무드:하이에너지

```text
Make a {12}-second kinetic-type piece for {곡의 한 구간} on ONE flat {연회색} ground that never changes, with
tiny centred labels top and bottom ({작가명}, {영문 번역 한 줄}).
Translate the lyric into OBJECTS rather than subtitles: for each key word pick one real cut-out photo
object that belongs to the song's world ({도시·생활 소품 목록}). One object per beat (0.2–0.5s): pop it in,
tilt it in perspective, push into a macro crop until it fills the frame, or put a sticker-like word on it.
Type appears only as fragments: one or two huge {한글} glyphs cropped by the frame edge, mixed with
{교통 표지판·경고 표지} cut-outs; a clock face whose numerals are replaced by syllables; one brush-written
character on a scrap of paper; tiny English translations overlapping. Accents: {빨강}, {파랑}.
End: a pile of floating objects with two giant words slammed over them, then credits and a fan-made notice.
Banned: full lyric subtitles, a coloured or textured background, more than one object on screen at a time
(except the ending pile), objects with their original backgrounds.
```

- 변수: 곡과 구간, 단어 → 물건 목록(먼저 표로 짠다), 바탕색, 포인트 색, 마지막 두 단어.
- 구현: 캔버스 2D(오린 PNG 등장·원근·접사 줌, 잘리는 거대 글자, 표지판 컷아웃). 배경 제거 모델이 필요하다. 가사를 화면에 그대로 옮기지 않으므로 저작권 있는 가사 노출도 줄어든다.
- 스틸: `headlock_object_type.jpg`

### M37. 나레이션 구절마다 글자 하나가 무대가 되는 단일 재료 이야기 영상 (凍った手記)
태그: #서사설명 #원작:코드 #구현:three #구현:canvas2d #재료:글자 #영상역추출 #미검증 #스타일:미니멀클린 #스타일:필름질감 #스타일:종이질감 #무드:긴장 #무드:차분

이야기를 먼저 쓰고, 목소리를 먼저 만들고, 화면은 그 구절의 글자만으로 짓는다. 바깥 재료를 쓰지 않는다.

```text
First write a short {장르} story of {60–90}s narration ("{제목}"), then generate the voice with TTS and measure
each phrase boundary. Only then build the picture, one screen per phrase, in ONE material: {흑백} ground and
{세로쓰기 명조} type. No photos, no illustrations, no icons.
For each phrase, let one word become the stage: draw its character huge and act on it (crossed out, split
by a window grid, replaced by empty boxes for an unreadable name, a dotted line for footprints). A running
element pushes the story ({날짜가 쌓이다 달력에 없는 날짜가 됨}). Small apparatus only: hairline crosshairs and
ticks, a thin audio-like bar on the left, tiny marginal notes. Transitions: blur, overlap, a white bloom.
Holds 2–5s; every change lands on a phrase boundary of the voice. One accent colour used once at the very
end. Close on a colophon page.
Wind and knock sounds synthesised in code under the voice.
Banned: imported photos or illustrations, more than one typeface family, decorative motion that is not
tied to a phrase, changes that ignore the voice timing.
```

- 변수: 이야기, 화면 글자 체계(세로·가로, 명조·고딕), 이야기를 미는 반복 요소(날짜·숫자·횟수), 포인트 색, 소리.
- 구현: 캔버스 2D 조판 + 셰이더 후처리(흐림·노이즈·비네트·그레인). TTS 문장 단위 생성 → `silencedetect`로 구절 경계 → 큐 시트. 원작은 Opus 5.5가 HTML/Three.js로 만들었다.
- 이 틀은 "오려 붙인 느낌"이 나지 않는 이유를 보여 준다: 모든 층이 같은 재료·같은 빛·같은 질감에서 태어났다. workflow.md "합성 일체감" 참고.
- 스틸: `frozen_note_type.jpg`, `frozen_note_timing.jpg`

### M38–M42. 코퍼스 2차 갱신에서 뽑은 틀 (2026-10-21)

2026-10-21에 저장소 데이터를 다시 받아 새로 들어온 258개(모션 142·3D 64·설명 52)를 읽고 뽑았다. 프롬프트 글에서 정리한 것이라 영상은 보지 않았다. 전문은 slug로 `corpus/*.md`를 Grep 한다(`[신규]` 표시).

### M38. 한 선이 세 가지 잉크로 승격되는 쇼릴 (연필 → 청사진 → 홀로그램)
태그: #연속변형 #루프 #원작:코드 #구현:canvas2d #재료:도형 #재료:글자 #코퍼스 #미검증 #스타일:손그림 #스타일:기술도해 #스타일:네온 #무드:경쾌

원본: heyiamnick-119558. 연필선 하나가 종이 위 흑연 → 청사진 위 흰 철사 → 검정 위 빛으로 세 번 승격되며 끝까지 화면을 떠나지 않는다. 같은 도형을 "지금 화면의 잉크"로 그린다.

```text
Make a {30}-second loop that introduces {이름}. One line never leaves the screen and is promoted three times:
graphite on paper, white wire on a blueprint, light on black. Every shot is made out of the previous one.
Define three inks and draw the SAME geometry in whichever ink is on screen: PAPER (cream, faint blue grid,
wobbly double-stroked pencil, hatching fills), BLUEPRINT (flat blue, white 3–4px lines, dashed hidden edges),
HOLOGRAM (black, cyan lines with a white core, scan-line fills, no blur halo). Each stage's accent is the next
stage's colour. Camera locked front-on like a drafting table; objects turn, the camera never moves.
Bars at {120} BPM, something on every beat: type pressed flat by the line → rails clip words → pen handles bend
it into curves → circle/triangle/square/hexagon → honeycomb → cubes → gears → a cube unfolds into a UI →
chart → ... → back to frame one. Two corner labels track bar name and beat number.
Easing: critically damped spring 1-(1+wt)e^(-wt), w 12–40, nothing overshoots.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy
easing, holds over 0.5s.
```

- 변수: 이름, 세 잉크(재료 단계), 바별 변형 사슬, 마스코트 유무.
- 구현: 캔버스 2D. 연필선은 재표본화 + 느린 사인 흔들림(초당 8회 위상 변경) + 두 번 긋기 + 종이 결 지우기.
- M10(도형 연쇄)의 확장판. 장면 전환이 잉크 교체라 컷 없이 세계가 바뀐다.

### M39. 워드마크의 마침표 안에서 벌어지는 원테이크 런치
태그: #연속변형 #루프 #원작:코드 #구현:canvas2d #재료:UI #재료:사진 #재료:글자 #코퍼스 #미검증 #스타일:유리크롬 #스타일:SaaS-UI #무드:경쾌

원본: twoclipping-747965(nightshift). 영상 전체가 제품 워드마크의 "." 안에서 일어난다. 마침표 밖은 낮 사진, 안은 밤 사진 위 유리 패널.

```text
A {24}-second square one-take loop for {제품}. The whole film happens inside the period of the wordmark: letters
slide into the period, it glides to centre and opens like an iris onto {안쪽 세계 사진}. Inside, ONE element morphs
through every state from a table of beat times: pill → input → dot that ripples into a grid of results →
composer → orb with progress ring (a clock chip swaps hours while the sky relights) → goo-split into result
pills → merge into a phone lock screen → calendar/chart proof → black flood into a CTA → shrink back into a dot,
the iris closes, letters slide out. Glass = pre-blurred photo clipped to the shape + tint + gradient rim.
Banned: zooming the camera into a tiny point, hard cuts, crossfades, bouncy springs, particles, holds over 1s.
```

- 구현 함정: 화면 밖 점으로 카메라를 줌하지 말고 점을 "연다"(원형 마스크로 안쪽 세계를 보여 줌). 아이리스는 반지름이 아니라 **면적**으로 이징. globalAlpha를 바꾸는 함수는 원래 값을 복원. 카운터는 서브프레임이 아니라 프레임 시간으로 읽기.

### M40. 아카이브 실물 + 유일하게 채색된 히어로 오브젝트 브랜드 필름
태그: #서사설명 #원작:코드 #구현:three #구현:canvas2d #재료:영상 #재료:3D #재료:글자 #코퍼스 #미검증 #스타일:필름질감 #스타일:시네마틱 #무드:긴장 #무드:향수

원본: notdwd-998633. 제품 화면·가짜 UI·스톡 영상 없이, 공공 아카이브 영상(브라운관 TV 안)과 실제 옛 웹 페이지로 "예전 방식"을 보여 주고, 단 하나의 3D 오브젝트(로고가 새겨진 버튼)만 채색해 영화 전체의 기억점으로 만든다.

```text
A ~{55}s brand film that sells one feeling and one idea, never features. Everything is white, silver, cream and
archival black EXCEPT one hero object: {로고가 새겨진 3D 버튼}, the only saturated colour. Cold open: a public-domain
archival clip plays on a glowing old CRT with its real dialogue → push into a real archived web page from ~2000 →
a galaxy of real old posts; one snaps to an outline chip that teaches one coined word "{단어}" → archival of people
doing it by hand ("door by door...") → the hero object rises from black, rim light first, colourless; hard cut to
macro as its colour comes alive exactly on the music drop → counters and curves, platform strikes → tagline word
by word, brand at the very end, logo + URL in silence. Captions: <=7 words, grey→white on the narrator's word
timestamps. Film finish on every frame: fresh grain, halation, vignette, 1px edge-clamped chroma fringe.
Banned: stock footage, dashboards, chat UIs, feature tours, the accent colour anywhere but the hero object.
```

- 구현: three.js MeshPhysicalMaterial(clearcoat), 로고 엠보스는 흐린 로고 마스크로 원판 변위. 헤드리스 WebGL은 Chromium `--use-angle=swiftshader`. 필름 마감은 numpy 후처리.
- "오려 붙인 느낌" 대처 예시: 아카이브 영상을 화면에 띄우지 않고 세계 안의 물건(브라운관 TV) 속에서 튼다.

### M41. 실사 영상을 입자로 다시 짓는 비트 편집 (깊이 + 주체 마스크)
태그: #빠른편집 #원작:코드 #구현:three #구현:canvas2d #구현:배경제거필요 #재료:영상 #재료:인물 #재료:도형 #코퍼스 #미검증 #스타일:추상셰이더 #스타일:VJ #무드:하이에너지

원본: pluvio9yte-662953(제작 방법 공개). 실사를 그대로 붙이지 않고 프레임마다 색·깊이·주체 마스크를 뽑아 점·네모·글자·선으로 다시 그린다. 원본 영상과 그래픽이 같은 재료가 되므로 오려 붙인 느낌이 생기지 않는다.

```text
Rebuild {영상} as particles on a {BPM} grid. Source rules: the subject is whole in frame, background clean, with
clear action moments (hit, jump, land, turn). Per frame extract colour, depth (a depth-estimation model) and
subject mask, stabilised within each shot. Choose a particle ({점, 네모, 글자, 선}) and define {4–6} styles, each a
combination of: where (whole frame / subject only), size (fixed / by luminance / by depth), colour (source /
one or two flat colours), plus a switch for flat vs pushed into 3D by depth (so the camera can orbit).
Timeline table per grid cell: style, palette, camera. Open on the real footage then transition into particles;
alternate fast and slow; clash neighbouring styles and colours; end by growing particles into flat blocks or
returning to the footage. Impact feedback in tiers: light every hit (particles deform, camera nudge), medium on
stronger hits (a part of the particles pops toward camera), heavy once or twice (time freeze + orbit). Keep
feedback weak and short so the subject stays readable.
Banned: unstabilised depth/mask flicker, all particles reacting at once, styles that differ only in colour.
```

- 구현: 깊이 추정(Depth Anything 계열)·배경 제거 모델로 전처리 → 캔버스 2D(평면) 또는 three.js 인스턴스(깊이로 밀어낸 3D). 밀도 같은 애매한 매개변수는 5~6단계를 나란히 렌더해 고른다.

### M42. 실제 클립을 디자인 물건 안에서 트는 포스터 런치 트레일러
태그: #빠른편집 #루프 #원작:코드 #구현:canvas2d #재료:영상 #재료:사진 #재료:글자 #코퍼스 #미검증 #스타일:포스터타이포 #스타일:콜라주 #스타일:필름질감 #무드:하이에너지

원본: twoclipping-551116(castr). 실제 클립·사진을 쓰되 원판·폰·폴라로이드·티켓 같은 디자인 물건 안에서만 재생한다. 흑백으로 틀다가 선택되는 순간 색이 돌아온다.

```text
A {25}-second square launch trailer, loud poster style: {코발트, 잉크, 크림, 분홍, 탠저린}, extra-condensed caps for
names, expanded for headlines, op-art sunburst, scrolling waves, film grain. Real media only, always inside a
designed object: clips play in a big disc, a phone, a polaroid; stickers get a white die-cut border and soft shadow.
Motion rules: the camera never stops (slow 1.03–1.07 push on every scene), nothing pops in (letters rise through
a mask line), nothing snaps to the beat (patterns rotate continuously), swaps are ~0.55s carousel glides, colour
changes fade ~0.35s, stickers ease in then keep a slow sway.
Story: {disc + wordmark → 3D box faces with headlines on the drop → a typed ticket + NOW CASTING stamp → a casting
carousel where each clip plays in B&W in a disc, a MATCH % counts up, a stamp lands and the clip turns colour →
disc morphs into a phone that fans into 4 phones → waitlist ticket tears → poster arch with info bar → folds back
into the opening disc}.
Banned: beat-snapped rotations, pop-in slams, white flashes, crossfades, hard cuts.
```

- 구현 함정: 박자마다 한 칸씩 도는 무늬는 끊겨 보인다 → 연속 회전, 마지막 프레임에 같은 무늬가 오게 속도 선택. 빠른 휩은 서브프레임 4장으로는 잔상이 남으니 8장. 원판이 폰으로 변할 때는 떠나는 장면과 **같은 카메라 변환 안에서** 변형해야 튀지 않는다. 스티커 흰 테두리는 이 틀처럼 "스티커 세계관"일 때만 쓴다(workflow.md 합성 일체감).

### M43. 브랜드 한 색 키네틱 가사 → 제품의 실제 화면 → 팔레트 공개 (음악 앱 콘셉트)
태그: #빠른편집 #원작:AE #구현:canvas2d #구현:three #재료:글자 #재료:UI #영상역추출 #미검증 #스타일:키네틱타이포 #스타일:SaaS-UI #스타일:미니멀클린 #무드:하이에너지

```text
Make an {11}-second vertical brand concept for {앱·브랜드} in its {3} brand colours only ({초록, 검정, 흰색}).
Beat 1 (0–4s): {가사·카피 한 소절}, one word per beat in a heavy sans on black; every transition is different —
the next word pushes the last one up, a word rolls 90° like a cube face, letter widths stretch into the next
word — and the final word melts down into the brand mark.
Beat 2: the mark opens into the product's own {가사 화면} card; lines scroll with the current line bold white and
the next one dim; for one moment a line flows along the card's curved edge.
Beat 3: the product's {재생 목록} screen tilts back in 3D, brand-colour light blooms from below and a giant word
rises in a vertically stretched cut.
Beat 4: a short slogan, one word per beat, each flipping weight (variable font) and background (black ↔ brand).
Beat 5: the brand palette swatches with name labels wipe across each other; the last colour holds and a final
word warps like a wave.
Banned: a fourth colour, the same word transition twice, generic UI instead of the product's real screens, song
lyrics you have no right to use (write your own copy or use licensed lyrics).
```

- 변수: 브랜드와 색 3개, 카피(직접 쓴 문구 또는 권리 있는 가사), 제품 화면 2개, 구호, 마지막 단어.
- 구현: 캔버스 2D(단어 전환 다섯 가지, 가변 폰트, 곡선 글자) + three.js 또는 원근 변환(정육면체 굴림, 눕는 화면). 실제 브랜드 자산은 공개 가이드·사용 조건 안에서.
- 스틸: `spotify_concept_type.jpg`

### M44. 선화로 먼저 보여 주고 채색으로 다시 터뜨리는 두 색 가사 MV (Wireframe WIP)
태그: #빠른편집 #원작:AE #구현:canvas2d #구현:이미지생성 #재료:캐릭터 #재료:글자 #재료:도형 #영상역추출 #미검증 #스타일:캐릭터애니 #스타일:플랫벡터 #스타일:키네틱타이포 #무드:경쾌 #무드:하이에너지

```text
Make a {30}-second lyric MV for {곡의 한 구간} starring an ORIGINAL character ({캐릭터 설정}). Two versions of each
key illustration: clean black line art and full colour.
Structure: open in line art on cream with one or two huge serif kanji/hangul glyphs → the same composition
returns in full colour → colour sections, each locked to ONE two-colour set plus white ({청록+자홍 → 노랑+하늘 →
검정+흰+청록 → 금색+미색}): flat ground, cloud-shaped masses, vertical rain streaks. Reuse the same layout in a
different colour set when the chorus repeats (e.g. a reaching hand + two plush mascots + a block-letter line).
Motifs hold the lyrics: a ringed planet with vertical text inside, a spiky star badge, an eye, hearts and stars
popping on the beat; one word at a time fills the frame as cropped block letters, the rest is small vertical text.
Devices change every 2–3s: radial speed lines, a crowd of glow-stick silhouettes along the bottom, round badge
frames of character faces. Climax: a black-and-white checker spiral tunnel → white flash → the full-colour hero
illustration, slow push, hair and props moving slightly.
Banned: more than two colours plus white in a section, existing characters, full lyric subtitles at the bottom,
the same device twice in a row.
```

- 변수: 곡과 구간, 캐릭터(새로 디자인), 구간별 두 색 세트, 모티프 목록, 반복할 구도.
- 구현: 캔버스 2D(레이어 일러스트 + 카메라 밀기, 벡터 모티프, 세로쓰기), 셰이더(체크 소용돌이). 일러스트는 선화·채색 두 판을 레이어 분리해 준비. 가사는 권리 있는 것만.
- 스틸: `wireframe_mv_A.jpg`, `wireframe_mv_B.jpg`

### M45. 가사 한 줄마다 글자로 만든 소품 하나, 앞 장면의 모양이 다음 장면의 일부가 되는 키네틱 타이포 (seven 「Actor」)
태그: #빠른편집 #원작:미상 #구현:canvas2d #구현:three #재료:글자 #재료:도형 #영상역추출 #미검증 #스타일:키네틱타이포 #스타일:포스터타이포 #스타일:플랫벡터 #스타일:종이질감 #무드:경쾌 #무드:하이에너지

영상 소재 없이 글자·평면 도형·아이콘 몇 개로만 만든다. 가사 한 줄마다 그 줄을 위한 소품을 하나씩 설계하고, 장면이 바뀔 때 앞 장면의 모양이 다음 장면의 일부가 된다.

```text
Make a {25}-second kinetic-typography piece for {곡의 한 구간} with NO footage: only type, flat shapes and a few
hand-drawn icons ({아이콘 목록}), plus at most ONE 3D object ({3D 소품, 예: 광택 왕관}).
Palette: {군청 #3c35dc} and {미색 #efede0} take turns as the ground; {주황}, {분홍}, {노랑} come in as accents, one
per section. Every ground carries a quiet same-hue pattern ({타원 격자 / 물결 원 격자 / 체크 / 방사형 폭발}).
For EVERY lyric line design its own prop built from type: {줄 → 소품 표, 예: "don't stay / play safe" → a
signpost of three type-plates; "why you praising me" → a grid of thumbs-up coins flipping in 3D under an
arched serif line; "I'm no god" → a frame-wide condensed headline with a crown dropping on it; "praying for me"
→ extruded type on a vinyl record; "time over" → the line repeated five times on a starburst, centre one bold}.
Each line enters in a DIFFERENT way, never the same twice in a row: variable-weight sweep (thin → black, letter
by letter over 6 frames), block masks (a dark box per letter first, then the letter wipes in inside it, 2–3
frames later per line), Hangul jamo pieces flying together, hand-written write-on, typewriter with caret,
a paper plane dragging the text along a path.
Joins: prefer MATCH CUTS — the last shape of a scene becomes part of the next (a title plate shrinks into the
top board of the signpost; an orange panel narrows into the T of the logo). Otherwise a 2-frame radial burst
or a hard cut on the beat.
Every screen = one big type mass + two or three tiny labels (a translation in an ellipse badge at the bottom
centre, a vertical line of text at each side, a tiny logo top right).
Scenes live 0.6–1.5 s: letters keep arriving through the scene, hold 0.3–0.5 s, then cut.
Open and close on the same logo ({곡 제목}): paper grain + heavy vignette, focus pull in; at the end the logo
returns with a script overlay and {끝 소품}, white flash, black.
Banned: footage or photos, more than three colours in one scene, the same entrance twice in a row, a plain
unpatterned ground, text with outlines or drop shadows used for legibility, subtitles at the bottom.
```

- 변수: 곡과 구간, 줄 → 소품 표(먼저 표로 짠다), 줄 → 등장 방식 표, 구간별 색 쌍, 바탕 무늬 목록, 3D 소품 하나, 여닫는 로고.
- 수치(이 영상에서 읽은 것): 25초에 장면 약 20개, 장면 수명 0.6–1.5초, 글자 등장 간격 약 2프레임(24fps), 줄 사이 지연 2–3프레임, 매치 컷 한 번에 약 0.85초, 굵기 훑기 6프레임, 버티기 0.3–0.5초.
- 구현: 캔버스 2D(가변 폰트 굵기 보간, 글자 너비 블록 마스크, 원호 위 글자, 동전 뒤집기 = 가로 배율 cos, 대각선 밀어 찍기 두께, 벡터 무늬, 직접 그린 아이콘 경로). 손글씨는 획 경로를 따로 만들어 `setLineDash`로 드러낸다. 한글 자모 조각은 그린 글자를 연결 영역별로 잘라 움직인다. 3D 소품은 three.js 또는 블렌더 렌더 시퀀스.
- 실사 소재가 있는 작업에 쓸 때(예: 아이돌 MV 팬 영상): 이 틀의 "줄마다 소품 하나 + 매치 컷 + 2–3색 + 잔무늬" 규칙을 지키고, 인물은 소품의 일부(표지판에 붙은 사진, 동전 앞면, 레코드 라벨)로 넣는다. 인물이 화면을 채우는 장면은 구간당 한 번 정도로 아낀다(내 해석, 미검증).
- 스틸: `actor_kinetic_frames.jpg`, `actor_kinetic_transitions.jpg`

## 설명 영상

### E1. 자율 제작 60초 설명 영상
태그: #서사설명 #원작:코드 #구현:canvas2d #재료:캐릭터 #재료:글자 #코퍼스 #미검증 #스타일:동화일러스트 #무드:경쾌

가장 완성도 높은 설명 영상 브리프. 자리를 비울 테니 끝까지 혼자 하라는 틀.

```text
Make a {60}-second fully animated explainer, end to end, on your own. Work autonomously; don't stop
to ask; tell me what you decided at the end.
Topic: {주제}
Style: {whimsical storybook}. Give {주인공} a personality. Code-rendered frame by frame, no AI video
generators: crisp, a coherent design system, one strong formal idea per scene.
Make it genuinely educational and accurate. Simulate the real thing where you can ({the random walk
is an actual random walk}). Include real numbers and be honest about uncertainty. Use humor and
visual gags: onomatopoeia, little characters, callbacks.
Deliver {1920x1080 60fps}, exactly {60}s: your own voiceover script + best available TTS,
burned-in captions (most watch muted), an original score that changes per scene, sound design synced
to every on-screen action, a mix where music ducks under the voice at streaming loudness.
Build verification loops: render stills of every scene and review critically, check transitions
frame by frame, measure the audio mix numerically. Don't hand me a first draft. Include source.
```

- 원본: astrothewizard-618782

### E2. 사업 설명 5장면
태그: #서사설명 #원작:코드 #구현:dom #재료:글자 #코퍼스 #미검증 #스타일:SaaS-UI #무드:차분

```text
Adopt the role of an expert motion designer. Build a 30-second animated explainer for my business
as a single HTML page. 5 scenes: the customer's problem, what I do, how it works in 3 steps,
one proof point, and my name at the end. Bold text, smooth transitions, my brand colours.
My business: {무엇을, 누구에게, 색}
```

- 사용자 플로를 문장으로 나열하는 버전: charlesmendez-476517. 원본: alex-prompter-997524

### E3. 개념 설명 (스타일 지정형)
태그: #서사설명 #원작:코드 #구현:자유 #코퍼스 #미검증 #스타일:자유

주제 + 표현 양식 하나.

- 손그림 화이트보드: "{개념}을 설명하는 빠른 손그림 화이트보드 애니메이션" → 후속 "나레이션 넣은 mp4로" (tak3sh8-441895)
- 렌더러 친화: "{개념}을 설명해라. canvas만, 라이브러리 없이, 모든 프레임이 시간의 순수 함수" (parkerrex-701462)
- 자기 지시적: "재귀를 설명하는데, 설명마다 영상 스타일이 완전히 달라지게" (emollick-019567)
- 레시피: "빈 잔에서 완성된 칵테일까지, 재료와 계량이 잔에 들어갈 때 표시, 30초" (ror-fly-880547)
- 연표: 연도가 스프링으로 내리꽂히고 사건을 선화 SVG로 덧그림. "역사물의 기세는 정보량이 아니라 장면을 내리꽂는 간격으로 정해진다" (rpa-dake-593915)
- 손그림 콜라주로 About 페이지 이야기 (tomandrieu96707-875264), 스톱모션 1인칭 (nikolajankovic-616097)
- Manim + edge-tts 수학 강의 (linearuncle-971663)

- 2026-10-21 추가(nft-chen-068069, 중국어): 10~12초 개념 설명 한 줄 스타일 15종 — 컬러 그림자극, 등각 2.5D 공정 흐름, 실제 반지름 비교 줌아웃, 화이트보드 손그림, 한자 형태 진화(갑골→청동→먹→현대), three.js 분해도, 16비트 픽셀 고사, 크레용 그림책, 3Blue1Brown식 원 넓이, 옛 지도 경로, Kurzgesagt식 큰 숫자, 무외곽선 플랫, 120BPM 단어 쿵, 흑백 망점 만화 칸 + 빨강 하나, 횡축 연표.

### E4. 인피니트 줌
태그: #연속변형 #루프 #원작:코드 #구현:canvas2d #구현:이미지생성 #재료:사진 #코퍼스 #미검증 #스타일:실사사진 #무드:몽환

오브제를 통과해 풍경에서 풍경으로. 루프.

- 핵심 수학: 고정점으로의 지수 줌, 구간 길이는 log(zoom)에 비례 → 일정한 체감 속도. 깊이 맵으로 3레이어 분리, 패럴랙스 `layer scale = camera^Z` (Z 0.45–1.22). 포털의 유리가 다음 세계를 담고, 화면을 채우는 순간 컷.
- 비용이 드는 생성 전에 목록과 크레딧 비용을 보여주고 승인받는다.
- 원본: koldo2k-778767

### E5. 스케일 여행 (한 숏 줌인/줌아웃)
태그: #연속변형 #원작:코드 #구현:canvas2d #구현:three #코퍼스 #미검증 #스타일:자유 #무드:차분

"책상에서 시작해 CPU 안의 원자 하나까지 멈추지 않고 줌인." 컷 없음, 화면 옆 눈금자가 스케일을 계속 표시(1m → 2nm). 반대 방향: 언덕에서 관측 가능한 우주까지.

- 원본: acoramaa-053577, irinatoxi-962937, kgonia7-746268, ai-ba-reza-113363(3D 쪽)

### E6. 분해 가능한 인터랙티브 랩
태그: #인터랙티브 #원작:코드 #구현:three #재료:3D #코퍼스 #미검증 #스타일:기술도해 #무드:차분

"{X}가 어떻게 작동하는지, 브라우저에서 분해할 수 있는 것을 만들어 설명해라." 잘라 열기, 유체 경로 따라가기, 스로틀 조작, 시간 1/10로 늦추기.

- 원본: konstantinsaifo-501736(로켓 엔진), konstantinsaifo-587629(핵융합로), stefanostraus-971191(엔진), voxyz-ai-345550(블랙홀 중력렌즈 + 3회전 검수)

### E7. 팟캐스트·토킹헤드 삽입 그래픽
태그: #서사설명 #원작:코드 #구현:dom #재료:영상 #코퍼스 #미검증 #스타일:SaaS-UI

편집본 전체를 훑어 35–50개 순간에 풀스크린 애니메이션 삽입. 먼저 공용 스타일 바이블과 컴포넌트 킷을 써서 전부 같은 쇼처럼 보이게. 규칙: 풀스크린일 때 화자 PiP, 카피는 말한 그대로, 그래픽의 비트를 말에 동기화, 그래픽 하나는 끊기지 않은 오디오 구간 안에.

- 원본: stokebuilder-356793

### E8. 제품 설명 영상 자동 파이프라인
태그: #서사설명 #원작:코드 #구현:dom #재료:UI #코퍼스 #미검증 #스타일:SaaS-UI

브라우저로 제품에 접속 → 기능 명세 작성(기능·가격·쓰면 안 되는 표현) → 화면 스크린샷 38장(PC·모바일·부분) → 콘티와 나레이션 원고 → Remotion 구현 → 스틸 보고 글자 잘림·겹침 수정 → TTS → 음성을 32구절로 분해해 동기화 → BGM 합성과 덕킹.

- 원본: tetsu-tetsu333-576886

### E9. 증명·원리를 기계 장치로 연출하는 설명 루프
태그: #서사설명 #루프 #원작:코드 #구현:canvas2d #재료:도형 #재료:글자 #코퍼스 #미검증 #스타일:기술도해 #스타일:미니멀클린 #무드:차분

원본: gdgtify-393073(소수는 끝이 없다), 같은 작가의 gdgtify-130294·gdgtify-989608도 같은 방법. 문장을 정확한 순서로 고정하고, 화면의 모든 기계 동작이 논리의 한 단계에 대응한다. 장식이 아니라 장치가 증명한다.

```text
Stage {증명·원리} as a precise mechanical inspection system in a {20}s 1080×1080 loop. Locked copy, exact order:
{문장 5–6개}. One worked example with real numbers ({예시}). Every mechanical action corresponds to one operation
in the argument: {유한한 목록 = 끝막이가 닫힌 랙, 곱하기 = 벨트로 묶인 바퀴, 1 더하기 = 주황 단위 하나가 출력을
밀어 올림, 나머지 검사 = 라벨 붙은 분할 게이트, 모순 = 새 인자 카드가 끝막이를 밀어냄}. State what the argument
does NOT claim. Rolling numerals only while moving; settle values sharply. Palette of 4 ({자기, 흑연, 녹색, 경고
주황}), tabular monospace for numbers, heavy grotesque for declarations, small serif for the final statement.
Loop by sliding a fresh plate whose edge becomes the opening end-stop.
Banned: decorative motion not tied to a step, a narrated explanation with illustrations on top, invented data.
```

- 변수: 증명·원리, 문장, 예시 수치, 단계 → 장치 대응표(먼저 표로 짠다).
- 같은 계열: 키네틱 타이포 M6의 "단어가 건축이 된다", gdgtify-130294(단어마다 자기장 역할), gdgtify-989608(문장의 기준선이 궤도가 됨. 읽기 정지가 끝나기 전에는 장식 이동 금지, 현재 읽는 구절은 1080 기준 64px 이상, 모션 블러는 읽는 글자에 걸지 않음).

## 3D 씬

### D1. 단일 HTML 프로시저럴 씬
태그: #인터랙티브 #원작:코드 #구현:three #재료:3D #코퍼스 #미검증 #스타일:절차적3D

외부 에셋 없이 수학으로. "행성 그림이 아니라 행성 전체": 드래그로 회전, 해수면 올리기, 태양 옮기기, 새 행성 생성.

- 프롬프트 요령: three.js는 importmap(jsdelivr)으로, 빌드 단계 없음. "라이브러리·이미지·3D 모델 없이"를 명시. 조작 가능한 변수 2–3개를 지정.
- 원본: 0xsolty-735200, demitiyageekzen-818523(WebGL2 셰이더 + WebAudio 물리 모델링 악기), zeezomb-726206

### D2. 자료 기반 역사·실물 재현
태그: #서사설명 #원작:코드 #구현:three #재료:3D #코퍼스 #미검증 #스타일:절차적3D #스타일:실사재현

모델링 전에 **출처 파일부터** 만든다: 지도·필름·사진·지형 자료에서 건물마다 평면, 높이, 외장재, 입주자, 사실별 출처와 신뢰도를 기록. 다운로드 메시·텍스처 없이 재사용 가능한 생성기(파사드, 지붕, 가로등, 차량)를 쓰고 출처 파일에서 거리를 조립. "모든 건물이 데이터로 거슬러 올라간다."

- 도면 기반: 평면도 PDF에서 층별 재구성, 치수가 안 맞는 곳은 조용히 추측하지 말고 표시(15곳). 결정적 영상 캡처(같은 프레임을 두 번 렌더하면 픽셀 동일).
- 원본: alexalbert-274839, aayush4soni-644283, builtbysketch-114092

### D3. 스타일 지정 3D 한 줄
태그: #여러성격 #원작:코드 #구현:three #재료:3D #코퍼스 #미검증 #스타일:자유

- "{영화}의 {장면}을 web3D로 재현: {색·구름·반사·카메라 스타일}, 화면에 '{문구}'" (nft-chen-350878)
- "시간대에 따라 변하는 {장소}의 3D 환경. 파티클 일러스트 스타일: 면 대신 수천 개의 빛나는 점, 인물 뒤로 흐르는 리본 획" (ishuagra02-678129)
- "반사·굴절·수면 코스틱이 있는 어항" (nicolamanzini-156628)
- "{주제}의 3D 디오라마" / "스노우글로브 안의 {도시}" (lribes4-742305, eigeorguy-813651)
- "AI 데이터센터 안에서 무슨 일이 일어나는지 보여줘" (mdaman010-111079)
- "이야기를 상상해서 three.js로 픽사급 애니메이션을" (anilraok-009118)

### D4. 오디오 반응형 오브젝트
태그: #연속변형 #원작:코드 #구현:three #재료:3D #코퍼스 #미검증 #스타일:추상셰이더

곡을 먼저 분석(템포, 브레이크다운, 드롭)하고 그 구조로 오브젝트를 설계. 킥마다 판이 열리고, 베이스가 렌즈를 밀고, 고역이 코어를 밝힘. 브레이크다운에서 닫히고 드롭에서 활짝.

- 원본: acoramaa-248467

### D5. 물리 시뮬레이션 쇼케이스
태그: #연속변형 #원작:코드 #구현:three #구현:webgl #재료:3D #코퍼스 #미검증 #스타일:실사재현 #무드:긴장

"가짜 없이": GPU 유체 시뮬레이션 불(흑체 복사 색, 그을음, 연기), 오프라인 프레임 렌더와 스크립트 카메라, 소리는 프레임별 연소 밝기에서. 폭발·불꽃놀이: "시작, 힘의 전파, 남긴 변화가 보여야 한다. 한 프레임 섬광이나 무작위 파티클 비는 부족." 먼저 아이디어 몇 개를 저울질하고 가장 강한 것을 고르라고 지시.

- 원본: nathanwilbanks-981110, fornyapayzeka-135914, fornyapayzeka-795431, nybobs-680050

### D6. 스크롤 스크럽·인터랙티브 히어로 (웹)
태그: #인터랙티브 #원작:코드 #구현:dom #재료:영상 #코퍼스 #미검증 #스타일:미니멀클린

영상이 아니라 웹 섹션 스펙. 500vh 구간 스크롤이 배경 비디오의 currentTime을 몰고, 오버레이는 비디오 시각 구간에 맞춰 나타남. 커서 X-ray 스포트라이트(두 장의 사진 + radial-gradient 마스크). 스펙 문서 구조(기술 스택 → 폰트 → 컨테이너 → 섹션별 구조 → 에셋 → 애니메이션 → 반응형 → 설계 원칙 → 흔한 실수 → 통합 안전 수칙)가 참고할 만하다.

- 원본: iamtanzil-675031, iamtanzil-120030
- Figma 프레임 기반 배지 언락: "디자인을 정확히 맞추고 모션만 추가. 배지는 커서 쪽으로 기우는 단단한 3D 물체. 빠르고 부드럽게, 통통 튀지 않게" (bthreeagency-827092)

### D7. 빛을 막았다가 되찾는 3D 상징 단편 (대성당 스테인드글라스)
태그: #서사설명 #원작:코드 #구현:three #재료:3D #재료:글자 #코퍼스 #미검증 #스타일:시네마틱 #스타일:소프트3D #무드:긴장 #무드:차분

원본: agioyaz-397647(영문), agioyaz-986461(일본어판 「余白」). 사람을 한 명도 보이지 않고, 빛과 물체만으로 감정의 전환을 체감시킨다.

```text
A {37}s vertical three.js short, "{제목}". No human figures. A dim {고딕 대성당} with ONE tall window; strong 45°
sunlight projects its stained glass onto the stone floor. Original glass design in the tradition of {13세기
프랑스}, never a copy, with hundreds of pieces, painted faces, jeweled border, rose window. Timeline: colourless
white light → grey matte cubes engraved with {압박의 단어들} fly in faster and seal the window, the room darkens →
total darkness and silence → one block ({BUSY}) falls, one coloured beam enters → blocks cascade away, coloured
shafts multiply → the camera spirals up through the shafts and looks down on the full image glowing on the floor
→ radiant white, final line. Quiet serif lines between beats. The floor projection must match exactly which
holes are open. Cold achromatic first half, jewel red/blue/gold second half.
Sound: accelerating clock, thud per block, silence, one crystalline bell on the first beam, chimes, choir pad.
```

- 구현: 스테인드글라스 무늬를 이미지 하나로 만들고, 창·빛기둥·바닥 투영을 모두 같은 이미지에서 계산해 일치시킨다. 체적 광선은 셰이더 또는 가산 원뿔 + 먼지 입자.

### D8. 수십만 장의 타일로 지어지다 마지막에 광고였음이 드러나는 영상
태그: #연속변형 #원작:코드 #구현:three #재료:3D #재료:사진 #코퍼스 #미검증 #스타일:소프트3D #스타일:시네마틱 #무드:차분

원본: tanabe-fragm-322001(일본어). 시청자는 25초 동안 타일 공예 영상인 줄 알고 보다가, 마지막 몇 초에 그것이 광고 이미지였음을 깨닫는다.

```text
Make the attached image the LAST frame of a {30}s ad built entirely of tiles (three.js, instanced, ~190k tiles on
a 16:9 grid). The image only provides each tile's colour, never a texture. Each tile varies position, tilt,
thickness, bevel and colour; ~12 materials (glazed ceramic, slate, mother of pearl, porcelain, terracotta, glass)
assigned by brightness and saturation; open grout, no drawn lines. One hard sun top-left, plaster floor, an
out-of-focus red chalk line. Custom bokeh DOF: wide aperture first, small at the end.
0–3s one dark tile, camera at floor level → tiles spiral down from {시작 지점} → spread outward as the camera
pulls back revealing {보여 줄 그림} → full view, text areas still in the surrounding pale colour → text/logo/button
tiles flip left to right → locked top-down view, a cursor clicks {버튼 문구} and its tiles sink slightly.
```

- 함정(원문): 글자 자리 타일은 처음엔 주변 바탕색으로 짓는다(그래야 중간에 글자가 드러나지 않는다). 정면 위 카메라는 정확히 수직으로 두지 않는다(방향이 90° 돈다). 멈추는 지점은 속도를 0으로(보간 넘침으로 반전).

### D9. 레이마칭 프랙털 데모신 원테이크
태그: #연속변형 #원작:코드 #구현:webgl #재료:3D #코퍼스 #미검증 #스타일:추상셰이더 #스타일:시네마틱 #무드:하이에너지

원본: xanares-738984. 곡을 먼저 분석해 박자 지도(JSON)를 만들고, 크롬 구가 히트마다 맨델박스 단계를 하나씩 얻는다.

```text
A {37}s demoscene piece for {곡}, one continuous shot, graphics nobody has seen. A chrome sphere in dark fog gains
one Mandelbox level on each hit; in the drop it grows until its top face is a landscape — fly low at sunset, dive
off the edge; at the end the fractal collapses into 3D gold letters of the title, carved from the same fractal
and lit by the same light. Path-traced look: soft shadows, AO, glossy reflections, fog shafts, DOF, motion blur,
bloom. Analyse the track first into a JSON beat map (hits, breaks, kick/snare/hat onsets): kicks pulse the light,
hats add surface detail. One WebGL2 fragment-shader raymarcher; the same page is the live player and the offline
render source (1920×1080, 60fps, 16 samples per pixel, headless Chrome → ffmpeg).
```

### D10. 생성 원화를 2.5D 합성기로 한 세계에 넣는 단편 (깊이·초점·빛 공유)
태그: #서사설명 #원작:코드 #구현:canvas2d #구현:이미지생성 #구현:배경제거필요 #재료:인물 #재료:사진 #코퍼스 #미검증 #스타일:시네마틱 #스타일:필름질감 #무드:차분

원본: zhu185178-255661(「雨站」, Python + ffmpeg, HyperFrames·Remotion 없이), mochi-agi-421448(정지 이미지 9장에 Three.js로 깊이를 주고 카메라를 움직인 공포 단편). 원화를 따로 생성해도 **같은 깊이 공간·같은 카메라·같은 초점·같은 빛과 마감**으로 묶어 오려 붙인 느낌을 없앤다.

```text
A {30}s 2.39:1 storyboard-quality short, "{제목}". Generate the art separately (background, each character pose,
props) — characters on pure #00FF00 and keyed yourself; keep each character's poses in one session edited from a
base image. Upscale all art (Real-ESRGAN class), estimate background depth (Depth Anything class) for per-pixel
parallax. Write a 2.5D compositor: every layer placed at its real depth, a pinhole camera moving with a real focal
length, round bokeh, focus pulls, 3D rain, vehicle motion blur, volumetric light, bloom and halation, fine grain,
one grade over everything. Characters breathe and react via mesh warps; key poses switch on twos.
Cache frames to disk and render shot ranges in parallel. Sound: real SFX, a scored piece, a TTS line, per-shot
distance, -16 LUFS. Render preview frames into contact sheets at every step.
```

- 이 틀이 "합성 일체감"(workflow.md)의 해법을 가장 완전하게 보여 준다: 레이어마다 실제 깊이, 하나의 카메라와 초점, 마지막에 한 번 거는 마감.

