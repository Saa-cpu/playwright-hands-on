import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';


test('test', async ({page}) =>{

    //Login
    const loginTest = new LoginPage(page);
    await loginTest.gotoLoginPage();
    await loginTest.login('pavanol','test@123');

    //Home page activities
    const Home = new HomePage(page);
    await Home.addProductToCart('Nexus 6');
    await Home.gotoCart();

  



    //Home


    //Cart
})