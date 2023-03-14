const Page = require("./page");

class CheckoutPage extends Page {
  
  async enterShippingDetails(app,firstName, lastName, address, state, postalCode) {
    
    await app.useXpath().sendKeys('//android.widget.EditText[@content-desc="firstNameInput"]',firstName);
    await app.useXpath().sendKeys('//android.widget.EditText[@content-desc="lastNameInput"]',lastName);
    await app.useXpath().sendKeys('//android.widget.EditText[@content-desc="addressInput"]',address);
    await app.useXpath().sendKeys('//android.widget.EditText[@content-desc="stateInput"]',state);
    await app.useXpath().sendKeys('//android.widget.EditText[@content-desc="postalCodeInput"]',postalCode);
    await app.useXpath().click('//android.view.ViewGroup[@content-desc="submit-btn"]');

  }
}

module.exports = new CheckoutPage();
