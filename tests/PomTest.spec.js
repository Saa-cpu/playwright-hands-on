import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';


test('test', async ({page}) =>{

    //Login
    const loginTest = new LoginPage(page);
    await loginTest.gotoLoginPage();
    await loginTest.login('saajidh','test@123');

    //Home page activities
    const Home = new HomePage(page);
    await Home.addProductToCart('Nexus 6');
    await page.waitForTimeout(3000);
    await Home.gotoCart();

    //Cart page activities
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const cartStatus = await cart.checkProductInCart('Nexus 6');
    expect(cartStatus).toBe(true);

})