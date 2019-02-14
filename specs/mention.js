'use strict';

var assert = require ('assert'),
	EchoPage = require ( '../pageobjects/echo.page' ),
	UserLoginPage = require( 'wdio-mediawiki/LoginPage' ),
	CreateAccountPage = require( '../../../../../tests/selenium/pageobjects/createaccount.page' ),
	EditPage = require( '../../../../../tests/selenium/pageobjects/edit.page' ),
    Util = require( 'wdio-mediawiki/Util' );


describe( 'Mention test for Echo', function () {
	var password,
    username;

    /*
    Given admin creates new user and they are logged in
    When the new user edits the admin user's page
    And mention new user
    Then the admin mention is visible on the admin user's page
    */

	it( 'mentions admin on admin user page', function () {

		username = Util.getTestString( 'User-' );
		password = Util.getTestString();
		CreateAccountPage.createAccount( username, password );
		EditPage.edit(`User:${username}`, `Hola [[User:Admin]] ~~~~` )
		EchoPage.userMention.waitForVisible();
		assert( EchoPage.userMention.isExisting() );

	});

	/*
    Given admin is logged in
    When admin clicks on the notification badge
    Then admin see they were mentioned
	*/

	it( 'checks if admin sees mention', function () {

     	UserLoginPage.login( browser.options.username, browser.options.password );
		UserLoginPage.open();
		EchoPage.alerts.click();
        EchoPage.alertText.waitForVisible();
        assert( EchoPage.alertText.isExisting() );

	} );
	/*
    Given admin is logged in
    When admin goes to the new user user's page
    And mentions the new user
    Then the new user mention is visible on new user's page
	*/

	it( 'mentions new user on user page', function () {

		EditPage.edit('User:Admin', `Hola [[User:${username}]] ~~~~` )
		EchoPage.userMention.waitForVisible();
		assert( EchoPage.userMention.isExisting() );

	} );

	/*
	Scenario: New user sees mention
    Given new user is logged in
    When new user clicks on the notification badge
    Then new user sees they were mentioned
	*/

	it( 'checks if new user sees mention', function () {

     	UserLoginPage.login( username,password );
		//UserLoginPage.open();
		EchoPage.open();
		EchoPage.alerts.click();
        EchoPage.alertText.waitForVisible();
        assert( EchoPage.alertText.isExisting() );

	} );

});
