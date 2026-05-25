import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "temporary screenshots");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const url = process.argv[2] || "http://localhost:3001";
const label = process.argv[3] || "";

// Find next available screenshot number
const existing = fs.readdirSync(outDir).filter((f) => f.endsWith(".png"));
const nums = existing.map((f) => parseInt(f.match(/screenshot-(\d+)/)?.[1] || "0"));
const next = (nums.length ? Math.max(...nums) : 0) + 1;
const filename = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;
const outPath = path.join(outDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--disable-extensions",
    "--disable-background-networking",
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-default-apps",
    "--disable-translate",
    "--single-process",
  ],
  timeout: 60000,
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
await new Promise((r) => setTimeout(r, 2500)); // wait for CDN fonts + Tailwind to paint
await new Promise((r) => setTimeout(r, 1200));
// Force all reveal elements visible (bypasses IntersectionObserver for screenshot)
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
});
// Scroll to trigger any remaining JS
const pageHeight = await page.evaluate(() => document.body.scrollHeight);
const step = 400;
for (let y = 0; y < pageHeight; y += step) {
  await page.evaluate((pos) => window.scrollTo(0, pos), y);
  await new Promise((r) => setTimeout(r, 60));
}
// Scroll to section based on label
const scrollTargets = {
  pricing: '#join',
  events: '#events',
  about: '#about',
  community: '#community',
};
const baseLabel = label.replace(/\d+$/, '');
if (scrollTargets[baseLabel]) {
  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: 'instant' });
  }, scrollTargets[baseLabel]);
  await new Promise((r) => setTimeout(r, 500));
} else {
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 500));
}
const isFullPage = !label || label.startsWith("full");
await page.screenshot({ path: outPath, fullPage: isFullPage });
await browser.close();

console.log(`Saved: temporary screenshots/${filename}`);
