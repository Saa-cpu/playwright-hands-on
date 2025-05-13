import {test,expect} from '@playwright/test';

test('Keyboard actions', async ({page}) =>{

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator("textarea[placeholder='Paste one version of the text here.']").fill('Welcome to Test Automation');

    //Ctrl + A 
    await page.keyboard.press('Control+A');

    //Ctrl + C
    await page.keyboard.press('Control+C');

    //Press Tab 
    await page.keyboard.down('Tab');

    //Release Tab
    await page.keyboard.up('Tab');

    //Ctrl + V
    await page.keyboard.press('Control+V');

    await page.locator('#recaptcha').click();

    const textComparison = page.locator("//b[normalize-space()='100%']");

    await expect(textComparison).toHaveText('100%');

    await page.waitForTimeout(5000);
})