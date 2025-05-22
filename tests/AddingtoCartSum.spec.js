import { test, expect } from '@playwright/test';
import { log } from 'console';

test('Add to cart and sum', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/'); // The login steps
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page.locator('#add-to-cart-sauce-labs-backpack').click(); //Clicking add to cart
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();

    await page.locator('.shopping_cart_link').click(); //Clicking the shop cart

    const pricesInCart = await page.$$('.inventory_item_price'); //Getting all the item prices in the cart

    let sum = 0;
    for (let price of pricesInCart) {
        const extracted = await price.textContent();
        const afterex = parseFloat(extracted.replace('$', '').trim())
        console.log(afterex);
        sum += afterex;
    }

    console.log('The sum is', sum);

    await page.click('#checkout'); //Clicking checkout

    await page.fill('#first-name', 'Saa'); //Filling billing details
    await page.fill('#last-name', 'jith');
    await page.fill('#postal-code', '12000');

    await page.click('#continue'); //Continue after filling billing details

    const subTotal = await page.locator('.summary_subtotal_label').textContent();
    console.log('The sub total is', subTotal);
    const filteredSubTotal = subTotal.replace(/[^0-9.]/g, '').trim();
    const clean = parseFloat(filteredSubTotal)

    console.log('The filtered sub is ', clean);

    expect(sum).toEqual(clean);


})