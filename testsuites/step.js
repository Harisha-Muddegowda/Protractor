var { Given } = require('cucumber');

Given('I navigates to google', async function () {
  browser.driver.sleep(10000);
  await browser.get('https://www.google.com/');
});

Given('searches for {string}', async function (searchValue) {
  browser.driver.sleep(10000);
  await element(by.css('input[role="combobox"]')).sendKeys(searchValue)
});

Given('I should see {string}', async function (expectedValue) {
  browser.driver.sleep(5000);
  expect(expectedValue).to.equal('fail')
});
