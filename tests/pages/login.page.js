const Page = require("./page");

class LoginPage extends Page {

  async login(app,username, password) {
    await app.useXpath().click('//android.widget.Spinner[@content-desc="username-input"]');
    await app.useXpath().click(`//*[@text = '${username}']`);
    await app.useXpath().click('//android.widget.Spinner[@content-desc="password-input"]');
    await app.useXpath().click(`//*[@text = '${password}']`);
    await app.useXpath().click('//android.view.ViewGroup[@content-desc="login-btn"]');
  }
}

module.exports = new LoginPage();
