import{test,expect} from  '@playwright/test';
test('login to my account', async ({page}) => {
await page.goto("https://parabank.parasoft.com");
  await page.locator('[name="username"]').fill("banu123");
  await page.locator('[name="password"]').fill("test123");
  await page.getByRole('button', { name: 'Log In' }).click();
});

// test('login to QA', async ({ page }) => {
//   await page.goto("https://demoqa.com");
//   await page.getByText("Book Store Application", { exact: true }).click();
//  await page.locator("#login").click();
//   await page.fill('.mr-sm-2.form-control', 'demouat@gmail.com');
// });


