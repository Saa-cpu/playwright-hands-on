const { test, expect } = require('@playwright/test');

test('Mouse Hover', async ({ page }) => {

    await page.goto('https://www.onlineshopdemo.co.uk/');

    const desktop = page.locator("//div[contains(text(),'Woman')]");
    await desktop.hover();

    await page.waitForTimeout(5000);

})