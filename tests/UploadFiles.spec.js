import { test, expect } from '@playwright/test'

test.skip('Single File Uploads', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput').setInputFiles("tests/uploadfiles/test1.pdf");

    await page.waitForTimeout(5000);

    await page.locator('#singleFileInput').setInputFiles([]);

    await page.waitForTimeout(5000);

})

test('Multiple File Uploads', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator("#filesToUpload")
    .setInputFiles(['tests/uploadfiles/test1.pdf','tests/uploadfiles/test2.pdf']);

    await page.waitForTimeout(5000);

    await expect(page.locator("div[class='main'] li:nth-child(1)")).toHaveText('test1.pdf');
    await expect(page.locator("div[class='main'] li:nth-child(2)")).toHaveText('test2.pdf');

    await page.waitForTimeout(3000);

    await page.locator("#filesToUpload").setInputFiles([]);
    await expect(page.locator("//li[normalize-space()='No Files Selected']")).toHaveText('No Files Selected');

    await page.waitForTimeout(3000);
})

