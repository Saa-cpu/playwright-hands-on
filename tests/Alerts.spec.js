const {test,expect} =  require('@playwright/test');

//alert dialog popup
test.skip('Handling Alerts',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handling
    //AKA Dialog window handle, we have to do this before clicking the button which gives the alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })

    await page.locator('#alertBtn').click();

    await page.waitForTimeout(5000);


})


//confirmation dialog
test.skip('Confirmation box with Ok and Cancel',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handling
    //AKA Dialog window handle, we have to do this before clicking the button which gives the alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); //close using ok button
        // await dialog.dismiss(); //close using the cancel button

    })

    await page.locator('#confirmBtn').click();
    const confirmBox = await page.locator('#demo').textContent();

    expect(confirmBox).toBe('You pressed OK!');

    await page.waitForTimeout(5000);

    
})

//prompt dialog
test('Prompt Dialog',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handling
    //AKA Dialog window handle, we have to do this before clicking the button which gives the alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John'); //close using ok button
        // await dialog.dismiss(); //close using the cancel button

    })

    await page.locator('#promptBtn').click();
    const confirmBox = await page.locator('#demo').textContent();

    expect(confirmBox).toBe('Hello John! How are you today?');

    await page.waitForTimeout(5000);
    
})