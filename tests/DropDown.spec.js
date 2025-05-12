const {test,expect}= require('@playwright/test');

test('Handle dropdowns',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //select by
    //label + visible text
    //await page.locator('#country').selectOption({label:'India'}); 

    //visible text only
    //await page.locator('#country').selectOption('India');

    //using the value
    //await page.locator('#country').selectOption({value:'uk'});

    //using the index
    //await page.locator('#country').selectOption({index:1 });

    //Another option to directly option method
    //await page.selectOption('#country','United States');

    //Assertions

    // 1) Check the number of options in the dropdown
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);

    // 2) Check the number of options capture in a array and apply length
    //const options = await page.$$('#country option');
    // console.log('Number of options',options.length);
    //await expect(options.length).toBe(10);

    // 3) Check presence of value in the dropdown 
    //const content = await page.locator('#country').textContent();
    //expect(content.includes('Brazil')).toBeTruthy();

    // 4) Check presense and click the value in the dropdown approch 2 - using loop
    const options = await page.$$('#country option');
    let status=false;

    for(const option of options)
    {

        let value= (await option.textContent())?.trim();
        console.log(value);
        if(value.includes('France'))
        {
            console.log('Searching value found');
            await page.selectOption('#country',value);
            status=true;
            break;
        }
        
    }

    expect(status).toBeTruthy();

    await page.waitForTimeout(5000);

})