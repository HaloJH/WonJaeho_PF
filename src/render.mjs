// ============================================================
// 포트폴리오 HTML 렌더러 — data.mjs를 받아 완성된 HTML 문자열 반환
// ============================================================
import { PROFILE, STRENGTHS, STACK, PROJECTS, AI_SECTION, CLOSING } from './data.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ============================================================
// [1] 표지
// ============================================================
const renderCover = () => `
<section class="page page-cover">
  <div class="cover-bg">
    <div class="cover-bg-circle cover-bg-circle-1"></div>
    <div class="cover-bg-circle cover-bg-circle-2"></div>
  </div>
  <div class="cover-content">
    <div class="cover-tagline">${esc(PROFILE.tagline)}</div>
    <h1 class="cover-name">${esc(PROFILE.name)}</h1>
    <div class="cover-name-en">${esc(PROFILE.nameEn)}</div>
    <div class="cover-title">${esc(PROFILE.title)}</div>
    <p class="cover-intro">${esc(PROFILE.intro)}</p>
    <div class="cover-contacts">
      ${PROFILE.contacts.map(c => `
        <div class="cover-contact-item">
          <span class="contact-icon">${c.icon}</span>
          <span class="contact-label">${esc(c.label)}</span>
        </div>
      `).join('')}
    </div>
    <div class="cover-meta">
      <div><span class="meta-key">생년월일</span> ${esc(PROFILE.meta.birth)}</div>
      <div><span class="meta-key">소속</span> ${esc(PROFILE.meta.company)}</div>
      <div><span class="meta-key">경력</span> ${esc(PROFILE.meta.career)}</div>
      <div><span class="meta-key">학력</span> ${esc(PROFILE.meta.education)}</div>
    </div>
  </div>
</section>`;

// ============================================================
// [2] 핵심 강점 + 기술 스택
// ============================================================
const renderStrengths = () => `
<section class="page">
  <h2 class="section-title"><span class="section-num">01</span> 핵심 강점</h2>
  <div class="strengths-grid">
    ${STRENGTHS.map(s => `
      <div class="strength-card">
        <div class="strength-icon">${s.icon}</div>
        <h3 class="strength-title">${esc(s.title)}</h3>
        <p class="strength-desc">${esc(s.desc)}</p>
      </div>
    `).join('')}
  </div>

  <h2 class="section-title section-title-sub"><span class="section-num">02</span> 기술 스택</h2>
  <div class="stack-grid">
    ${[
      { key: 'frontend', label: 'Frontend' },
      { key: 'backend',  label: 'Backend' },
      { key: 'database', label: 'Database' },
      { key: 'tools',    label: 'Tools & AI' },
    ].map(g => `
      <div class="stack-group">
        <div class="stack-group-label">${g.label}</div>
        <div class="stack-chips">
          ${STACK[g.key].map(s => `
            <span class="stack-chip stack-chip-${s.level === '능숙' ? 'high' : 'mid'}">
              ${esc(s.name)}
              <em class="stack-level">${esc(s.level)}</em>
            </span>
          `).join('')}
        </div>
      </div>
    `).join('')}
  </div>
</section>`;

