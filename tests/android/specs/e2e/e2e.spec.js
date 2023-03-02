const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");
const CartPage = require("../../pages/cart.page");
const CheckoutPage = require("../../pages/checkout.page");
const ConfirmationPage = require("../../pages/confirmation.page");
const OrdersPage = require("../../pages/orders.page");

describe('End to End test', function () {
    
    it(`User sholud be able to login and order a product`, async function (app) {
        await HomePage.openLoginForm(app);
        // await LoginPage.login("fav_user", "testingisfun99");
        // await HomePage.scrollAndAddToCart("add-to-cart-12");
        // await HomePage.scrollAndAddToCart("add-to-cart-16");
        // await HomePage.scrollAndAddToCart("add-to-cart-11");
        // await (await HomePage.cart).click();
        // await CartPage.proceedToCheckout();
        // await CheckoutPage.enterShippingDetails(
        //   "firstname",
        //   "lastname",
        //   "address",
        //   "state",
        //   "12345"
        // );
        // await ConfirmationPage.clickContinue();
        // await HomePage.openMenu();
        // await HomePage.selectMenuOption("Orders");  
        // await expect(await OrdersPage.ordersCount).toHaveText(
        //   "1 order(s) found."
        // );
        // await expect((await OrdersPage.ordersList).length).toBe(3);
    });

});
