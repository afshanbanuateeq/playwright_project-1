import { test, expect } from '@playwright/test';

test('handle multiple pages', async ({ page, context }) => {
  await page.goto('https://demoqa.com/browser-windows');

 
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), 
    page.click('#windowButton'),  
  ]);

  // Wait for new page to load
  await newPage.waitForLoadState();

  // Check the content of new page
  const text = await newPage.locator('body').textContent();
  console.log('Text on new page:', text);

  // Close the new page
  await newPage.close();

  // Continue on the original page
  await expect(page).toHaveURL(/browser-windows/);
});