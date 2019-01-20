Feature: Smoke test
 Background: 
    Given an admin user
    
  Scenario: Admin creates a new user
    Given there is an admin user on the Create Account page
    When I enter a new user name and password and submit
    Then a new user is created
    
  Scenario: New user logs in
    Given admin created a new user
    When the new user enters credentials on the login page
    Then the new user is logged in

  Scenario: Alerts and notices are visible after logging in
    Given I am a new logged in user
    Then alerts and notices are visible.

  Scenario: Checks for welcome message after signin
    Given I am a new logged in user
    When I click the notices icon
    Then I see a welcome message
  
  Scenario: Checks for Notifications Page
    Given I am a new logged in user
    When I go to the Notifications Page
    Then I see the Notification title