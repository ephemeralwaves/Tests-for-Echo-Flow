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

	it( 'Admin creates a new user', function () {
        username = Util.getTestString( 'NewUser-' );
		password = Util.getTestString();
        
        UserLoginPage.login( browser.options.username, browser.options.password );
		UserLoginPage.open();
		CreateAccountPage.createAccount( username, password );
        assert.strictEqual(EchoPage.newuserconfirm.getText(), `The user account for ${username} (talk) has been created.\nReturn to Special:CreateAccount.`);
    } );
    
    /**
     *Given admin created a new user
     *When the new user enters credentials on the login page
     *Then the new user is logged in
	 */
    
    it( 'New user logs in', function () {   
        UserLoginPage.login(username, password);
        UserLoginPage.open();
        assert.strictEqual(EchoPage.newusernav.getText(), `${username}`);
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
     *When I click the noctices icon
     *Then I see a welcome message
     */
    it( 'check for welcome message after signin', function () {
        EchoPage.notices.click();
        EchoPage.welcomenotice.waitForVisible();
        assert( EchoPage.welcomenotice.isExisting() );
        } );
    
} );

