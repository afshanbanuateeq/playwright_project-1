// fixture/fixtureqa.spec.js
const { test: base } = require('@playwright/test');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    // Directly perform login steps here
    await page.goto('https://demoqa.com');
    await page.getByText('Book Store').click();
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('#userName').fill('demouat@gmail.com');
    await page.locator('#password').fill('demouat@09');
    await page.locator('#login').click();

    // Expose page object to tests
    await use(page);
  }
});

module.exports = { test };
