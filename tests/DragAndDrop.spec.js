import { test, expect } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const source = page.locator("#draggable");
    const target = page.locator("#droppable");

    //Approch 1
    /*
    await source.hover();
    await page.mouse.down();

    await target.hover();
    await page.mouse.up();
    */

    //Approch 2
    await source.dragTo(target)

    const statusOfDrop = page.locator('#droppable p');

    await expect(statusOfDrop).toHaveText('Dropped!');

    await page.waitForTimeout(4000);


})