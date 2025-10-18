import{test,expect} from '@playwright/test'

test('login bookstore', async({page})=>{


await page.goto("https://demoqa.com/");
await page.getByText("Book Store Application",{exact:true}).click();

// await page.getByRole('heading', { name: 'Book Store Application' }).click()

// await page.getByRole('button', { name: 'Login' }).click()

await page.goto("https://demoqa.com/");
    await page.getByText("Book Store Application",{exact:true}).click();

    await page.locator("#login").click();
    await page.locator("#userName").fill("demouat@gmail.com");
    await page.locator("#password").fill("Demouat@09");
    await page.locator("#login").click();
    await expect(page.getByPlaceholder("Type to search")).toBeVisible();


})