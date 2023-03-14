const HomePage = require("../../pages/home.page");
const CartPage = require("../../pages/cart.page");

describe('Cart Test', function() {

    it(`User should be able to delete from cart`, async function (app){
        await HomePage.scrollAndAddToCart(app,"add-to-cart-16");
        await HomePage.openCart(app);
        await CartPage.swipeOnElement(app);
        await app.useXpath().click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]');
        await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="number-of-products"]', locateStrategy: 'xpath'}, '0 product(s) found.')

    });

});
