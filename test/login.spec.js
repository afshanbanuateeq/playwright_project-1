const { test, expect } = require("@playwright/test");
const LoginPage = require("../loginpage/loginpage");

test("Login to application", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("https://demoqa.com/login");
  await loginPage.loginToApplication("demouat@gmail.com", "demouat@09");

  // Wait for navigation or the user profile element to appear
 await expect(page.getByPlaceholder("Type to search")).toBeVisible();
});


