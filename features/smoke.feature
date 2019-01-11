Feature: Smoke test

  Scenario: Alerts and notices are visible after logging in
    Given I created an account
    When I login
    Then alerts and notices are visible.

  Scenario: Check for welcome message after signin
    Given I created an account
    When I login
    And I click the noctices icon
    Then I see a welcome message
  
  Scenario: Notify user about mention on wikitext page
    Given I created an account
    When I edit a page 
    And create another random user
    And mention that random user
    And login with that random user
    And I click on the alerts icon
    Then I see the message that random user has been mentioned
    
  @en.wikipedia.beta.wmflabs.org
  Scenario: Post to structed discussion page
    Given I created an account
    When I go to the Beta Page
    And I enable Structured Discussions on User talk pages
    And I click save
    And go to the structured discussion page
    And I type a random string to Topic 
    And I post a random string to comments
    And I click Add Topic
    Then I see my new Topic and comments