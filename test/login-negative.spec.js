import {test, expect } from "../lib/BaseTest";
test('login to bookstore', async ({ loginToDemoQA,page  }) => {

  await loginToDemoQA.loginToDemoQA("demouat@gmail.com","demouat@09");
  
  await expect(loginToDemoQA.verifyPlaceHolder("Type to search")).toBeVisible();
});
test('login to bookstore with wrong credentials', async ({ loginToDemoQA,page }) => {

  await loginToDemoQA.loginToDemoQA("demouat@gmail.com","demouat@0");
await expect(page.locator('#name')).toContainText("Invalid username or password");
});


// test('login to bookstore with empty password', async ({ page }) => {
//   await page.goto("https://demoqa.com");
//   await page.getByText("Book Store Application", { exact: true }).click();
//   await page.locator("#login").click();
//   await page.locator('#userName').waitFor({ state: 'visible' });
//   await page.locator('#userName').fill("demouat@gmail.com");
//   await page.locator("#login").waitFor({ state: 'visible' });
//   await page.locator("#login").click();
//   await page.locator('#password').waitFor({ state: 'visible' });
//   await expect(page.locator('#password')).toHaveClass(/is-invalid/);
// });
// test('login to bookstore with empty username', async ({ page }) => {
//   await page.goto("https://demoqa.com");
//   await page.getByText("Book Store Application", { exact: true }).click();
//   await page.locator("#login").click();
//   await page.locator('#login').waitFor({ state: 'visible' });
//   await page.locator("#login").click();
//   await expect(page.locator('#userName')).toHaveClass(/is-invalid/);
// });
// test ('navigate to "Git Pocket Guide" after login', async ({ page }) => {
//   await page.goto("https://demoqa.com");
//   await page.getByText("Book Store Application", { exact: true }).click();
//   await page.locator("#login").click();
//   await page.locator('#userName').fill("demouat@gmail.com");
//   await page.locator('#password').fill("demouat@09");
//   await page.locator("#login").click();
//   await expect(page.getByPlaceholder("Type to search")).toBeVisible({ timeout: 10000 });
// await expect(page.getByText("Git Pocket Guide", { exact: true })).toBeVisible({ timeout: 10000 });
// await page.getByText("Git Pocket Guide", { exact: true }).click();
// });
