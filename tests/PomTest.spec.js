import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';


test('test', async ({page}) =>{

    //without pom
   // await page.goto('https://demoblaze.com/index.html');
   // await page.locator('#login2').click();
   // await page.locator('#loginusername').fill('pavanol');
   // await page.locator('#loginpassword').fill('test@123');
   // await page.locator("//button[normalize-space()='Log in']").click();


    //Login
    const loginTest = new LoginPage(page);
    await loginTest.gotoLoginPage();
    await loginTest.login('pavanol','test@123');

    await page.waitForTimeout(5000);
    //20:56



    //Home


    //Cart
})