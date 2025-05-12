const {test, expect} = require('@playwright/test');
const { log } = require('console');

test('Locate multiple elements', async ({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    //const links = await page.$$('a');
   
    //looping through all the links
    /* for(const link of links)
    {
        const linkText = await link.textContent();
        console.log(linkText);
    }*/

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    //looping through all the 9 products
    for(const product of products)
    {
        const productText = await product.textContent();
        console.log(productText)
    }

    await page.close();
})