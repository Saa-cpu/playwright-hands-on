import { test, expect } from '@playwright/test';

// screenshot: 'on' in config file under use: {}
// we can use there as well then all tests will have screenshots and will be in test results and part of the report as well.

test('page screenshot', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'HomePage.png' })
})

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true })
})

test('Element screenshot', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(3000);
    const MacBook = await page.locator('//*[@id="tbodyid"]/div[1]/div');
    await MacBook.screenshot({ path: 'tests/screenshots/' + Date.now() + 'Macbook.png'})
})