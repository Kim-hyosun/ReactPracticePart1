# React연습

---

# ['리액트연습사이트 바로가기'](https://kim-hyosun.github.io/ReactPracticePart1/)

# 1. 목표

---

> **1. 컴포넌트 공부하기**

> **2. swiper-slide, nav 구현 방법 생각해보기**

<br />
<br />
<br />

---

# 2. 프로젝트 개요

**파이브스톤(FiveStone)** 디자인 회사 콘셉트의 반응형 랜딩페이지 퍼블리싱 연습 프로젝트입니다.
헤더 GNB(드롭다운), 비주얼 슬라이더(Swiper), 메인 섹션(art1~art5), 푸터로 구성된 단일 페이지(SPA)입니다.

> 원래 CRA(create-react-app)로 만들어 `gh-pages`에 배포돼 있던 사이트를, 디자인/마크업은 그대로 유지하면서 빌드 스택만 **Vite + TypeScript + pnpm**으로 마이그레이션했습니다.

<br />

# 3. 기술 스택

| 구분 | 사용 기술 |
|---|---|
| 빌드 | Vite 5 |
| 언어 | React 18 + TypeScript |
| 스타일 | 전역 CSS(`src/styles/main.css`) + styled-reset(GlobalStyle) |
| 슬라이더 | Swiper 11 (Pagination + Autoplay) |
| 폰트 | Noto Sans KR |
| 패키지 매니저 | pnpm |
| 배포 | GitHub Pages (`gh-pages`) |

<br />

# 4. 실행 방법

```bash
pnpm install      # 의존성 설치
pnpm dev          # 개발 서버 (http://localhost:5173/ReactPracticePart1/)
pnpm build        # 타입체크(tsc) + 프로덕션 빌드 (dist/)
pnpm preview      # 빌드 결과 미리보기
pnpm deploy       # gh-pages 배포 (dist → gh-pages 브랜치)
```

> 배포 경로(`/ReactPracticePart1/`)는 `vite.config.ts`의 `base`에 설정돼 있습니다.

<br />

# 5. 폴더 구조

```
ReactPracticePart1/
├─ index.html              # Vite 진입 HTML
├─ vite.config.ts          # base: '/ReactPracticePart1/'
├─ public/
│  └─ assets/images/       # 이미지 27종 (로고/visual/m-*/아이콘 등)
└─ src/
   ├─ main.tsx             # 진입점 (GlobalStyle + main.css + App)
   ├─ App.tsx              # .wrap = Header → VisualSwiper → Main → Footer
   ├─ lib/
   │  └─ asset.ts          # base 경로 기반 public 에셋 헬퍼
   ├─ styles/
   │  ├─ GlobalStyle.ts    # styled-reset 기반 리셋
   │  └─ main.css          # 레이아웃 전역 스타일
   └─ components/
      ├─ Header.tsx        # 로고 + GNB(드롭다운) + 아이콘
      ├─ VisualSwiper.tsx  # 비주얼 슬라이더 (visual01~03)
      ├─ Main.tsx          # art1~art5 섹션
      └─ Footer.tsx        # 로고 + policy + sns + 주소/연락처
```

<br />

# 6. 페이지 구성

| 영역 | 내용 |
|---|---|
| Header | 로고 + 5개 메뉴(회사소개·사업분야·제품안내·커뮤니티·고객지원) hover 드롭다운 + 아이콘 |
| Visual | Swiper 비주얼 슬라이더 (자동 재생 + 페이지네이션) |
| art1 | Main Service — 회사개요/사업분야/채용안내 3박스 |
| art2 | GOURD / BARLEY — 좌우 교차 소개 레이아웃 |
| art3 | parallax 배경 CTA |
| art4 | KEY BUSINESS — 사업분야 4박스 |
| art5 | NOTICE / Q&A / MEDIA — 그린 밴드 3뷰 |
| Footer | 로고 + 정책 링크 + SNS + 회사 정보 |
