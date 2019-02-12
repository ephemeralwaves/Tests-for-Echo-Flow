  /*Scenario: Admin mentions new user on talk page
    Given admin creates new user and they are logged in
    When the new user edits the admin user's page
    And mention new user
    Then the admin mention is visible on the admin user's page

  Scenario: Admin sees mention
    Given admin is logged in
    When admin clicks on the notification badge
    Then admin see they were mentioned

  Scenario: Admin mentions new user on their user page
    Given admin is logged in
    When admin goes to the new user user's page
    And mentions the new user
    Then the new user mention is visible on new user's page

  Scenario: New user sees mention
    Given new user is logged in
    When new user clicks on the notification badge
    Then new user sees they were mentioned
	*/
'use strict';

var assert = require ('assert'),
	EchoPage = require ( '../pageobjects/echo.page' ),
	UserLoginPage = require( 'wdio-mediawiki/LoginPage' ),
	CreateAccountPage = require( '../../../../../tests/selenium/pageobjects/createaccount.page' ),
	//Api = require( 'wdio-mediawiki/Api' ),
	EditPage = require( '../../../../../tests/selenium/pageobjects/edit.page' ),
    Util = require( 'wdio-mediawiki/Util' );



describe( 'Mention test for Echo', function () {
	var password,
    username;


	it( 'should be able to create account', function () {
		username = Util.getTestString( 'User-' );
		password = Util.getTestString();
		// create
		CreateAccountPage.createAccount( username, password );
		EditPage.edit(`User:${username}`, `Hello [[User:Admin]] ~~~~` )
		EchoPage.alerts.click();
        EchoPage.alertText.waitForVisible();
        assert( EchoPage.alertText.isExisting() );

     	UserLoginPage.login( browser.options.username, browser.options.password );
		UserLoginPage.open();
		EditPage.edit('User:Admin', `Hello [[User:${username}]] ~~~~` )
		EchoPage.alerts.click();
        EchoPage.alertText.waitForVisible();
        assert( EchoPage.alertText.isExisting() );


	} );

});
