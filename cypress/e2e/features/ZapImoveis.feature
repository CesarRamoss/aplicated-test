@zapImoveis
Feature: Search for apartments

  Background:
    Given I go to the Zap page
    And I see "ZAP Imóveis | Apartamentos, Casas e Imóveis à Venda e para Alugar" in the title

  @smoke
  Scenario Outline: Search for apartments in <search_text>
    Given I fill the search input with the <search_text> term on the Search Engine page
    And I click on the <search_text> checkbox
    And I select the cobertura checkbox in the property type dropdown
    And I click on the Alugar tab
    When I click on the search button
    Then the search results page should be visible
    When I filter the results
    Then the results should be filtered

    Examples:
      | search_text      |
      | "São Paulo - SP" |
      | "Curitiba - PR"  |

  Scenario Outline: Search for apartments in <search_text> and not found
    Given I fill the search input with the <search_text> term on the Search Engine page    
    But dont will be results

    Examples:
      | search_text          | 
      | "Texas - USA"        |
      | "Sidney - Austrália" |

       


      


