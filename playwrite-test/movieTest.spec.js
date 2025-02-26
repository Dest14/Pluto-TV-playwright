import { test, expect } from '@playwright/test';

test('Pluto TV Expand Button Click', async ({ page }) => {

  await page.goto('https://pluto.tv/se/on-demand');


  const acceptButton = page.locator('button:text("Acceptera")');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }


  await page.waitForTimeout(3000);

  const dockUpButton = page.locator('button.dockUpButton-0-2-230');
  await dockUpButton.click();

  
  await page.waitForTimeout(3000);

  
  const fullscreenButton = page.locator('button.toggleFullscreenButton-0-2-115');
  await fullscreenButton.click();
});
