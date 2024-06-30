import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/zapImoveis/HomePage';
import SearchPage from '../pages/zapImoveis/SearchPage';
import { SearchData } from '../../types';

let searchData: SearchData;

before(() => {
  cy.fixture('searchData').then((data: SearchData) => {
    searchData = data;
  });
});

Given('I go to the Zap page', () => {
  HomePage.open();
});

Given(
  'I fill the search input with the {string} term on the Search Engine page',
  (searchText: string) => {
    HomePage.fillSearchInput(searchText);
  },
);

Given('I click on the {string} checkbox', (searchText: string) => {
  HomePage.clickLocationCheckbox(searchText);
});

Given('I select the cobertura checkbox in the property type dropdown', () => {
  HomePage.selectPropertyTypeCheckbox(searchData.propertyType);
});

Given('I click on the Alugar tab', () => {
  HomePage.clickTab();
});

When('I click on the search button', () => {
  HomePage.clickSearchButton();
});

Then('the search results page should be visible', () => {
  SearchPage.checkUrlIncludes(searchData.urlChecks.searchResult);
});

When('I filter the results', () => {
  searchData.filters.forEach((filterText) => {
    SearchPage.selectFilterByText(filterText);
  });
});

Then('the results should be filtered', () => {
  SearchPage.checkUrlIncludes(searchData.urlChecks.filtersApplied);
});

Given('dont will be results', () => {
  HomePage.notResults();
});
