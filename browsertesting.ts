const { chromium, firefox, webkit } = require('@playwright/test');

(async () => {
  const browser = await webkit.launch();  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  // other actions...
})();