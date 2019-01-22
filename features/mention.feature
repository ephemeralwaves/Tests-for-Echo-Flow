Feature: User Mention Notifications
 Background: 
    Given an admin user
    
  Scenario: Admin creates a new user
    Given there is an admin user on the Create Account page
    When I enter a new user name and password and submit
    Then a new user is created
    
  Scenario: Admin mentions new user on talk page
    Given admin is logged in
    When I to my talk page 
    And mention new user
    Then the new user mention is visible on talk page
    
  Scenario: New User sees mention
    Given new user is logged in
    When I click on the notification badge
    Then I see I was mentioned
    
  Scenario: New user mentions admin on talk page
    Given new user is logged in
    When I go to my talk page 
    And mention the admin user
    Then the admin user mention is visible on talk page
  
  Scenario: Admin sees mention
    Given admin is logged in
    When I click on the notification badge
    Then I see I was mentioned
    


