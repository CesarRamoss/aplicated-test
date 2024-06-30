class HomePage {
  private static CSS_INPUT_SEARCH =
    '[placeholder="Digite o nome da rua, bairro ou cidade"]';
  private static CSS_LOCATION_TAB = '[data-cy="aluguel-tab"]';
  private static CSS_DROPDOWN_ALL_PROPERTIES =
    '.l-dropdown__trigger > button[data-testid="l-button"]';
  private static CSS_TYPE_COVERAGE = '.l-multiselect__items';
  private static CSS_BUTTON_SEARCH = '[data-cy="submit"] button[type="submit"]';
  private static CSS_LOCATION_CHECKBOX =
    '[data-cy="locations-item-input"] input[value="BR-Sao_Paulo-NULL-Sao_Paulo"]';

  static openHomePage(): void {
    cy.visit('https://www.zapimoveis.com.br/');
    cy.get('body').should('be.visible');
    cy.clearCookies();
  }

  static clickLocationTab(): void {
    cy.get(HomePage.CSS_LOCATION_TAB).click({ force: true });
  }

  static clickDropdownAllProperties(): void {
    cy.get(HomePage.CSS_DROPDOWN_ALL_PROPERTIES).click({ force: true });
  }

  static selectCoverageCheckbox(coverage: string): void {
    cy.get(HomePage.CSS_TYPE_COVERAGE)
      .contains(coverage)
      .find('input[type=checkbox]')
      .check();
  }

  static clickSearchButton(): void {
    cy.get(HomePage.CSS_BUTTON_SEARCH).click();
  }

  static fillSearchInput(text: string): void {
    cy.get(HomePage.CSS_INPUT_SEARCH).type(text);
  }

  static clickLocationCheckbox(): void {
    cy.get(HomePage.CSS_LOCATION_CHECKBOX).click();
  }

  static search(): void {
    cy.get(HomePage.CSS_BUTTON_SEARCH).should('be.visible').click();
  }
}

export default HomePage;
