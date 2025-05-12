const { test, expect } = require('@playwright/test');

test('Reading table data', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const StaticTable = page.locator("table[name='BookTable']");
    const rows = StaticTable.locator("tr");
    const coloumn = StaticTable.locator("tr th");

    console.log('No of rows', await rows.count());
    console.log('No of coloumn', await coloumn.count());

    for (let i = 0; i < await rows.count(); i++) {
        const capturedRows = rows.nth(i);
        const tds = capturedRows.locator("td");

        for (let j = 0; j < await tds.count() - 1; j++) { //reads all coloums except the last one
            console.log(await tds.nth(j).textContent());
        }

    }



    await page.waitForTimeout(3000);

})