export default class SearchPage {
  private static CSS_FILTERS = '[data-cy="filter-tags"]';

  static selectFilterByText(filterText: string): void {
    cy.get(this.CSS_FILTERS)
      .should('be.visible')
      .find('button')
      .contains(filterText)
      .click();
  }

  static checkUrlIncludes(path: string): void {
    cy.url().should('include', path);
  }
}
