import { test, expect } from '@playwright/test';

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

    await page.waitForTimeout(4000);

    //Logging out
    await page.locator('#logout2').click();

})


test('Add to cart', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    //click login button
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();

    //Click the product and add to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    //Handling the alert windown
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();

    })

    await page.waitForTimeout(4000);

    //Logging out
    await page.locator('#logout2').click();


})