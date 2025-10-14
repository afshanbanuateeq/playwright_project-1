import { test, expect } from '@playwright/test';
test('handle confirm', async ({ page }) => {
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.dismiss(); // cancel
  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.click('text=Click for JS Confirm');
});
