// ============================================================
// 포트폴리오 데이터 — 이 파일만 수정하면 내용 변경됨
// ============================================================

export const PROFILE = {
  name:       '원재호',
  nameEn:     'Won Jaeho',
  title:      '프론트엔드 중심 풀스택 개발자',
  tagline:    '레거시를 끌어올리는 개발자',
  intro:      '레거시 시스템을 모던 스택으로 끌어올리고, 흩어진 코드에 표준을 부여하는 일에 강점이 있습니다. ' +
              'Nexacro 마이그레이션 2회·Vue3 표준화 1회를 거치며, 손이 많이 가는 자리에서 시스템의 결을 잡아왔습니다.',
  contacts: [
    { icon: '✉️', label: 'tufc@naver.com' },
    { icon: '📞', label: '010-7234-5675' },
    { icon: '📍', label: '서울특별시 서대문구' },
  ],
  meta: {
    birth:    '1997.07.18',
    company:  '주식회사 브렌 · SI사업부',
    career:   '2023.03 ~ 현재 (3년차)',
    education:'아세아항공직업전문학교 · 항공정비과 (2018.02)',
  },
};

// ============================================================
// 핵심 강점 — 표지에 큼직하게 배치
// ============================================================
export const STRENGTHS = [
  {
    icon: '🔧',
    title: '마이그레이션 전문성',
    desc: 'Nexacro 14 → N 두 차례, AS-IS → TO-BE(KOPMS) 한 차례. 레거시 코드 분석부터 점진 이관까지 일관 수행.',
  },
  {
    icon: '🧱',
    title: '시스템 표준화',
    desc: '공용 컴포넌트·매퍼 패턴·SQL 컨벤션 정립. 레거시 시스템의 흩어진 화면 코드를 재사용 가능한 형태로 정리.',
  },
  {
    icon: '🌐',
    title: '풀스택 도메인 적응력',
    desc: '발전·금융·결제·공공·B2B 6개 도메인 경험. Vue3 + Spring Boot 양쪽 모두 자력 구현.',
  },
  {
    icon: '🤖',
    title: 'AI 협업 능숙도',
    desc: 'Claude Code를 활용한 코드 분석·설계 검토·문서 자동화. 단순 보조가 아닌 메타 분석 수준의 활용.',
  },
];

// ============================================================
// 기술 스택
// ============================================================
export const STACK = {
  frontend: [
    { name: 'Vue 3',           level: '능숙' },
    { name: 'JavaScript',      level: '능숙' },
    { name: 'Vuetify',         level: '능숙' },
    { name: 'Nexacro Platform',level: '능숙' },
    { name: 'jQuery / JSP',    level: '경험' },
  ],
  backend: [
    { name: 'Spring Boot',     level: '능숙' },
    { name: 'Spring',          level: '능숙' },
    { name: 'MyBatis',         level: '능숙' },
    { name: 'Java',            level: '능숙' },
  ],
  database: [
    { name: 'Oracle',          level: '능숙' },
    { name: 'PostgreSQL',      level: '경험' },
    { name: 'MariaDB',         level: '경험' },
    { name: 'DB2',             level: '경험' },
    { name: 'MS-SQL',          level: '경험' },
  ],
  tools: [
    { name: 'Claude Code',     level: '능숙' },
    { name: 'Git / SVN',       level: '능숙' },
    { name: 'Maven',           level: '능숙' },
    { name: 'STS / Eclipse',   level: '능숙' },
    { name: 'VS Code',         level: '능숙' },
  ],
};

