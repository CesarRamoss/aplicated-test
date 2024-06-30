@zapImoveis
Feature: Search for apartments in Sao Paulo

  Background:
    Given I go to the Zap page
    And I see "ZAP Imóveis | Apartamentos, Casas e Imóveis à Venda e para Alugar" in the title

  @smoke
  Scenario: Using the search input with the text "Sao Paulo"
    When I click on the location tab
    When I click on the dropdown all properties
    When I select the coverage checkbox
    Given I fill the search input with the "Sao Paulo" term on the Search Engine page
    When I click on the location checkbox
    When I click on the search button
    When I click on mobiliado
    When I click on aceita pets
    Then the results list should be visible

  Scenario Outline: Using the search input Failed with the text <search_text>
    When I click on the location tab
    When I click on the dropdown all properties
    When I select the coverage checkbox
    Given I fill the search input with the <search_text> term on the Search Engine page
    When I click on the location checkbox
    When I click on the search button
    When I click on mobiliado
    When I click on aceita pets
    Then the results list should be visible

    Examples:
      | search_text |
      | "Curitiba" |
