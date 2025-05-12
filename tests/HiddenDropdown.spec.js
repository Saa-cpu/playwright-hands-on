const {test,expect} = require('@playwright/test');

test('Handling hidden dropdowns', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.locator("//input[@placeholder='Password']").fill('admin123')
    await page.locator("//button[normalize-space()='Login']").click();

    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]").click();

    //waiting for options 
    await page.waitForTimeout(3000);

    //to freeze the web page type the below in the console
    // setTimeout(() => { debugger; }, 3000);
    const jobTitles = await page.$$("//div[@role='listbox']//span");

    for(let title of jobTitles)
    {
        const value = await title.textContent();
        //console.log(value);
        if(value.includes('QA Engineer'))
        {
           await title.click();
           break;
        }
    }

    await page.waitForTimeout(5000);

})