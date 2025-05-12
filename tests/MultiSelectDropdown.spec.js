const {test,expect} = require('@playwright/test');

test('Multi Select Dropsown',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['Red','Blue','Yellow']);

    //Assertions
    //const colors = await page.locator('#colors option');
    //await expect(colors).toHaveCount(7);

    //check using the array
    //const colors = await page.$$('#colors option');
    //await expect(colors.length).toBe(7);

    //check whether a content is present in the dropdown
    const colors = await page.locator('#colors').textContent();
    await expect(colors.includes('Blue')).toBeTruthy();
    await expect(colors.includes('Black')).toBeFalsy();







    await page.waitForTimeout(5000);

})