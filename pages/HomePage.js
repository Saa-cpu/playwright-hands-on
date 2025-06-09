const { expect } = require("@playwright/test");
exports.HomePage =
    class HomePage {

        constructor(page) {
            this.page = page;
            this.productList = "//div[@id='tbodyid']/div/div/div/h4/a"; //returns all the products
            this.addToCartButton = '.btn.btn-success.btn-lg';
            this.cartLinkButton = '#cartur';
        }

        async addProductToCart(productName) {
            const prodList = await this.page.$$(this.productList);
            for (const product of prodList) {
                if (productName === await product.textContent()) {
                    await product.click();
                    break;
                }
            }

            await this.page.on('dialog', async dialog => {
                expect(dialog.message()).toContain('Product added.');
                await dialog.accept();
            })

            await this.page.locator(this.addToCartButton).click();

        }

        async gotoCart() {
            await this.page.locator(this.cartLinkButton).click();
        }



    }