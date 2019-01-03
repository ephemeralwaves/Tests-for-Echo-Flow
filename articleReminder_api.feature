Feature: Api tests for Article Reminder

  Scenario: There is a notification when a reminder is set to a <pageid>
    When I perform echoarticlereminder action
    And PageId is set to '1'
    And timestamp is set to a future date
    And a token is set
    Then the api result is 'success'
    Examples:
    | pageid |
    |    2   |
    |    3   |
    |    4   |
    
  Scenario: There is a notification when a reminder is set to a <pagetitle>
    When I perform echoarticlereminder action
    And title is set to <pagetitle>
    And timestamp is set to a future date
    And a token is set
    Then the api result is 'success'
    Examples:
    |      pagetitle     |
    |      Main_Page     |
    |   Talk:Main_Page   |

  Scenario: There is an error thrown when a notification is set for an article with an invalid title
    When I perform the echoarticlereminder action
    And title is set to a <random string>
    And timestamp is set to a future date
    And a token is set
    Then the error code is 'nosuchtitle'
    
#This tests fails, it always results in 'success' on the beta wiki site
    
  Scenario: There is an error thrown when a notification is set for an article with an invalid pageid
    When I perform the echoarticlereminder action
    And title is set to 0
    And timestamp is set to a future date
    And a token is set
    Then the error code is 'nosuchpageid'
    
  Scenario: There is an error thrown when a notification is set for an article with neither a pageid nor a title
    When I perform the echoarticlereminder action
    And timestamp is set to a future date
    And a token is set
    Then the error code is 'missingparam'