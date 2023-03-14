const Page = require("./page");

class CartPage extends Page {
    
    async proceedToCheckout(app) {
        await app.useXpath().click('//android.view.ViewGroup[@content-desc="checkout-btn"]')

    }
}

module.exports = new CartPage();
