Feature: User Mention Notifications
 Background: 
    Given an admin user
    
  Scenario: Admin mentions new user on talk page
    Given admin creates new user
    When admin goes to their talk page 
    And mention new user
    Then the new user mention is visible on talk page
    
  Scenario: New User sees mention
    Given new user is logged in
    When new user clicks on the notification badge
    Then new user see they was mentioned
    
  Scenario: New user mentions admin on talk page
    Given new user is logged in
    When new user go to their talk page 
    And mention the admin user
    Then the admin user mention is visible on talk page
  
  Scenario: Admin sees mention
    Given admin is logged in
    When admin clicks on the notification badge
    Then admin see they were mentioned
    


