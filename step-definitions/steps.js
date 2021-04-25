const { Given, When, Then } = require('@cucumber/cucumber');
const MainPage = require('../pageobjects/main.page');

Given(/^I am on webdriverio page$/, async () => {
    await browser.url('/');
    await browser.maximizeWindow();
    await expect (browser).toHaveUrl('https://webdriver.io/');
});

When(/^I click on search$/, async () => {
    await MainPage.clickSearch();
    await expect(MainPage.searchInput).toBeExisting();
});

Then(/^I type text to search$/, async () => {
    await MainPage.typeSearchRequest();
    await expect(MainPage.searchInput).toHaveValue('Cucumber');
});

Then(/^Go to first search result$/, async () => {
   await MainPage.goToFirstResult();
   await expect(browser).toHaveTitle("CucumberJS JSON Reporter | WebdriverIO"); 
   await expect(MainPage.searchRequestTitle).toHaveText('CucumberJS JSON Reporter');
}); 


