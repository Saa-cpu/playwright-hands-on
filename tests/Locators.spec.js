const {test, expect} = require('@playwright/test');

test('Locators page', async ({page})=>
{
    await page.goto('https://demoblaze.com/index.html')

    //click on login button - property
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    //provide username - css
    //await page.locator('#loginusername').fill('saajidh');
    await page.fill('#loginusername','saajidh')
    //await page.type('#loginusername')

    //provide password - css
    //await page.locator('#loginpassword').fill('');
    await page.fill('#loginpassword','test@123')
    //await page.type('ff')

    //click the Login button
    await page.click("//button[normalize-space()='Log in']")

    //verify the logout link presence
    const logoutLink = await page.locator("//a[@id='logout2']")
    await expect(logoutLink).toBeVisible();

    const linkText = await logoutLink.textContent();
    console.log('The link is : ',linkText);

    await page.close()

})