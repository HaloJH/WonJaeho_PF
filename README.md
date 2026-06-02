# 원재호 — 포트폴리오

> 레거시를 끌어올리고, 흩어진 코드에 표준을 부여하는 일에 강점이 있는 프론트엔드 중심 풀스택 개발자입니다.

**🔗 포트폴리오 보기:** [원재호 포트폴리오](https://USERNAME.github.io/REPO/) · [PDF 다운로드](docs/원재호_포트폴리오.pdf)

---

## 이 저장소에 대하여

이력서/포트폴리오 문서를 **단일 데이터 소스에서 HTML과 PDF로 동시에 생성하는 작은 빌드 시스템**입니다.
내용·디자인·렌더링을 분리해, 내용 한 번 수정하면 웹용 정적 사이트와 인쇄용 PDF가 함께 갱신됩니다.

```
포트폴리오_제작/
├── src/
│   ├── data.mjs      # 내용 (프로필 · 경력 · 프로젝트 · 역량) — 수정은 여기서만
│   ├── render.mjs    # data.mjs를 받아 HTML로 렌더링하는 템플릿
│   └── style.css     # 디자인 (A4 기준, 인쇄/웹 공용)
├── build.mjs         # 빌드 스크립트 (HTML 렌더 → Puppeteer로 PDF 변환)
├── docs/             # 산출물 — GitHub Pages가 서빙하는 폴더
│   ├── index.html
│   ├── style.css
│   └── 원재호_포트폴리오.pdf
└── package.json
```

## 빌드

```bash
npm install        # 최초 1회 (Puppeteer + Chromium)
npm run build      # HTML + PDF 동시 생성
npm run build:html # HTML만 (빠름)
npm run build:pdf  # PDF만
```

## 기술 선택 의도

- **데이터/뷰 분리** — 내용(`data.mjs`)과 표현(`render.mjs`/`style.css`)을 나눠, 회사별 강조점 조정이나 영문 버전 분기를 데이터 교체만으로 처리.
- **단일 소스 → 듀얼 산출** — 같은 입력으로 URL 공유용 HTML과 첨부용 PDF를 함께 생성해 두 산출물의 내용 불일치를 원천 차단.
- **CSS 페이지 규약** — `@page` + `page-break`로 A4 페이지네이션을 제어, 별도 편집기 없이 인쇄 품질 확보.
