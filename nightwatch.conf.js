const additonalEnvironments = require("./environments");

if(!additonalEnvironments.test_settings)
  additonalEnvironments.test_settings = {};

const browserStack = {
  webdriver: {
    start_process: false
  },

  selenium: {
    host: 'hub.browserstack.com',
    port: 443
  },
  desiredCapabilities: {
    'bstack:options': {
      userName: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      appiumVersion: '1.22.0',
    }
  },
}

const nightwatchConfigs = {
  src_folders: ['./tests/android/specs/e2e/*.js'],
  live_output: true,

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack:  {
      ...browserStack
    },
    
    

    "browserstack.android_01": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'UiAutomator2',
          app: 'bs://03497b00841d6c1b6e405f2bfeb4c91042acf8e7',
          platformVersion: '11.0',
          deviceName: 'Google Pixel 5'
        }
      }
    },
    "browserstack.android_02": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'UiAutomator2',
          app: 'bs://<android_app_id>',
          platformVersion: '12.0',
          deviceName: 'Samsung Galaxy S22 Ultra'
        }
      }
    },

    "browserstack.ios_01": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'XCUITest',
          app: 'bs://<ios_app_id>',
          platformVersion: '16',
          deviceName: 'iPhone 14'
        }
      }
    },
  }
}

for(let key in additonalEnvironments.test_settings) {
  nightwatchConfigs.test_settings[key] = {
    ...browserStack,
    ...additonalEnvironments.test_settings[key]
  };
}

module.exports = nightwatchConfigs;
