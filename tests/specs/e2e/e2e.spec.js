const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");
const CartPage = require("../../pages/cart.page");
const CheckoutPage = require("../../pages/checkout.page");
const ConfirmationPage = require("../../pages/confirmation.page");

describe('End to End test', function () {
    
    it(`User should be able to login and order a product`, async function (app) {
        await HomePage.openLoginForm(app);
        await LoginPage.login(app,"fav_user", "testingisfun99");
        await HomePage.scrollAndAddToCart(app,"add-to-cart-12");
        await HomePage.scrollAndAddToCart(app,"add-to-cart-16");
        await HomePage.scrollAndAddToCart(app,"add-to-cart-11");
        await HomePage.openCart(app);
        await CartPage.proceedToCheckout(app);
        await CheckoutPage.enterShippingDetails(app,
          "firstname",
          "lastname",
          "address",
          "state",
          "12345"
        );
        await ConfirmationPage.clickContinue(app);
        await HomePage.openMenu(app);
        await HomePage.selectMenuOption(app,"Orders");  
        await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="number-of-orders"]', locateStrategy: 'xpath'}, '1 order(s) found.')

    });

});
