Feature: Filters are present on various pages
    
  Scenario: Filters are present
    Given I am user that is not logged in
    When I go on the Recent Changes page
    Then filters are present
    
  Scenario: There are different groups of filters
    Given I am in the Recent Changes page
    When I click on active filters
    Then I see different groups of filters
    
  Scenario: Filters and bookmark icon are present for Admin
    Given I have logged in as an admin user
    When I go on the Recent Changes page
    Then filters and bookmark icon are present
    
  Scenario: Filters are present on Watchlist page for Admin
    Given I have logged in as an admin user
    When I go on the Watchlist page
    Then filters are present
