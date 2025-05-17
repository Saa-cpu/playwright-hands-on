import { test, except, expect } from '@playwright/test';

test('Product Details', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    //click login button
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();

    //Get all products
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);

    //Logging out
    await page.locator('#logout2').click();

})


test('Add to cart', async ({ page }) => {




})