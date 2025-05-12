const {test,expect} = require('@playwright/test');

test('Handle Checkboxes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Check the Monday checkbox
    await page.locator("#monday").check();

    //assertion to check whether Monday is checked
    await expect(page.locator("#monday")).toBeChecked();
    expect(page.locator("#monday").isChecked()).toBeTruthy();

    //assertion to check whether Sunday is NOT checked
    await expect(page.locator("#sunday")).not.toBeChecked();
    expect(await page.locator("#sunday").isChecked()).toBeFalsy();

    //Handle multiple checkboxes
    //array of locators to be selected
    const checkboxLocators = [
        '#wednesday',
        '#friday'
    ]
    
    for(const chlocator of checkboxLocators) //select multiple checkboxes
    {
        await page.locator(chlocator).check();
        console.log('The Selected checkboxes are: ',chlocator);
    }

    await page.waitForTimeout(5000); // pause code for 5 secs

    for(const chlocator of checkboxLocators) //uncheck multiple checkboxes
    {
        if(await page.locator(chlocator).isChecked())
        {
            await page.locator(chlocator).uncheck();
            console.log('The unselected checkboxes are: ',chlocator);
        }
        
    }


    

})