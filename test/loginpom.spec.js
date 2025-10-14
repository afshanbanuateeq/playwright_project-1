import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Verify login functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('admin', 'password');
  await expect(page).toHaveURL(/dashboard/);
});
