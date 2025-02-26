const { test, expect } = require('@playwright/test');

test('Pluto TV Homepage Navigation Test', async ({ page }) => {
  await page.goto('https://pluto.tv/se/on-demand?lang=en', { waitUntil: 'networkidle' });

  console.log("Waiting for the page to load...");
  await page.waitForTimeout(5000); 

  
  const acceptCookies = await page.locator('#onetrust-accept-btn-handler');
  if (await acceptCookies.isVisible()) {
    console.log("Accepting cookies...");
    await acceptCookies.click();
    await page.waitForTimeout(5000);
    const hamburgerButton = await page.locator('#hamburger-menu-btn-atc');
    await hamburgerButton.waitFor({ state: 'visible' });
    await hamburgerButton.click();
    await page.waitForTimeout(3000); 

    const supportLink = page.locator('a[href="https://support.pluto.tv/"]', { hasText: 'Support' });
    await supportLink.waitFor({ state: 'visible', timeout: 10000 });
    await supportLink.click();
  }
});
