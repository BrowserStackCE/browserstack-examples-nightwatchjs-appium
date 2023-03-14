const LoginPage = require("../../pages/login.page");
const HomePage = require("../../pages/home.page");

describe('BStackDemo login',  function () {
    
    it(`Favourites navigates to login page`, async function(app) {
        await HomePage.openMenu(app);
        await HomePage.selectMenuOption(app,'Favourites');
        await app.assert.visible({ selector: '//android.view.ViewGroup[@content-desc="login-form"]',locateStrategy: 'xpath'})

    });

});
