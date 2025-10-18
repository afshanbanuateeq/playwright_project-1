import { test, expect } from '@playwright/test';

test('handle popup alert', async ({ page }) => {
  page.on('dialog', async (dialog) => {
    console.log('Alert Message:', dialog.message());
    await dialog.accept(); 
  });
  await page.goto('https://demoqa.com/alerts');
  await page.locator('#alertButton').click();
  await page.waitForTimeout(1000);
  await expect(page).toHaveURL('https://demoqa.com/alerts');
});
