import { Page, expect } from '@playwright/test';

class DemoQALoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loginToDemoQA(username: string, password: string) {
    await this.page.goto('https://demoqa.com');
    await this.page.getByText('Book Store Application', { exact: true }).click();
    await this.page.locator('#login').click();
    await this.page.locator('#userName').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#login').click();
  }

  async verifyPlaceHolder(placeHolderName: string) {
    const input = this.page.getByPlaceholder(placeHolderName);
    await expect(input).toBeVisible(); // ✅ use assertion to verify
  }
}

export default DemoQALoginPage;
