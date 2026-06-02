// ============================================================
// 포트폴리오 빌드 스크립트
//   - HTML 산출물: output/portfolio.html (+ output/style.css)
//   - PDF 산출물:  output/원재호_포트폴리오.pdf
// ============================================================
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR   = path.join(__dirname, 'src');
const OUT_DIR   = path.join(__dirname, 'docs'); // GitHub Pages 표준 경로 (Settings → Pages → /docs)

const args      = process.argv.slice(2);
const htmlOnly  = args.includes('--html-only');
const pdfOnly   = args.includes('--pdf-only');

// ============================================================
// [1] 데이터 + 템플릿 로드 → HTML 렌더링
// ============================================================
const renderPath = pathToFileURL(path.join(SRC_DIR, 'render.mjs')).href;
const { renderHtml } = await import(renderPath);
const html = renderHtml();

// output 폴더 준비
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

// HTML + CSS 산출물
const htmlPath = path.join(OUT_DIR, 'index.html'); // Pages 루트 진입 파일
const cssPath  = path.join(OUT_DIR, 'style.css');
writeFileSync(htmlPath, html, 'utf8');
copyFileSync(path.join(SRC_DIR, 'style.css'), cssPath);
console.log(`✓ HTML 산출물 생성: ${htmlPath}`);

if (htmlOnly) {
  console.log('=== HTML 전용 빌드 완료 ===');
  process.exit(0);
}

// ============================================================
// [2] HTML → PDF 변환 (Puppeteer)
// ============================================================
if (!pdfOnly) console.log('\nPDF 변환 시작...');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.goto(`file://${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });

// PDF 메타데이터 / 폰트 임베딩을 위해 viewport 명시
await page.emulateMediaType('print');

const pdfPath = path.join(OUT_DIR, '원재호_포트폴리오.pdf');
await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  preferCSSPageSize: true,
});

await browser.close();
console.log(`✓ PDF 산출물 생성: ${pdfPath}`);
console.log('\n=== 빌드 완료 ===');
console.log(`HTML: ${htmlPath}`);
console.log(`PDF:  ${pdfPath}`);
