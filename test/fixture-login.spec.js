const { test, expect } = require('@playwright/test');

test('basic test in Chrome', async ({ page }) => {
  // 'page' is a built-in fixture representing a new browser tab
  await page.goto('https://example.com');

  // Assert the page title contains "Example Domain"
  await expect(page).toHaveTitle(/Example Domain/);
});
