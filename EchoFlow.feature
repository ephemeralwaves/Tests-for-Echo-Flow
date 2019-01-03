Feature: Should notify a new user about edits to their post done by Admin

 @https://en.wikipedia.beta.wmflabs.org/wiki/Special:ApiSandbox
 Background: 
    Given an admin user
    And the flow/structed discussion enabled under beta preferences
    And I have a user talk page with one topic and content populated with random text
    
  Scenario: Admin creates a new user
    Given there is an admin user on the Create Account page
    When I enter a new user name and password and press 'create account'
    Then a new user is created
    
  Scenario: New user logs in
    Given admin created a new user
    When the new user enters credentials on the login page
    Then the new user is logged in

  Scenario: Random user creates new topic on admin’s flow page
    Given I have a random user and password and am logged in and on the admin’s flow page
    When I go to the reply submodule
    And I write a post with the the content ’Text to be edited by Admin’
    Then I see that my poset is added to the flow page

  Scenario: Admin edits random users reply text
    Given I have an admin username and password that is logged in and on their flow page
    When I edit the post created by the random user by appending ‘- confirmed, edited by Admin’ to the content
    Then I see that change made to the post

  Scenario: Random user sees a notification of an edit
    Given I have a random user and password and am logged in
    When I api query for notifications
    Then I see the agent’s name set to admin’s username
    And the timestamp set to today

