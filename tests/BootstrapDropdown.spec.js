const {test,expect} = require('@playwright/test');

test('Handling Bootstrap dropdowns',async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator('.multiselect').click();

    //Assertion 1
    //Directly get locator and check the count
    //const options = await page.locator('ul>li label input');
    //await expect(options).toHaveCount(11);

    //Assertion 2
    //Get all the elements using $$ and get the length of the array
    //const options = await page.$$('ul>li label input');
    //await expect(options.length).toBe(11);

    //Select multiple options from the dropdown
    const options = await page.$$('ul>li label');

    for(let option of options)
    {
        const value = await option.textContent();
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click();
        }

        if(value.includes('HTML') || value.includes('CSS'))
        {
            await option.uncheck(); //deselecting the selected ones
        }

    }


    await page.waitForTimeout(5000);
})