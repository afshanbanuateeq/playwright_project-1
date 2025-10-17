// test/hooks.spec.js
import { test, expect } from '@playwright/test';

// Hooks
test.beforeAll(async () => {
  console.log('>>> Runs once before all tests');
});

test.afterAll(async () => {
  console.log('>>> Runs once after all tests');
});

test.beforeEach(async ({ page }) => {
  console.log('>>> Runs before each test');
  await page.goto('https://demoqa.com/text-box');
});

test.afterEach(async () => {
  console.log('>>> Runs after each test');
});

// Actual tests
test('Fill text box form', async ({ page }) => {
  await page.fill('#userName', 'Afshan');
  await page.fill('#userEmail', 'afshan@example.com');
  await page.fill('#currentAddress', 'Bangalore');
  await page.click('#submit');

  await expect(page.locator('#name')).toContainText('Afshan');
});
