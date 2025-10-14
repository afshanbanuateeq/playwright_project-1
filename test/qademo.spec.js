const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../loginpage/LoginPage');
test('Login to QA Demo Book Store', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoqademopage();
  await loginPage.openBookStore();
  await loginPage.openLoginForm();
  await loginPage.login('demouat@gmail.com', 'demouat@09'); 
});
  // await page.getByRole('heading', { name: 'Book Store Application' }).click();
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('textbox', { name: 'UserName' }).fill('demouat@gmail.com');
  // await page.getByRole('textbox', { name: 'Password' }).fill('Demouat@09');
  // await page.getByRole('button', { name: 'Login' }).click();
