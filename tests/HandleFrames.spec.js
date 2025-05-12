const {test,expect} = require('@playwright/test');

test('Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frames = await page.frames();
    console.log('Number of frames', frames.length);


    //approch 1 using name or url

    //await page.frame('nameoftheframe')
    //const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    //await frame1.locator("input[name='mytext1']").fill('John');

    //approch 2 using frame locator

    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");
    await inputBox.fill('Hello');



    await page.waitForTimeout(5000);

  


})