// ============================================================
// 프로젝트 — 최신순
// ============================================================
export const PROJECTS = [
  {
    id:        'kopms',
    company:   '한국남동발전',
    name:      'KOPMS 신사업관리시스템 고도화',
    period:    '2025.12 ~ 2026.06 (7개월)',
    role:      '프론트엔드, 백엔드',
    isMain:    true,
    stack: ['Vue 3', 'Vuetify', 'Spring Boot', 'MyBatis', 'Oracle'],
    summary:   'AS-IS JSP 기반 레거시 시스템을 Vue 3 + Spring Boot로 전면 마이그레이션. 요구 분석·화면 설계부터 UI 구현, 백엔드·DB, QA까지 전 영역을 담당했고, 기존 화면을 그대로 옮기지 않고 정보구조·동선을 다시 설계해 재구성. 공용 컴포넌트·SQL 패턴·백엔드 패키지 구조까지 표준을 정립.',

    contributions: [
      {
        title: '화면 전면 재구성 · 공용 컴포넌트 시스템 설계',
        items: [
          '<strong>AS-IS JSP 화면 제로베이스 재구성</strong> — 단순 이관이 아니라 정보구조·사용자 동선을 다시 설계해 Vue 3로 구현. 시안 의존 없이 화면 설계부터 구현까지 자력 수행.',
          '<strong>BrFileAttach / BrFileInput</strong> — 첨부파일 단일·다중 업로드 패턴을 공용 컴포넌트로 일원화. 화면마다 제각각이던 첨부 UI를 표준화.',
          '<strong>BrVersionSelect</strong> — 이력 버전 셀렉트 공용화. 현재/이력 분기, displayLabel 슬롯 패턴.',
          '<strong>BrDateField / BrNumberField / EmpSearchField</strong> — 폼 입력 컴포넌트 표준화. prefix/suffix 슬롯 + jdbcType=VARCHAR 적용 가이드.',
          '<strong>br-table-fill / br-tab / score-panel</strong> — 글로벌 utility class로 디자인 가이드 자동 반영.',
        ],
      },
      {
        title: '백엔드 구조 리팩토링',
        items: [
          '같은 특성 서비스끼리 패키지 분리 → 프론트 폴더구조와 백엔드 패키지 일치시켜 유지보수성 향상.',
          'MyBatis OGNL 분기 → SQL CASE WHEN 우선 정책 도입. 가독성·디버깅 개선.',
          'BIZ_MASTER / BIZ_PORTAL / NBM_BIZ_MASTER 등 핵심 테이블의 proStep 스코프 격리 + 역할코드 정리.',
        ],
      },
      {
        title: 'AS-IS → TO-BE 매핑 및 검증',
        items: [
          '매퍼 grep 분석으로 실제 사용 테이블 추출 → DSN 산출물(테이블 목록/정의서) 정합성 검증 자동화.',
          '24건 잉여 정의서 식별 + 6건 누락 정의서 추가. 3종 매트릭스(DSN_09 ↔ DSN_10 ↔ 매퍼) 비교 스크립트 작성.',
          'AS-IS 마이그레이션 정책 준수 — 위험 발견 시 임의 개선 대신 협의 항목으로 분리.',
        ],
      },
      {
        title: '변경 이력 추적 시스템',
        items: [
          'BIZ_PORTAL_CHANGE_LOG 기반 변경 이력 적재·추적 구조 구현 — 데이터 변경 전후를 기록하고 조회.',
          '현재/이력 버전 분기 조회 — BrVersionSelect 공용 컴포넌트와 연동해 버전 선택 UI 제공.',
        ],
      },
    ],

    achievements: [
      '공용 컴포넌트 10여 종 정립 → 신규 화면 개발 시간 단축',
      '백엔드 매퍼 분기 SQL 단순화로 디버깅 시간 감소',
      'DSN 산출물 매트릭스 검증 자동화로 휴먼 에러 사전 차단',
    ],
  },

  {
    id:        'smartro-vms',
    company:   '스마트로',
    name:      '백오피스 시스템(VMS) 고도화',
    period:    '2025.04 ~ 2025.11 (7개월)',
    role:      '프론트엔드',
    stack: ['Nexacro 14', 'Nexacro N', 'Spring'],
    summary:   '레거시 Nexacro 14 화면을 Nexacro N으로 마이그레이션. 결제 정산·가맹점 관리 백오피스 모듈 다수 담당.',
    bullets: [
      'Nexacro 14 → N 마이그레이션 (두 번째 경험으로 전 단계 노하우 적용)',
      '레거시 비즈니스 로직 보존 + 모던 UI 컨벤션 적용 균형',
      '결제 도메인 데이터 흐름 이해 및 검증 케이스 작성',
    ],
  },

  {
    id:        'smartro-qr',
    company:   '스마트로',
    name:      'Smartro QR Order 서비스 개발',
    period:    '2024.10 ~ 2025.01 (4개월)',
    role:      '프론트엔드, 백엔드',
    stack: ['Vue 3', 'Spring Boot', 'DB2'],
    summary:   'QR 코드 기반 매장 주문 서비스 신규 개발. 백엔드 API 설계부터 프론트 화면까지 풀스택 수행.',
    bullets: [
      'Vue 3 + Spring Boot 풀스택 신규 서비스 구축',
      'DB2 환경에서 주문/결제 도메인 모델링',
      'QR 스캔 → 주문 → 결제 흐름 end-to-end 설계',
    ],
  },

  {
    id:        'smart-invoice',
    company:   '자체 서비스',
    name:      'SMART INVOICE 서비스 개발',
    period:    '2024.02 ~ 2024.09 (8개월)',
    role:      '프론트엔드, 백엔드',
    stack: ['Vue 3', 'Spring', 'PostgreSQL'],
    summary:   '전자세금계산서 SaaS 서비스 신규 개발. PostgreSQL 기반 트랜잭션 설계 및 Vue 3 UI 구현.',
    bullets: [
      '전자세금계산서 도메인 모델링 및 API 설계',
      'PostgreSQL 트랜잭션 격리 수준 고려한 정산 로직',
      'Vue 3 기반 입력 폼 + 그리드 UI 일관성 확보',
    ],
  },

  {
    id:        'ibk-mrs',
    company:   'IBK 신용정보',
    name:      'MRS UI 고도화 프로젝트',
    period:    '2023.08 ~ 2023.11 (4개월)',
    role:      '프론트엔드',
    stack: ['Nexacro 14', 'Nexacro N'],
    summary:   '신용정보 MRS 화면을 Nexacro 14에서 N으로 마이그레이션. 첫 마이그레이션 프로젝트로 패턴 학습.',
    bullets: [
      'Nexacro 14 → N 마이그레이션 첫 경험 — 차이점 학습',
      '금융권 보안 요구사항 준수하며 UI 이관',
      '화면 단위 책임 분담 + QA 반영 흐름 체득',
    ],
  },

  {
    id:        'kepco',
    company:   '한국전력기술',
    name:      '한국전력 통합 프레임워크 구축',
    period:    '2023.05 ~ 2023.07 (3개월)',
    role:      '프론트엔드, 백엔드',
    stack: ['Nexacro N', 'Spring', 'MariaDB'],
    summary:   '한전 그룹사 공통 프레임워크 구축 프로젝트. 입사 직후 첫 투입으로 기본기 형성.',
    bullets: [
      'Spring 기반 백엔드 + Nexacro N 프론트 풀스택 첫 경험',
      '대형 SI 환경의 표준 가이드/산출물 체계 학습',
      'Java/JS/Oracle 실무 토대 확립',
    ],
  },
];

