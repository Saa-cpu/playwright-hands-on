const { test, expect } = require('@playwright/test');

test("Date Picker", async ({ page }) => {

    //Direct approch passing the date values to the field
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#datepicker").fill('05/18/2025');

    const year = '2027';
    const month = 'June';
    const day = '20';

    await page.locator('#datepicker').click();

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear == year && currentMonth == month) {
            break;
        }

        await page.locator('.ui-icon.ui-icon-circle-triangle-e').click(); //Next button
    }

    //Approch 1
    //date selection using loop
    /*
    const dates = await page.$$('.ui-datepicker-calendar tr a');

    for (const dt of dates) {
        if (await dt.textContent() == day) {
            await dt.click();
            break;
        }
    }
    */

    //Approch 2
    //selecting the date using the xpath but passing the value through parameter
    //Orginal xpath - //a[normalize-space()='6']

    await page.locator(`//a[normalize-space()=${day}]`).click(); //Here day is passed using the parameter
    //` tilt should be used to recognize variables

    await page.waitForTimeout(5000);


})