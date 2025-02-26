const { test, expect } = require('@playwright/test');

function generateRandomEmail() {
  const randomNum = Math.floor(Math.random() * 10000);
  return `user${randomNum}@testmail.com`;
}

test('Sign in to Pluto TV with Random Email', async ({ page }) => {
  await page.goto('https://pluto.tv/se/on-demand?lang=en', { waitUntil: 'networkidle' });


  console.log("Waiting for the page to load...");
  await page.waitForTimeout(5000); 

  const acceptCookies = await page.locator('#onetrust-accept-btn-handler');
  if (await acceptCookies.isVisible()) {
    console.log("Accepting cookies...");
    await acceptCookies.click();
    await page.waitForTimeout(2000); 
  }

  console.log("Clicking the 'Sign In' button...");
  await page.locator('a.signInButton-0-2-191').click();
  await page.waitForTimeout(2000); 

  console.log("Waiting for email input field...");
  await page.waitForSelector('input[type="email"]', { timeout: 5000 });

  const randomEmail = generateRandomEmail();
  console.log("Typing the random email:", randomEmail);
  await page.fill('input[type="email"]', randomEmail);

  await page.waitForTimeout(2000); 

  console.log("Clicking 'Next'...");
  await page.locator('button:has-text("Next")').click();
  await page.waitForTimeout(5000); 

  const hamburgerButton = await page.locator('#hamburger-menu-btn-atc');
  await hamburgerButton.waitFor({ state: 'visible' });
  await hamburgerButton.click();


  console.log('Random email used:', randomEmail);
});