// ============================================================
// AI 활용 역량 — 별도 섹션
// ============================================================
export const AI_SECTION = {
  intro: 'AI를 단순 코드 생성 도구가 아닌, 코드베이스를 함께 분석하고 설계를 검토하는 페어 프로그래밍 파트너로 활용합니다. ' +
         'KOPMS 프로젝트에서 Claude Code를 적극 도입하여 실제 생산성을 끌어올렸습니다.',

  philosophy: [
    {
      title: '도구가 아닌 협업자로 본다',
      desc:  '단순히 "코드 짜줘"가 아니라, 함께 코드베이스를 읽고 패턴을 발견하고 의사결정을 검토하는 동료처럼 활용합니다.',
    },
    {
      title: '최종 판단은 사람이 한다',
      desc:  'AI 제안을 그대로 받아들이지 않습니다. 메모리/룰 기반으로 프로젝트 컨벤션을 명시하고, AS-IS 마이그레이션 정책 등은 임의 개선 금지로 가드합니다.',
    },
    {
      title: '맥락 관리에 신경 쓴다',
      desc:  '프로젝트 메모리 파일을 적극 활용해 컴포넌트 사용법·DB 스키마·코드 컨벤션을 영속화하여 매 세션마다 일관된 협업 환경을 유지합니다.',
    },
  ],

  cases: [
    {
      title: 'DSN 산출물 정합성 자동 검증',
      problem: 'AS-IS 산출물(테이블 목록·정의서)이 실제 사용 테이블과 일치하는지 수기 검증 부담.',
      action: 'MyBatis 매퍼 XML을 grep으로 파싱 → 실제 사용 테이블 추출 → DSN_09 / DSN_10 / 매퍼 3종 매트릭스 비교 스크립트 작성.',
      result: '잉여 정의서 24건·누락 정의서 6건 자동 식별. 휴먼 에러 차단 + 산출물 신뢰도 향상.',
    },
    {
      title: '공용 컴포넌트 패턴 합의 및 표준화',
      problem: '신규 화면 추가 시 다이얼로그·테이블·점수판 등이 화면별로 제각각.',
      action: '기존 화면 코드 분석으로 공통 패턴 추출 → BrFileAttach·br-table-fill·score-panel 등 글로벌 utility로 추출. 메모리에 사용 가이드 영속화.',
      result: '신규 화면 개발 시 컴포넌트 import만으로 디자인 가이드 자동 반영. 코드 재사용성 향상.',
    },
    {
      title: '백엔드 패턴 일관성 가드',
      problem: 'MyBatis OGNL 분기·jdbcType 누락·string compare 등 미세한 컨벤션 차이로 인한 버그 발생.',
      action: '발견한 컨벤션을 메모리에 명시 — "OGNL 큰따옴표 패턴", "BrNumberField → jdbcType=VARCHAR", "CASE WHEN 우선" 등.',
      result: '같은 패턴 실수 재발 방지. 코드 리뷰 시간 단축. 신규 화면도 동일 컨벤션 자동 준수.',
    },
    {
      title: 'AS-IS 마이그레이션 정책 자동 가드',
      problem: 'AS-IS 코드 마이그레이션 시 위험 발견하면 본능적으로 개선하고 싶은 충동 → 고객사 정책 위반.',
      action: '"AS-IS 마이그레이션 코드 임의 개선 금지" 룰을 메모리에 명시. 위험 발견 시 자동으로 협의 항목으로 분리 제안.',
      result: '고객사 정책 100% 준수 + 위험 항목 별도 트래킹으로 운영 안정성 확보.',
    },
  ],

  closing: '이러한 활용 방식은 단순 코드 생성 보조를 넘어, 시스템 전반의 일관성을 유지하는 메타 분석 도구로 AI를 활용하는 방법입니다. ' +
           '앞으로도 AI 도구의 발전을 적극 학습하며, 더 큰 시스템에서 더 일관된 결과물을 만들어내는 개발자가 되고자 합니다.',
};

