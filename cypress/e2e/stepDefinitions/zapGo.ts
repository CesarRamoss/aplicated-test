import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/zapImoveis/HomePage';

Given(
  /^I fill the search input with the "([^"]*)" term on the Search Engine page$/,
  function (value: string) {
    console.log('I fill the search input with the' + value);
    HomePage.fillSearch(value);
  },
);

Given('I go to the Zap page', function () {
  HomePage.open();
});

When('I click on the search button', () => {
  HomePage.click();
});

Then('I click on the location checkbox', () => {
  HomePage.clickLocationCheckbox();
});

Then(
  'the text {string} should be visible on the result page on the Search Engine page',
  function (value) {
    console.log(
      `the text ${value} should be visible on the result page on the Search Engine page`,
    );
  },
);
