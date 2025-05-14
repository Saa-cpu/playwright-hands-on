import { test, expect } from '@playwright/test'

test.skip('Single File Uploads', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput').setInputFiles("tests/uploadfiles/test1.pdf");

    await page.waitForTimeout(5000);

    await page.locator('#singleFileInput').setInputFiles([]);

    await page.waitForTimeout(5000);

})

