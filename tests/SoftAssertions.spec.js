const {test, expect} =require('@playwright/test');

test('Soft Assertions', async({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    //Hard assertions
    /*await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect(page.locator('.navbar-brand')).toBeVisible();*/

    //Soft assertions
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();


})