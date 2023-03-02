const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");
const items = require('../../../resources/data/login_cases.json');

describe('Login validation by dataset', () => {

    items.forEach(async (item) => {
      afterEach("Reset application", async () => {
        await driver.reset();
      });

      it(`Login should not be successful for invalid accounts`, async () => {
        await HomePage.openLoginForm();
        await LoginPage.login(item.username, item.password);
        await expect(await LoginPage.txtLoginError).toHaveText(
          item.expected_message
        );
      });
    });

});
