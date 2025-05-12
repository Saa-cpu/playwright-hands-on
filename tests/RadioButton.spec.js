const {test,expect} = require('@playwright/test')

test('Handle RadioButton', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Radio button
    //male radio button checked verification
    await page.locator('#male').check(); 
    await expect(page.locator('#male')).toBeChecked();
    await expect(page.locator('#male').isChecked()).toBeTruthy();

    //female radio button NOT checked verification
    await expect(page.locator('#female')).not.toBeChecked();
    await expect(await page.locator('#female').isChecked()).toBeFalsy(); 

    await page.waitForTimeout(5000); // pause code for 5 secs


})