const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");
const items = require('../../../resources/data/login_cases.json');

describe('Login validation by dataset', function()  {

  it(`Login should not be successful for first invalid account`, async function(app) {
    await HomePage.openLoginForm(app);
    await LoginPage.login(app,items[0].username, items[0].password);
    await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="api-error"]', locateStrategy: 'xpath'}, items[0].expected_message);
    
    await app.appium.startActivity({
      appPackage: 'com.browserstack.demo.app',
      appActivity: 'host.exp.exponent.MainActivity'
    })
  });
  it(`Login should not be successful for second invalid accounts`, async function(app) {
    await HomePage.openLoginForm(app);
    await LoginPage.login(app,items[1].username, items[1].password);
    await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="api-error"]', locateStrategy: 'xpath'}, items[1].expected_message);
  });
  

});
