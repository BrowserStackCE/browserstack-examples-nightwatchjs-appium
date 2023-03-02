const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");
const OffersPage = require("../../pages/offers.page");
const SingaporeLocation = { latitude: "1.0", longitude: "103.0", altitude: "10.0" };
const AmsterdamLocation = { latitude: "52.36", longitude: "4.9", altitude: "10.0" };

describe('Offers section', async () => {

    afterEach('Reset application', async () => {
      if(driver.isIOS){
        await HomePage.openMenu();
        await HomePage.logout();
      } else {
        await driver.reset();
      }      
    });

    it(`should show offers for 'Singapore'`, async () => {
        await HomePage.openLoginForm();
        await LoginPage.login(
          browser.config.accounts[0].username,
          browser.config.accounts[0].password
        );
        await driver.setGeoLocation(SingaporeLocation);
        await HomePage.openMenu();
        await HomePage.selectMenuOption("Offers");
        if (driver.isIOS){ await (await OffersPage.allowOnce).click(); }
        await driver.pause(2000);
        await expect(await (await OffersPage.offerList).length).toBe(3);
    });

    it(`should not show offers for 'Amsterdam'`, async () => {
        await HomePage.openLoginForm();
        await LoginPage.login(
          browser.config.accounts[0].username,
          browser.config.accounts[0].password
        );
        await driver.setGeoLocation(AmsterdamLocation);
        await HomePage.openMenu();
        await HomePage.selectMenuOption("Offers");
        await driver.pause(2000);
        await expect(await (await OffersPage.noOffer).isDisplayed()).toBe(true);
    });

});
