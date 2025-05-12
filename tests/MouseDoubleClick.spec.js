const {test,expect} = require('@playwright/test');

test('Mouse Double Click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const btnDoubleClick = await page.locator("//button[normalize-space()='Copy Text']");

    //double click the button
    await btnDoubleClick.dblclick();

    //verify whether the content is copied to the second field
    const fieldTwo =page.locator('#field2');

    await expect(fieldTwo).toHaveValue('Hello World!')

    await page.waitForTimeout(3000);
    


})