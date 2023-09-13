# browserstack-appium-nightwatch-example

[Nightwatch](http://nightwatchjs.org/) Integration with BrowserStack.

<img src ="http://nightwatchjs.org/img/logo-nightwatch.png" height = "110"> <img src ="https://d13vhgz95ul9hy.cloudfront.net/blog/wp-content/uploads/2018/03/BrowserStack.png" height = "110">

## Setup

- Clone the repo
- Install the dependencies using `npm install`
- Export the environment variables for the Username and Access Key of your BrowserStack account, which you can get directly from the app automate dashboard

  ```
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```


## Running your tests

- To run a single android test, run `npm run single-android`
- To run a single ios test, run `npm run single-ios`
- To run local tests, run `npm run local`

Please run the above tests once before running parallel tests, so that the apps can be uploaded on the respective [custom id](https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id).
- To run parallel tests, run `npm run parallel`
- To run parallel tests on different devices, run `npm run parallel-devices`
- To run test suite, run `npm run suite`
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

## Browserstack Test Observability

Test Observability is a reporting tool that helps you isolate the genuine test failures after eliminating noise from flaky and always failing tests and also helps with root cause analysis of failed tests.

With Test Observability, you can not only complete your run verification in minutes, you will also be empowered with rich historical data to understand the overall health of your test suites, uncover burning issues impacting the stability of your tests, and help you optimize your tests.

You can learn more about [what the product has to offer and why you should be using it](https://www.browserstack.com/docs/test-observability/overview/what-is-test-observability).

Please add the following code snippet to your **nightwatch.conf.js**.
```js
 module.exports = {
    //...
plugins: ['@nightwatch/browserstack'],
'@nightwatch/browserstack': {
    test_observability: {
    enabled: true,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    projectName: "Enter Static Project Name Here",
    buildName: "Enter Static Project Name Here",
    buildTag: ["Custom Tag 1","Custom Tag 2"]
    }
   
  },
    //...
  };
```
To get started with the Test Observability integration with your Nightwatch Project, please refer to this [documentation](https://www.browserstack.com/docs/test-observability/quick-start/nightwatch).

## Additional Resources

- [Documentation for writing app automate test scripts in Node](https://www.browserstack.com/docs/app-automate/appium/getting-started/nodejs)
- [Customizing your tests on BrowserStack](https://www.browserstack.com/app-automate/capabilities)
- [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms/app_automate)
- [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/docs/app-automate/api-reference/introduction)

