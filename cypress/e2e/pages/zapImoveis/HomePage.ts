class HomePage {
  private static CSS_INPUT_SEARCH =
    '[placeholder="Digite o nome da rua, bairro ou cidade"]';
  private static CSS_BUTTON_SEARCH = '[data-cy="submit"] button[type="submit"]';
  private static CSS_LOCATION_CHECKBOX =
    '[data-cy="locations-item-input"] input[value="BR-Sao_Paulo-NULL-Sao_Paulo"]';

  static open(): void {
    cy.visit('https://www.zapimoveis.com.br/');
    cy.get('body').should('be.visible');
    cy.clearAllCookies();
  }

  static click(): void {
    cy.get(HomePage.CSS_BUTTON_SEARCH).should('be.visible');
    cy.get(HomePage.CSS_BUTTON_SEARCH).click();
  }

  static fillSearch(text: string): void {
    cy.get(HomePage.CSS_INPUT_SEARCH).should('be.visible');
    cy.get(HomePage.CSS_INPUT_SEARCH).type(text);
  }

  static clickLocationCheckbox(): void {
    cy.get(HomePage.CSS_LOCATION_CHECKBOX).should('be.visible');
    cy.get(HomePage.CSS_LOCATION_CHECKBOX).click();
  }

  static search(): void {
    if (!cy.get(HomePage.CSS_BUTTON_SEARCH).should('be.visible')) {
      return;
    }
    cy.get(HomePage.CSS_BUTTON_SEARCH).click();
  }
}

export default HomePage;
