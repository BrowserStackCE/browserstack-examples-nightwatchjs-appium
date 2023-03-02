const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");

describe('BStackDemo login', async () => {

    afterEach('Reset application', async () => {
        await driver.reset();
    });

    it(`Login should be successful for account with username 'fav_user'`, async () => {
        await HomePage.openLoginForm();
        await LoginPage.login(browser.config.accounts[0].username, browser.config.accounts[0].password);
        await HomePage.openMenu();
        await expect(HomePage.txtLoggedInUser).toHaveTextContaining(browser.config.accounts[0].username);
        await HomePage.logout();
    });

    it(`Login should not be successful for account with username 'locked_user'`, async function () {
        await HomePage.openLoginForm();
        await LoginPage.login(browser.config.accounts[1].username, browser.config.accounts[1].password);
        await expect(await LoginPage.txtLoginError).toHaveText('Your account has been locked.');
    });

    it(`Login should not be successful for account with incorrect username and password`, async function () {
        await HomePage.openLoginForm();
        await LoginPage.login('invalid_user', browser.config.accounts[1].password);
        await expect(await LoginPage.txtLoginError).toHaveText('Invalid Username');

        await LoginPage.login(browser.config.accounts[0].username, 'wrong_password');
        await expect(await LoginPage.txtLoginError).toHaveText('Invalid Password');
    });

});
