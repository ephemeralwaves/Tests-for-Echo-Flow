Feature: Should notify a new user about edits to their post done by Admin

 @https://en.wikipedia.beta.wmflabs.org/wiki/Special:ApiSandbox
 Background: 
    Given an admin user
    And the flow/structured discussion is enabled under beta preferences
    And I have a user talk page with one topic populated by random text
    
  Scenario: Admin creates a new user
    Given there is an admin user on the Create Account page
    When I enter a new user name and password and submit
    Then a new user is created
    
  Scenario: New user logs in
    Given admin created a new user
    When the new user enters credentials on the login page
    Then the new user is logged in

  Scenario: New user creates new topic on admin’s talk page
    Given I am a new logged in user and on the admin’s talk page
    When I go to the reply submodule
    And I write a post with the the content ’Text to be edited by Admin’ and submit
    Then I see that my post is added to the talk page

  Scenario: Admin edits random users reply text
    Given I am logged in as the admin user and on my talk page
    When I edit the post created by the new user by appending ‘- confirmed, edited by Admin’ to the content
    Then I see that change made to the post

  Scenario: New user sees a notification of an edit
    Given I am the logged in new user
    When I api query for notifications
    Then I see the agent’s name set to admin’s username
    And the timestamp set to today

