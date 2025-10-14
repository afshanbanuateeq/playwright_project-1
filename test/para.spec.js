import { test, expect } from "@playwright/test";
import ParaBankLogin from '../loginpage/DemoQA'
test('ParaBank forgot login info - customer lookup form', async ({ page }) => {
  await page.goto("https://parabank.parasoft.com");
  await page.getByRole('link', { name: 'Forgot login info?' }).click();
  await page.locator('#firstName').fill('banu');
  await page.locator('#lastName').fill('test');
  await page.locator('#address\\.street').fill('123 test street');
  await page.locator('#address\\.city').fill('chennai');
  await page.locator('#address\\.state').fill('tn');
  await page.locator('#address\\.zipCode').fill('500000');
  await page.locator('#ssn').fill('111-22-333');
  await page.getByRole('button', { name: 'Find My Login Info' }).click();
  await expect(page.getByText('The customer information provided could not be found.'))
    .toBeVisible();
});

// test.only('ParaBank login and request loan', async ({ page }) => {
  // await page.goto("https://parabank.parasoft.com");
  // await page.locator('[name="username"]').fill("banu123");
  // await page.locator('[name="password"]').fill("test123");
  // await page.getByRole('button', { name: 'Log In' }).click();

  // const loginPage = new ParaBankLogin(page);
  // loginPage.loginToParaBank("banu123","test123");
  // await page.getByRole('link', { name: 'Request Loan' }).click();
  // await page.locator('#amount').fill('20000000000000000');
  // await page.locator('#downPayment').fill('120000000');
  // await page.getByRole('button', { name: 'Apply Now' }).click();
  // await expect(page.getByText('You do not have sufficient')).toBeVisible();
// });

test('ParaBank login and transfer funds', async ({ page }) => {
  await page.goto("https://parabank.parasoft.com");
  await page.locator('[name="username"]').fill("banu123");
  await page.locator('[name="password"]').fill("test123");
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.locator('#amount').fill("1200");
  await page.getByRole('button', { name: 'Transfer' }).click();
  await expect(page.getByRole('heading', { name: 'Transfer Complete!' })).toBeVisible();
});
