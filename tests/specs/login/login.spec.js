const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");

describe('BStackDemo login', function () {
    
  

    it(`Login should be successful for account with username 'fav_user'`, async function(app) {
        await HomePage.openLoginForm(app);
        await LoginPage.login(app,"fav_user", "testingisfun99");
        
        await HomePage.openMenu(app);
        await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="username"]', locateStrategy: 'xpath'}, 'Welcome fav_user')
        await HomePage.logout(app);
        await app.appium.startActivity({
            appPackage: 'com.browserstack.demo.app',
            appActivity: 'host.exp.exponent.MainActivity'
          })
    });

    it(`Login should not be successful for account with username 'locked_user'`, async function (app) {
        await HomePage.openLoginForm(app);
        await LoginPage.login(app,"locked_user", "testingisfun99");
    await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="api-error"]', locateStrategy: 'xpath'}, 'Your account has been locked.')
    await app.appium.startActivity({
        appPackage: 'com.browserstack.demo.app',
        appActivity: 'host.exp.exponent.MainActivity'
      })
    });

    it(`Login should not be successful for account with incorrect username and password`, async function (app) {
        await HomePage.openLoginForm(app);
        await LoginPage.login(app,"invalid_user", "testingisfun99");
       await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="api-error"]', locateStrategy: 'xpath'}, 'Invalid Username')

        await LoginPage.login(app,"fav_user", "wrong_password");
           await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="api-error"]', locateStrategy: 'xpath'}, 'Invalid Password')
           
    });

});
