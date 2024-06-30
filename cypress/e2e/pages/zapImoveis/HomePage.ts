class HomePage {
  private static CSS_SEARCH_INPUT =
    '[data-cy="locations-dropdown-trigger"] input';
  private static CSS_LOCATION_TAB = '[data-cy="aluguel-tab"]';
  private static CSS_ALL_PROPERTIES_DROPDOWN =
    '[data-cy="unities"] button[type="button"]';
  private static CSS_All_PROPERTIES_DROPDOWN_ITEMS = '.l-multiselect__items';
  private static CSS_SEARCH_BUTTON = '[data-cy="submit"] button[type="submit"]';
  private static CSS_LOCATION_CHECKBOX_LABEL =
    '[data-cy="locations-item"] label';

  static open(): void {
    cy.visit('https://www.zapimoveis.com.br/');
    cy.get('body').should('be.visible');
    cy.clearCookies();
  }

  static clickTab(): void {
    cy.get(HomePage.CSS_LOCATION_TAB).should('be.visible').click();
  }

  static selectPropertyTypeCheckbox(propertyType: string): void {
    cy.get(HomePage.CSS_ALL_PROPERTIES_DROPDOWN).should('be.visible').click();
    cy.get(HomePage.CSS_All_PROPERTIES_DROPDOWN_ITEMS)
      .contains(propertyType)
      .find('input[type=checkbox]')
      .check();
  }

  static clickSearchButton(): void {
    cy.get(HomePage.CSS_SEARCH_BUTTON).should('be.visible').click();
  }

  static fillSearchInput(text: string): void {
    cy.get(HomePage.CSS_SEARCH_INPUT).type(text);
  }

  static clickLocationCheckbox(location: string): void {
    cy.get(HomePage.CSS_LOCATION_CHECKBOX_LABEL)
      .contains(location)
      .prev()
      .find('input[type=checkbox]')
      .check();
  }
}

export default HomePage;