// ============================================================
// 마무리 — 가치관 / 학습 방향
// ============================================================
export const CLOSING = {
  values: [
    {
      title: '맥락 위에서 결정한다',
      desc:  '문제를 발견하면 즉시 고치고 싶은 충동이 들지만, 고객사 정책·운영 영향·기존 컨벤션 등 맥락을 먼저 확인합니다. ' +
             '"왜 이렇게 되어 있는지"를 이해한 후에 손을 댑니다.',
    },
    {
      title: '재사용 가능한 형태로 정리한다',
      desc:  '한 번 풀린 문제는 다음에 같은 문제가 와도 풀릴 수 있도록 패턴화합니다. 공용 컴포넌트·utility class·메모리 룰 등은 모두 이 원칙의 산물입니다.',
    },
    {
      title: '책임지는 코드를 쓴다',
      desc:  '내가 작성한 코드가 운영에서 어떻게 동작할지 끝까지 추적합니다. 단순 화면 구현이 아닌, 데이터가 어떻게 흘러 어디에 저장되는지 이해하고 코드를 작성합니다.',
    },
  ],

  next: [
    '인프라/배포 영역 학습 — Linux 명령·로그 분석·CI/CD 파이프라인',
    'Spring Security / SSO(SAML, OAuth 2.0, OIDC) 인증 구조 심화',
    'Docker / Kubernetes 기반 컨테이너 배포 경험',
    'AI 활용 사례 지속 발굴 및 팀 내 공유',
  ],

  message: '레거시를 끌어올리고, 흩어진 것을 정리하며, 더 큰 시스템에서도 일관된 결을 만들어내는 개발자가 되고 싶습니다. ' +
           '읽어주셔서 감사합니다.',
};
