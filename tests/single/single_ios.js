describe('IOS app test', function () {
  
    it('Text Verification', async function (app) {
      app
        .useXpath().click('//XCUIElementTypeButton[@name="Text Button"]')
        .useXpath().click("//XCUIElementTypeTextField[@name='Text Input']")
        .useXpath().sendKeys("//XCUIElementTypeTextField[@name='Text Input']",['Browserstack',browser.Keys.ENTER])
        .assert.elementPresent({ selector: '//XCUIElementTypeStaticText[@name="Text Output"]', locateStrategy: 'xpath' })
        .assert.textEquals({ selector: '//XCUIElementTypeStaticText[@name="Text Output"]', locateStrategy: 'xpath'}, 'Browserstack')
        .pause(2000);
    });
  });
  
  
  