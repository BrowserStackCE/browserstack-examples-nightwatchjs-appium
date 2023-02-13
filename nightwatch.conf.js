const additonalEnvironments = require("./environments");
const { getLocalIdentifier } = require("./scripts/local-identifier");

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
      // local:"true",
    }
  },
}

const nightwatchConfigs = {
  src_folders: [],
  live_output: true,
  // plugins: ['@nightwatch/browserstack'],
  //   '@nightwatch/browserstack': {
  //     browserstackLocal: true, // set true to manage browserstack local tunnel. Defaults to false.
  //       // browserstackLocalOptions: {
  //   //   // other browserstack local options
  //   // }
  //   }, 

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack:  {
      ...browserStack
    },
    
    

    "browserstack.android": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'UiAutomator2',
          app: 'bs://423da0207b23fa76990fda07072c138765d28aef',
          platformVersion: '11.0',
          deviceName: 'Google Pixel 5'
        }
      }
    },
    "browserstack.android2": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'UiAutomator2',
          app: 'bs://423da0207b23fa76990fda07072c138765d28aef',
          platformVersion: '12.0',
          deviceName: 'Samsung Galaxy S22 Ultra'
        }
      }
    },
    "browserstack.local": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'UiAutomator2',
          app: 'bs://11c56044be547453e62ee106c1e63f0f1b86806c',
          platformVersion: '9.0',
          deviceName: 'Google Pixel 3'
        }
      }
    },
    "browserstack.ios": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'XCUITest',
          app: 'bs://34bfd4188753a0bb00f5714c09117dcb380432f6',
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
