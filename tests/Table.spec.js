const { test, expect } = require('@playwright/test');

test('Handle table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    //Find to number of rows and coloumns
    const coloumns = table.locator('thead th');
    console.log('No of coloumns ', await coloumns.count());

    const rows = table.locator('tbody tr');
    console.log('No of rows ', await rows.count());

    //Assertion to check rows and coloumn
    expect(await coloumns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    //out of the captured row filter the Smartwatch
    /*const matchedRow =  rows.filter({ //Will return the matched row
        has: page.locator('td'),
        hasText: 'Smartwatch'

    })
    await matchedRow.locator('input').check();
    */

    //select multiple products from the table
    //use a reusable function
    //await selectProduct(page,rows,'Smartwatch');
    //await selectProduct(page,rows,'Laptop');

    //4) capture and print all product details using loop


    const paginationPages = page.locator('#pagination li a');
    console.log('Pagination count',await paginationPages.count());

    for (let p = 0; p < await paginationPages.count(); p++) {
        if (p > 0) {
            await paginationPages.nth(p).click();
        }

        for (let i = 0; i < await rows.count(); i++) {
            const capturedRows = rows.nth(i);
            const tds = capturedRows.locator('td')
        

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }

        }

        await page.waitForTimeout(3000);

    }




    await page.waitForTimeout(5000);

})


//function that selects the product when the name of the product is passed
async function selectProduct(page, rows, productName) {
    const matchedRow = rows.filter({ //Will return the matched row
        has: page.locator('td'),
        hasText: productName

    })
    await matchedRow.locator('input').check();
    console.log('Select Product', productName);
}