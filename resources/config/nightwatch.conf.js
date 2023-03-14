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
  src_folders: [],
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
          app: 'bs://<android_app_url>',
          platformVersion: '11.0',
          deviceName: 'Google Pixel 5'
        }
      }
    },

    "browserstack.ios_01": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'XCUITest',
          app: 'bs://<ios_app_url>',
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
