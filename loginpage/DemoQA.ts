import { Locator, Page } from '@playwright/test';

class DemoQALoginPage{
    page:Page;

    constructor(p:Page){
        this.page = p;
    }

    async loginToDemoQA(username:string,password:string){
  await this.page.goto("https://demoqa.com");
    await this.page.getByText("Book Store Application", { exact: true }).click();
    await this.page.locator("#login").click();
    await this.page.locator('#userName').fill(username);
     await this.page.locator('#password').fill(password);
     await this.page.locator("#login").click();

    }

   async verifyPlaceHolder(placeHolderName:string){
      await this.page.getByPlaceholder(placeHolderName)
    }
}

export default DemoQALoginPage;
