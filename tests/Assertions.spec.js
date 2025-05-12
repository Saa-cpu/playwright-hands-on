const  {test, expect} = require('@playwright/test');

test('Assertions',async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

    //.toHaveURL assertion
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

    //.toHaveTitle assertion
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //.toBeVisible assertion
    const imageLogo = await page.locator('.header-logo');
    await expect(imageLogo).toBeVisible();

    // .toBeEnabled assertion
    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();

    // .toBeChecked assertion
    const newsLetterCheckBox = await page.locator('#Newsletter'); //defalt this is checked
    await expect(newsLetterCheckBox).toBeChecked();

    //.toHaveAttribute assertion
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');

    // .toHaveText assertion
    await expect(page.locator('.page-title h1')).toHaveText('Register'); //pass full text

    // .toContainText assertion
    await expect(page.locator('.page-title h1')).toContainText('Reg'); //pass partial text, //case sensitive

    // .toHaveValue assertion
    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@gmail.com');
    await expect(emailInput).toHaveValue('test@gmail.com');

    // .toHaveCount assertion, can be used in dropdowns or any place to count the options
    const footerInformationTab =await page.locator("//div[@class='footer-block information']//li");
    await expect(footerInformationTab).toHaveCount(6);
    await expect(footerInformationTab).not.toHaveCount(5);

})