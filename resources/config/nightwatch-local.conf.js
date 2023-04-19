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
  plugins: ['@nightwatch/browserstack'],
  
  // browserstack plugin settings...
  '@nightwatch/browserstack': {
    browserstackLocal: true, // set true to manage browserstack local tunnel. Defaults to false.
    
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack:  {
      ...browserStack
    },
    
    "browserstack.local_01": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'UiAutomator2',
          // custom id for the uploaded app: https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id
          app: 'bs_sample_android_local_app',
          platformVersion: '9.0',
          deviceName: 'Google Pixel 3'
        },
        appUploadPath: 'apps/android_local_app.apk'
      }
    },
    "browserstack.local_02": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'UiAutomator2',
          // custom id for the uploaded app: https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id
          app: 'bs_sample_android_local_app',
          platformVersion: '9.0',
          deviceName: 'Samsung Galaxy S10'
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
