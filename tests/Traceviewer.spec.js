import {test, expect} from '@playwright/test';

test('Trace viewer', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    //click login button
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();
    await expect(page.locator('#logout2')).toBeVisible();

    //command to execute trace
    //npx playwright show-trace test-results\Traceviewer-Trace-viewer-chromium\trace.zip
    
})