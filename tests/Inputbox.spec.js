const {test,expect} = require('@playwright/test')

test('Handle Inputbox', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#name')).toBeEmpty();
    await expect(page.locator('#name')).toBeEditable();
    await expect(page.locator('#name')).toBeEnabled();

    await page.locator('#name').fill("John");

    await page.waitForTimeout(5000); // pause code for 5 secs


})