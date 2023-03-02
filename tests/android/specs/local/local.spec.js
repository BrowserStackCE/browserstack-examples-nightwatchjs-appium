const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");
const SettingsPage = require("../../pages/settings.page");

describe('Local Test', async () => {

    beforeEach('Set Local API', async () => {
        await HomePage.openMenu();
        await HomePage.selectMenuOption('Settings');
        await SettingsPage.openUrlTab();
        await SettingsPage.setUrl('http://bs-local.com:3000/api/');
        await SettingsPage.updateConfiguration();
    });

    it(`Login message from local server should be shown`, async () => {
        await HomePage.openLoginForm();
        await LoginPage.login(browser.config.accounts[1].username, browser.config.accounts[1].password);
        await driver.pause(20000);
        await expect(await LoginPage.txtLoginError).toHaveText('Something went wrong');
    });

});
