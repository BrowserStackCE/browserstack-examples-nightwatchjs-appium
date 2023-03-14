const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");

describe('User', function () {


    it(`should see existing orders for 'existing_orders_user'`, async function(app) {
        await HomePage.openLoginForm(app);
        await LoginPage.login(app,
          "existing_orders_user",
          "testingisfun99"
        );
        await HomePage.openMenu(app);
        await HomePage.selectMenuOption(app,"Orders");
        await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="number-of-orders"]', locateStrategy: 'xpath'}, '5 order(s) found.')
        await HomePage.openMenu(app);
        await HomePage.logout(app);
        await app.appium.startActivity({
          appPackage: 'com.browserstack.demo.app',
          appActivity: 'host.exp.exponent.MainActivity'
        })
    });

    it(`should be able to add to favourites`, async function (app) {
        await HomePage.openLoginForm(app);
        await LoginPage.login(app,
          "existing_orders_user",
          "testingisfun99"
        );
        await HomePage.markProductFavourite(app,"mark-favourite-12");
        await HomePage.markProductFavourite(app,"mark-favourite-16");
        await HomePage.openMenu(app);
        await HomePage.selectMenuOption(app,"Favourites");
        await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="number-of-favourites"]', locateStrategy: 'xpath'}, '2 product(s) marked favourite.')

    });

});
