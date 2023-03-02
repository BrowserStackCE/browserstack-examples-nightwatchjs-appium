const HomePage = require("../../pages/home.page");
const CartPage = require("../../pages/cart.page");

describe('Cart Test', async () => {

    it(`User should be able to delete from cart`, async () => {
        await (await HomePage.btnMenu).waitForDisplayed({ timeout: 3000 });
        await HomePage.scrollToElement({ anchor: "x" }, HomePage.btnAddToCart("add-to-cart-16"));
        await HomePage.addToCart("add-to-cart-16");
        await (await HomePage.cart).click();
        await driver.pause(1000);
        await CartPage.swipeOnElement(
          { anchor: "y" },
          { start: 80, end: 50 },
          await CartPage.item
        );
        await (await CartPage.deleteFromCart).click();
        await expect(await CartPage.productCount).toHaveText('0 product(s) found.');
    });

});
