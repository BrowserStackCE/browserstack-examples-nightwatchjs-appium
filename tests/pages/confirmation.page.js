const Page = require("./page");

class ConfirmationPage extends Page {
  

  async clickContinue(app){
    await app.useXpath().click('//android.view.ViewGroup[@content-desc="continue-btn"]');

  }
}

module.exports = new ConfirmationPage();
