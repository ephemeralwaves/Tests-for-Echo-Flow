Feature: Filters are present on Recent Changes and Watchlist pages
        
  Scenario: Filters are present
    Given I am an anon user
    When I go on the Recent Changes page
    Then filters are present
    
  Scenario: There are different groups of filters
    Given I am in the Recent Changes page
    When I click on active filters
    Then I see different groups of filters
    
  Scenario: Filters and bookmark icon are present for user
    Given I am a logged in user
    When I go on the Recent Changes page
    Then filters and bookmark icon are present
    
  Scenario: Filters are present on Watchlist page for user
    Given I am a logged in user
    When I go on the Watchlist page
    Then filters are present
