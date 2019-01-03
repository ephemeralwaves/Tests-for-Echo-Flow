Feature: Api tests for Marking Notifications

  Scenario: All notifications are marked as read
    Given there is a created user that is logged in and has <x> notifications that are unread
    When I perform echomarkread action
    And all is marked as true
    And a token is set
    Then the api result is <x>
    Examples:
    |  x   |
    |  2   |
    |  3   |
    |  4   |
  
  Scenario: All notifications are marked as unread
    Given There is a created user that is logged in and has <x> notifications that are read
    When I perform echomarkread action
    And I get the <notification ids>
    And unreadlist is set to <notification ids>
    And a token is set
    Then the api result is <x>
  
  Scenario: An error occurs when the same notification is set to be read and unread
    Given There is a created user that is logged in and has a notifications that is either read or unread
    When I perform echomarkread action
    And I get the <notification id>
    And readlist is set to <notification id>
    And unreadlist is set to <notification id>
    And a token is set
    Then the api result is an error
#Test fails, behavior results in making the notification unread, or keeping it unread.