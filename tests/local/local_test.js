
describe('Local Sample App', function () {

  it('Try Local Testing', async function (app) {
    app
      .click('id', 'com.example.android.basicnetworking:id/test_action')
      .click('id', 'com.example.android.basicnetworking:id/test_action')
      .assert.elementPresent({ selector: '/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.ScrollView/android.widget.TextView', locateStrategy: 'xpath' })
      .assert.textContains({ selector: '/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.ScrollView/android.widget.TextView', locateStrategy: 'xpath'}, 'Up and running')
      .pause(2000);
  });
});

