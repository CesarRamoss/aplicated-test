import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/zapImoveis/HomePage';
import SearchPage from '../pages/zapImoveis/SearchPage';

Given('I go to the Zap page', () => {
  HomePage.openHomePage();
});

When('I click on the location tab', () => {
  HomePage.clickLocationTab();
});

When('I click on the dropdown all properties', () => {
  HomePage.clickDropdownAllProperties();
});

When('I select the coverage checkbox', () => {
  HomePage.selectCoverageCheckbox('Cobertura');
});

When(
  /^I fill the search input with the "([^"]*)" term on the Search Engine page$/,
  (value: string) => {
    HomePage.fillSearchInput(value);
  },
);

When('I click on the search button', () => {
  HomePage.clickSearchButton();
});

Then('I click on the location checkbox', () => {
  HomePage.clickLocationCheckbox();
});

When('I click on mobiliado', () => {
  SearchPage.selectFilterByText('Mobiliado');
});

When('I click on aceita pets', () => {
  SearchPage.selectFilterByText('Aceita pets');
});

Then('the results list should be visible', function (value: string) {
  console.log(
    `the text ${value} should be visible on the result page on the Search Engine page`,
  );
});
