@zapImoveis
Feature: Search for apartments in Sao Paulo

  Background:
     Given I go to the Zap page
    And I see "ZAP Imóveis | Apartamentos, Casas e Imóveis à Venda e para Alugar" in the title

  @smoke
  Scenario: Using the search input with the text "Sao Paulo"
    Given I fill the search input with the "Sao Paulo" term on the Search Engine page
    When I click on the location checkbox
    When I click on the search button
    Then the text "What is Smoke Testing?" should be visible on the result page on the Search Engine page

  Scenario Outline: Using the search input with the text "<search_text>"
    Given I fill the search input with the "<search_text>" term on the Search Engine page
    When I click on the location checkbox
    When I click on the search button
    Then the text "<expected_text>" should be visible on the result page on the Search Engine page

    Examples:
      | search_text | expected_text |
     
