const {test, expect} = require('@playwright/test');

test('Built in Locators', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    page.waitForSelector("//div[@class='orangehrm-login-branding']");
    const logow = await page.locator("//div[@class='orangehrm-login-branding']");
    
    //const logo = await page.getByAltText('company-branding');
    await expect(logow).toBeVisible();

    //locate by placeholder
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    //locate by role
    await page.getByRole('button', {type: 'submit'}).click();

    //locate by role
    //username here is dynamic need to handle
    const username = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(username)).toBeVisible();
   
    await page.close();

})
