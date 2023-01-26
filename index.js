import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.goto('https://orteil.dashnet.org/cookieclicker/');
// 言語選択
await page.waitForSelector('#langSelect-JA');
await page.click('#langSelect-JA');
// 選択後にリロードが走るので待つ
await page.waitForNavigation();
for (let i = 0; i < 1000; i++) {
  await page.click('#bigCookie');
}