// ============================================================
// [3] 경력 타임라인
// ============================================================
const renderTimeline = () => `
<section class="page">
  <h2 class="section-title"><span class="section-num">03</span> 경력 타임라인</h2>
  <p class="section-lead">2023년 입사 이후 6개 프로젝트, 5개 도메인을 거치며 풀스택 역량과 마이그레이션 전문성을 다져왔습니다.</p>
  <div class="timeline">
    ${PROJECTS.map((p, i) => `
      <div class="timeline-item ${p.isMain ? 'timeline-item-main' : ''}">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
          ${i < PROJECTS.length - 1 ? '<div class="timeline-line"></div>' : ''}
        </div>
        <div class="timeline-content">
          <div class="timeline-period">${esc(p.period)}</div>
          <div class="timeline-name">${esc(p.name)}${p.isMain ? '<span class="badge-main">메인</span>' : ''}</div>
          <div class="timeline-company">${esc(p.company)} · ${esc(p.role)}</div>
          <div class="timeline-stack">
            ${p.stack.map(s => `<span class="mini-chip">${esc(s)}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('')}
  </div>
</section>`;

// ============================================================
// [4] 메인 사례 — KOPMS (여러 페이지)
// ============================================================
const renderMainProject = () => {
  const p = PROJECTS.find(x => x.id === 'kopms');
  return `
<section class="page">
  <h2 class="section-title"><span class="section-num">04</span> 메인 프로젝트 <span class="section-title-sub-inline">KOPMS 신사업관리시스템</span></h2>

  <div class="main-project-hero">
    <div class="hero-meta">
      <div class="hero-row"><span class="hero-key">고객사</span> ${esc(p.company)}</div>
      <div class="hero-row"><span class="hero-key">기간</span>   ${esc(p.period)}</div>
      <div class="hero-row"><span class="hero-key">역할</span>   ${esc(p.role)}</div>
      <div class="hero-row"><span class="hero-key">스택</span>   ${p.stack.map(s => `<span class="mini-chip">${esc(s)}</span>`).join('')}</div>
    </div>
    <p class="hero-summary">${esc(p.summary)}</p>
  </div>

  ${p.contributions.map((c, i) => `
    <div class="contribution-block">
      <h3 class="contribution-title">
        <span class="contribution-num">${String(i + 1).padStart(2, '0')}</span>
        ${esc(c.title)}
      </h3>
      <ul class="contribution-list">
        ${c.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('')}

  <div class="achievements-block">
    <h3 class="achievements-title">주요 성과</h3>
    <ul class="achievements-list">
      ${p.achievements.map(a => `<li><span class="check-mark">✓</span> ${esc(a)}</li>`).join('')}
    </ul>
  </div>
</section>`;
};

// ============================================================
// [5] 다른 프로젝트들 (KOPMS 제외)
// ============================================================
const renderOtherProjects = () => {
  const others = PROJECTS.filter(p => !p.isMain);
  return `
<section class="page">
  <h2 class="section-title"><span class="section-num">05</span> 다른 프로젝트</h2>
  <p class="section-lead">발전·금융·결제·B2B 등 다양한 도메인에서 풀스택으로 기여한 5개 프로젝트입니다.</p>
  <div class="other-projects">
    ${others.map(p => `
      <div class="other-project-card">
        <div class="opc-header">
          <div>
            <div class="opc-name">${esc(p.name)}</div>
            <div class="opc-company">${esc(p.company)} · ${esc(p.role)}</div>
          </div>
          <div class="opc-period">${esc(p.period)}</div>
        </div>
        <div class="opc-stack">${p.stack.map(s => `<span class="mini-chip">${esc(s)}</span>`).join('')}</div>
        <p class="opc-summary">${esc(p.summary)}</p>
        <ul class="opc-bullets">
          ${p.bullets.map(b => `<li>${esc(b)}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>
</section>`;
};

// ============================================================
// [6] AI 활용 역량
// ============================================================
const renderAISection = () => `
<section class="page">
  <h2 class="section-title"><span class="section-num">06</span> AI 활용 역량</h2>
  <p class="section-lead">${esc(AI_SECTION.intro)}</p>

  <h3 class="subsection-title">활용 철학</h3>
  <div class="philosophy-grid">
    ${AI_SECTION.philosophy.map(p => `
      <div class="philosophy-card">
        <h4 class="philosophy-title">${esc(p.title)}</h4>
        <p class="philosophy-desc">${esc(p.desc)}</p>
      </div>
    `).join('')}
  </div>

  <h3 class="subsection-title">실전 활용 사례 — KOPMS 프로젝트</h3>
  <div class="cases-list">
    ${AI_SECTION.cases.map((c, i) => `
      <div class="case-card">
        <div class="case-header">
          <span class="case-num">CASE ${String(i + 1).padStart(2, '0')}</span>
          <h4 class="case-title">${esc(c.title)}</h4>
        </div>
        <div class="case-body">
          <div class="case-row"><span class="case-key">문제</span> <span class="case-val">${esc(c.problem)}</span></div>
          <div class="case-row"><span class="case-key">접근</span> <span class="case-val">${esc(c.action)}</span></div>
          <div class="case-row case-result"><span class="case-key">결과</span> <span class="case-val">${esc(c.result)}</span></div>
        </div>
      </div>
    `).join('')}
  </div>

  <p class="ai-closing">${esc(AI_SECTION.closing)}</p>
</section>`;

// ============================================================
// [7] 마무리
// ============================================================
const renderClosing = () => `
<section class="page page-closing">
  <h2 class="section-title"><span class="section-num">07</span> 마무리</h2>

  <h3 class="subsection-title">가치관</h3>
  <div class="values-grid">
    ${CLOSING.values.map(v => `
      <div class="value-card">
        <h4 class="value-title">${esc(v.title)}</h4>
        <p class="value-desc">${esc(v.desc)}</p>
      </div>
    `).join('')}
  </div>

  <h3 class="subsection-title">앞으로 학습 방향</h3>
  <ul class="next-list">
    ${CLOSING.next.map(n => `<li>${esc(n)}</li>`).join('')}
  </ul>

  <div class="closing-message">
    ${esc(CLOSING.message)}
  </div>

  <div class="closing-sign">
    <div class="sign-name">${esc(PROFILE.name)}</div>
    <div class="sign-contact">${esc(PROFILE.contacts[0].label)} · ${esc(PROFILE.contacts[1].label)}</div>
  </div>
</section>`;

// ============================================================
// 메인 — 전체 HTML 조립
// ============================================================
export const renderHtml = () => `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>${esc(PROFILE.name)} — 포트폴리오</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  ${renderCover()}
  ${renderStrengths()}
  ${renderTimeline()}
  ${renderMainProject()}
  ${renderOtherProjects()}
  ${renderAISection()}
  ${renderClosing()}
</body>
</html>`;
