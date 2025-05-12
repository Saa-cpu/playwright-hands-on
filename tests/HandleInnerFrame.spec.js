const {test,expect} = require('@playwright/test');
const { url } = require('inspector');

test('Handle nested frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    frame3.locator("input[name='mytext3']").fill('Frame 3 fill');

    //nested frame
    const childFramesInthePage = await frame3.childFrames();
    await childFramesInthePage[0].locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']").check();

    //const frame4 = frame3.frame({url: ""})

    await page.waitForTimeout(5000);

})