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
  src_folders: ["./tests/specs/e2e/e2e.spec.js",
  "./tests/specs/login/*.spec.js",
  "./tests/specs/offers/*.spec.js",
  "./tests/specs/user/*.spec.js",
  "./tests/specs/cart/*.spec.js",],
  live_output: true,
  plugins: ['@nightwatch/browserstack'],
  
  // browserstack plugin settings...
  '@nightwatch/browserstack': {
    browserstackLocal: false, // set true to manage browserstack local tunnel. Defaults to false.
    test_observability: {
      enabled: true,
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      projectName: "browserstack-appium-nightwatch-example-project",
      buildName: "browserstack-appium-nightwatch-example-build",
      }
     
    },

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
          // custom id for the uploaded app: https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id
          app: 'bs_sample_android_app',
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
          // custom id for the uploaded app: https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id
          app: 'bs_sample_android_app',
          platformVersion: '11.0',
          deviceName: 'Google Pixel 4'
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
