import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';


test('test', async ({page}) =>{

    //Login
    const loginTest = new LoginPage(page);
    await loginTest.gotoLoginPage();
    await loginTest.login('pavanol','test@123');

    await page.waitForTimeout(5000);
    //20:56



    //Home


    //Cart
})