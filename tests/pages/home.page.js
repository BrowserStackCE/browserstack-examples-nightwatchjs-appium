const Page = require("./page");

class HomePage extends Page {
  
  async openLoginForm(app) {  
    await app.useXpath().click('//android.view.ViewGroup[@content-desc="menu"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView')
    await app.useXpath().click('//android.widget.TextView[@text="Sign In"]')

  }
  async openCart(app) {
    
    await app.useXpath().click('//android.view.ViewGroup[@content-desc="nav-cart"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView')
    
  }
  async openMenu(app) {

    await app.useXpath().click('//android.view.ViewGroup[@content-desc="menu"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView')

  }

  async selectMenuOption(app,option) {
   
    await app.useXpath().click(`//android.widget.TextView[@text='${option}']`);

  }

  async markProductFavourite(app,product) {
    await app.useXpath().click(`//android.view.ViewGroup[@content-desc="${product}"]`);
  }


  async logout(app) {
    await app.useXpath().click('//android.view.ViewGroup[@content-desc="nav-logout"]');
  }


  async scrollAndAddToCart(app,product) {

      await app.execute('mobile:scroll', {
        'strategy':'accessibility id',
        'selector':product
    });
    
      await app.useXpath().click(`//android.view.ViewGroup[@content-desc="${product}"]`)

  }
}
module.exports = new HomePage();
