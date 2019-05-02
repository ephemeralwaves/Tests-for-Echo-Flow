Feature: User Mention Notifications
 Background:
   Given a new user is created
 	 And they are logged in
 	 And new user edits a page to mentions admin on it
 	 And admin edits the admin page to mention the new user on it.

Scenario: Checks if admin gets alert when mentioned
    Given admin logs in
    When admin clicks on the alert badge
    Then admin sees they were mentioned

Scenario: Checks if new user gets alert when mentioned
    Given new user logs in
    When new user clicks on the alert badge
    Then new user sees they were mentioned
