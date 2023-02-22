How to use Playwright to test in Webkit / FireFox / Chromium

For this solution I chose to download this package in a seperate project because we only want to make it open a specific browser to test our running application. This way it does not take up space in your project.

Project setup

Create a new directory somewhere on your pc and open in an IDE

Open a terminal and install playwright with NPM  

npm init playwright@latest

When installing continue on every question

Last question will ask for automatic browser installs. Continue or choose manual

Install @types/node in your project

npm install --save @types/node

This is needed to be able to use require() in provided code underneath

Create a new TS/JS file in root of this project

Example: browsertesting.ts

Paste in following code

const { chromium, firefox, webkit } = require('@playwright/test');

(async () => {
  const browser = await webkit.launch();  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('https://www.gonna.be/');
  // other actions...
})();

Change webkit.launch to the browser you want to open with Playwright

// Possible browsers
webkit.launch()
firefox.launch()
chromium.launch()

Startup

Open PowerShell with Administration rights.

Paste in following command to start running your browser ($env only needs to be set once)  

$env:PWDEBUG=1

npx run .\browsertesting.ts

$env:PWDEBUG=1 will set an environment variable used in playwright that will tell playwright to use the playwright inspector (this will open an inspector and the specified browser). Otherwise it would try to run tests without actually opening the browser live.

Changing the browser.launch() and saving the file will automatically close the previous browser and open the new one due to npx watching the file
