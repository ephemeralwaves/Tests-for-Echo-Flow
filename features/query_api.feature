Feature: Api tests Querying Notifications

@/w/api.php?action=query&format=json&meta=notifications
  Scenario: Lists notifications when queried
    Given There is a created user that is logged in and has <x> notifications 
    When I set action to query 
    And I set meta to notifications
    And notprop is set to 'count'
    Then the api result is the list of <x> notifications
    
@/w/api.php?action=query&format=json&meta=notifications&notfilter=read%7C!read&notprop=count
  Scenario: List both read and unread notifications counts
    Given There is a created user that is logged in and has at least <x> notifications, with half read and the other half unread
    When I set action to query 
    And I set meta to notifications
    And notfilter is set to both 'read' and '!read'
    And notprop is set to 'count'
    Then the api result is the list of <x> notifications
    Examples:
    |  x   |
    |  2   |
    |  4   |
#This  test fails when I try it on the wiki beta website, it only takes into account unread messages

@/w/api.php?action=query&format=json&meta=unreadnotificationpages
  Scenario: A list of unread notifications are given when queried
    Given There is a created user that is logged in and has <x> unreadnotifications 
    When I set action to query 
    And I set meta to unreadnotifications
    Then the api result is the list of <x> notifications
      
#Not sure why unreadnotifications exists if this data can be queried using notifications   
