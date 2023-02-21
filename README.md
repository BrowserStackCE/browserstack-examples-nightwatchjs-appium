# browserstack-appium-nightwatch-example

[Nightwatch](http://nightwatchjs.org/) Integration with BrowserStack.

!<img src ="http://nightwatchjs.org/img/logo-nightwatch.png" height = "110"> [BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780) 

## Setup

- Clone the repo
- Install the dependencies using `npm install`
- Export the environment variables for the Username and Access Key of your BrowserStack account, which you can get directly from the app automate dashboard

  ```
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

- Upload the apps provided in resources folder using this command `curl -u "<username>:<access-key>" -X POST "https://api-cloud.browserstack.com/app-automate/upload" -F "file=@/path/to/app/file/application-debug.apk"`
- Please note the value of app_url in the API response and set the app capbility in the `nightwatch.conf.js` and `nightwatch-local.conf.js` for the respective apps.
  * android_app_url in `browserstack.android` and `browserstack.android2` capability set in nightwatch.conf.js
  * ios_app_url in `browserstack.ios` capability set in nightwatch.conf.js
  * android_local_app_url in `browserstack.local` and `browserstack.local2` capability set in nightwatch-local.conf.js
- Please go through [this](https://www.browserstack.com/docs/app-automate/appium/upload-app-from-filesystem) documentation for better understanding.

## Running your tests

- To run a single android test, run `npm run single-android`
- To run a single ios test, run `npm run single-ios`
- To run parallel tests, run `npm run parallel`
- To run test suite, run `npm run suite`
- To run local tests, run `npm run local`
- To run parallel local tests, run `npm run parallel-local`


Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Notes

- You can view your test results on the [BrowserStack app automate dashboard](https://app-automate.browserstack.com/)
- To test on a different set of browsers, check out our [capabilities generator](https://www.browserstack.com/app-automate/capabilities)


## Connecting to BrowserStack via a proxy server

You can specify proxy settings in Nightwatch by adding the `proxy` key in your `*.conf.js`

```javascript
  test_settings: {
    default: {
      desiredCapabilities: {
        // Your capabilities
      },
      proxy: {
        "host": "",     // "127.0.0.1"
        "port": "",     // "8081"
        "protocol": ""  // "http"
      }
    }
  }
```

## Additional Resources

- [Documentation for writing app automate test scripts in Node](https://www.browserstack.com/docs/app-automate/appium/getting-started/nodejs)
- [Customizing your tests on BrowserStack](https://www.browserstack.com/app-automate/capabilities)
- [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms/app_automate)
- [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/docs/app-automate/api-reference/introduction)

