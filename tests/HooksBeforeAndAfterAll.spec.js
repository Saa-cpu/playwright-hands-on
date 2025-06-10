import { test, expect } from '@playwright/test';

let page;

test.beforeAll(async ({browser})=>{

    page = await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');

    //click login button
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('saajidh')
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();

})


test.afterAll(async ()=>{
    
     //Logging out
    await page.locator('#logout2').click();

})


test('Product Details', async () => {

    //Get all products
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);

    await page.waitForTimeout(4000);

})


test('Add to cart', async () => {

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

})