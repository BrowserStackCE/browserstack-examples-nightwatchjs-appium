
describe('Wikipedia Android app test', function () {
  before(function (app) {
    app.click('id', 'org.wikipedia:id/fragment_onboarding_skip_button');
  });

  it('Search for BrowserStack', async function (app) {
    app
      .click('id', 'org.wikipedia:id/search_container')
      .sendKeys('id', 'org.wikipedia:id/search_src_text', 'browserstack')
      .assert.elementPresent({ selector: 'org.wikipedia:id/page_list_item_title', locateStrategy: 'id' })
      .assert.textEquals({ selector: 'org.wikipedia:id/page_list_item_title', locateStrategy: 'id', index: 0 }, 'BrowserStack')
      .click({ selector: 'org.wikipedia:id/page_list_item_title', locateStrategy: 'id', index: 0 })
      .pause(2000);
  });
});

