Feature: User Mention Notifications
 Background: 
    Given an admin user
    
Scenario: New user mentions admin on admin user page
    Given admin creates new user and they are logged in
    When the new user edits the admin user's page
    And mention new user
    Then the admin mention is visible on the admin user's page

  Scenario: Admin sees mention
    Given admin is logged in
    When admin clicks on the notification badge
    Then admin see they were mentioned

  Scenario: Admin mentions new user on new user page
    Given admin is logged in
    When admin goes to the new user user's page
    And mentions the new user
    Then the new user mention is visible on new user's page

  Scenario: New user sees mention
    Given new user is logged in
    When new user clicks on the notification badge
    Then new user sees they were mentioned


