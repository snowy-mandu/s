# 스타일 어휘와 금지 목록

## 스타일 어휘

프롬프트에 그대로 넣어 쓸 수 있는, 코퍼스에 실제로 나온 표현들이다.

**프리미엄·미니멀**
- Apple product launch film × premium fintech × editorial motion design × restrained Stripe-like presentation
- High-end minimal: one idea per shot, lots of empty space, one accent color, one clean sans with tight tracking
- dark metal, warm gold, glass, ink, precision, quiet confidence
- Dribbble-level UI motion / an Apple-keynote launch film, 2D only, one continuous take
- warm off-white canvas, black UI, liquid glass over the photos
- near-black rounded stage on a soft atmospheric gradient background(무대 프레임 구도)
- slow and polished: half the speed you'd default to, motion blur on fast moves, light film grain

**종이·손맛**
- paper-light canvas, marker notes that draw on, real physics, huge kinetic type, hard light/dark switches
- papery feel / hand-drawn pencil style with tasteful chromatic aberration
- hand-drawn whiteboard animation / hand-drawn stop-motion / drawing-style animated clip
- whimsical hand-drawn collage / vintage collage: 사실적 풍경 사진 + 흑백 신문 컷아웃(하프톤, 흰 종이 테두리, 부드러운 그림자), film grain, vignette, light flicker
- paper cut-out shadow theatre / origami, doodle style: cute, warm, wordless
- paper, typewriter-tape labels, hand-drawn marks
- monty-python/vox style "postcards in space" + sketchy ballpoint pen
- storybook, whimsical, charming: give the subject a personality

**인쇄·그래픽**
- halftone xerox look / halftone, manga and pixel print, kinetic data type
- Risograph style / street poster that moves, print misregistration on impact frames
- editorial(잡지풍) / literary editorial world with the scale of a public monument
- comic book style / internet brutalism

**레트로·화면 질감**
- film grain and CRT effect, retro-futuristic / scanlines
- Oscilloscope style / neon wireframe
- polished 16-bit sprite animation, pixel art with a fixed palette
- game console boot logo / 가상의 기업 로고 엔드카드

**강렬·과잉**
- psychedelic and hypnotic / サイケデリック・グリッチ: 매 박 흰 플래시, 색상 회전, 화면 찢김과 RGB 분리, 만화경
- chaotic brain rot video, 9:16 / "edit that goes hard"
- anime-style action trailer / K-pop 뮤직비디오의 주의 유도 방식
- Sledgehammer(피터 가브리엘) 스타일 뮤직비디오

**재료 은유**
- glass and gold leaf wall mosaic whose tiles were never glued down
- sand animation / faceted low-poly shards assembling a logo
- particle illustration: thousands of tiny glowing specks, flowing ribbon strokes
- fractals that look handcrafted from paper and cardboard, cinematic post-processing

**영화·감독 레퍼런스**
- Grand Budapest Hotel style / 지브리식 카메라 워크 / Apple "1984" 광고에서 영감
- a title sequence that feels like it won an Emmy for main title design
- The Pudding, 3Blue1Brown 같은 데이터 기반 설명 영상
- YC 영상, Claude 소셜 영상 같은 모던 SaaS 스타일

## 금지 목록 모음

프롬프트의 `Banned:` 줄에 골라 넣는다.

**효과**
shockwave rings · particle bursts / particle spam · RGB split · camera shake · lens flares · neon glows · grid floors · flashing backgrounds · glitch · zoom-blur spam · excessive blur · 3D flips / pointless 3D spinning cards · constant zooming · fake glassmorphism everywhere · spinning logos

**움직임**
bouncy easing / cartoon springiness / bouncing UI · linear movement · crossfades · blur-ins · random wipes · whip-pan every two seconds · generic SaaS slide-left · generic push/slide/rotate-swing · holds longer than 1s · dead time · sudden camera resets · unrelated floating elements

**화면 구성**
gradients on UI chrome · mismatched icon strokes · placeholder cards / fake dashboards · tiny code nobody can read · giant marketing paragraph · long paragraphs · full stops in on-screen text · outer captions, creator watermarks, decorative footers, progress counters · 모서리의 프레임과 텍스트(AI가 만든 티) · scrubber, timecode, fps, headers

**톤**
generic AI clichés (brains, robots, neural nets, sparkles) · stock "futuristic HUD" · generic AI purple / purple-blue neon / rainbow gradients · cyberpunk, crypto, gaming look · Canva-deck energy · PowerPoint energy · narrator essay energy · extra slogans beyond the locked message · "anything that looks like a template" · AI slop

**내용**
invented results (%, multipliers, customer names, figures) · invented screens or features · AI-generated text inside images · copyrighted commercial tracks · 특정 광고의 숏 단위 모방(철학과 제작 수준만 가져온다)

**소리**
huge cinematic trailer boom · EDM risers · loud whooshes everywhere · stock "tech interface" sounds · aggressive bass

## 주의

- 금지 목록과 요청이 충돌하는 프롬프트도 코퍼스에 있다. 예: humzaakhalid-537875는 glow, HUD, particles, neural visuals를 **요구**해서 좋은 결과를 냈다. 금지 목록은 취향의 선언이지 절대 규칙이 아니다. 요청한 톤에 맞춰 고른다.
- 같은 한 줄 프롬프트로도 결과가 크게 갈렸다. 스타일 단어 하나보다 실제 소재와 검수 루프가 더 큰 차이를 만든다.
