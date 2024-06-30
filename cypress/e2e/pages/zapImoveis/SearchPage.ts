export default class SearchPage {
  private readonly CSS_RESULT_SEARCH = '#react-layout [data-testid="mainline"]';
  private static CSS_FILTERS = '[data-cy="filter-tags"]';

  static selectFilterByText(filterText: string): void {
    cy.get(this.CSS_FILTERS)
      .should('be.visible')
      .find('button')
      .contains(filterText)
      .click();
  }

  resultContainsText(callback: (text: string) => void): void {
    cy.get(this.CSS_RESULT_SEARCH, { timeout: 20000 }).then(($elem) => {
      callback($elem.text());
    });
  }
}
