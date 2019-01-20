'use strict';

var assert = require ('assert'),
	EchoPage = require ( '../pageobjects/echo.page' ),
	UserLoginPage = require( 'wdio-mediawiki/LoginPage' ),
	CreateAccountPage = require( '../../../../../tests/selenium/pageobjects/createaccount.page' ),
    Util = require( 'wdio-mediawiki/Util' );
    
var password,
    username;

describe( 'Smoke test for Echo', function () {
    
    /**
     *Given there is an admin user on the Create Account page
     *When I enter a new user name and password and submit
     *Then a new user is created
	 */

	it( 'admin creates a new user', function () {
        username = Util.getTestString( 'NewUser-' );
		password = Util.getTestString();
        
        UserLoginPage.login( browser.options.username, browser.options.password );
		UserLoginPage.open();
		CreateAccountPage.createAccount( username, password );
        assert.strictEqual(EchoPage.newUserConfirm.getText(), `The user account for ${username} (talk) has been created.\nReturn to Special:CreateAccount.`);
    } );
    
    /**
     *Given admin created a new user
     *When the new user enters credentials on the login page
     *Then the new user is logged in
	 */
    
    it( 'new user logs in', function () {   
        UserLoginPage.login(username, password);
        UserLoginPage.open();
        assert.strictEqual(EchoPage.newUserNav.getText(), `${username}`);
    } );
    
    /**
     *Given I am a new logged in user
     *Then alerts and notices are visible.
     */
    it( 'alerts and notices are visible after logging in', function () {
        assert( EchoPage.alerts.isExisting() );
        assert( EchoPage.notices.isExisting() );
        } );
    
    /**
     *Given I am a new logged in user
     *When I click the notices icon
     *Then I see a welcome message
     */
    it( 'checks for welcome message after signin', function () {
        EchoPage.notices.click();
        EchoPage.welcomeNotice.waitForVisible();
        assert( EchoPage.welcomeNotice.isExisting() );
        } );
    /**
     *Given I am a new logged in user
     *When I go to the Notifications Page
     *Then I see the Notification title
     */
    it( 'checks for Notifications Page', function () {
        
        EchoPage.open();
        assert.strictEqual(EchoPage.notificationHeading.getText(), `Notifications`);
        } );
    
    
} );
