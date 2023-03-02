const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");
const OrdersPage = require("../../pages/orders.page");
const FavouritesPage = require("../../pages/favourites.page");

describe('User', async () => {

    afterEach('Reset application', async () => {
      if (driver.isIOS) {
        await HomePage.openMenu();
        await HomePage.logout();
      } else {
        await driver.reset();
      }
    });

    it(`should see existing orders for 'existing_orders_user'`, async () => {
        await HomePage.openLoginForm();
        await LoginPage.login(
          browser.config.accounts[3].username,
          browser.config.accounts[3].password
        );
        await HomePage.openMenu();
        await HomePage.selectMenuOption("Orders");
        await expect(await OrdersPage.ordersCount).toHaveText(
          "5 order(s) found."
        );
    });

    it(`should be able to add to favourites`, async () => {
        await HomePage.openLoginForm();
        await LoginPage.login(
          browser.config.accounts[4].username,
          browser.config.accounts[4].password
        );
        await HomePage.markProductFavourite("mark-favourite-12");
        await HomePage.markProductFavourite("mark-favourite-16");
        await HomePage.openMenu();
        await HomePage.selectMenuOption("Favourites");
        await expect(await FavouritesPage.favouritesCount).toHaveText(
          "2 product(s) marked favourite."
        );
    });

});
