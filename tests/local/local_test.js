
describe('Local Sample App', function () {

  it('Try Local Testing', async function (app) {
    app
      .click('id', 'com.example.android.basicnetworking:id/test_action')
      .click('id', 'com.example.android.basicnetworking:id/test_action')
      .assert.elementPresent({ selector: 'com.example.android.basicnetworking:id/textView', locateStrategy: 'id' })
      .assert.textContains({ selector: 'com.example.android.basicnetworking:id/textView', locateStrategy: 'id'}, 'Up and running')
      .pause(2000);
  });
});

