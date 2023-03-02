const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");

describe('BStackDemo login', async () => {
    
    it(`Favourites navigates to login page`, async () => {
        await HomePage.openMenu();
        await HomePage.selectMenuOption('Favourites');
        await expect(await LoginPage.loginForm.isDisplayed()).toBe(true);
    });

});
