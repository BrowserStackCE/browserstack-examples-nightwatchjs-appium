const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");
const SingaporeLocation = { latitude: "1.0", longitude: "103.0", altitude: "10.0" };
const AmsterdamLocation = { latitude: "52.36", longitude: "4.9", altitude: "10.0" };

describe('Offers section', function () {


    it(`should show offers for 'Singapore'`, async function (app) {
        await HomePage.openLoginForm(app);
        await LoginPage.login(app,"fav_user", "testingisfun99");
        await app.appium.setGeolocation(SingaporeLocation);
        await HomePage.openMenu(app);
        await HomePage.selectMenuOption(app,"Offers");
        await app.click('id', 'com.android.permissioncontroller:id/permission_allow_foreground_only_button');
        await app.pause(2000);
        let offers=await app.useXpath().findElements('//android.view.ViewGroup[@content-desc="offer"]')
        await app.assert.equal(offers.length,3);
        await HomePage.openMenu(app);
        await HomePage.logout(app);

        

    });

    it(`should not show offers for 'Amsterdam'`,async function (app) {
        await HomePage.openLoginForm(app);
        await LoginPage.login(app,"fav_user", "testingisfun99");
        await app.appium.setGeolocation(AmsterdamLocation);
        await HomePage.openMenu(app);
        await HomePage.selectMenuOption(app,"Offers");
        await app.pause(2000);
        // await app.assert.textEquals({ selector: '//android.widget.TextView[@content-desc="no-offers"]', locateStrategy: 'xpath'}, 'Sorry we do not have any promotional offers in your city.')

    });

});
