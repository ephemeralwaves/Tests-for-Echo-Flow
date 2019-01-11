'use strict';

var assert = require ('assert'),
	EchoPage = require ( '../pageobjects/echo.page' ),
	UserLoginPage = require( 'wdio-mediawiki/LoginPage' ),
	CreateAccountPage = require( '../../../../../tests/selenium/pageobjects/createaccount.page' ),
    Util = require( 'wdio-mediawiki/Util' ),
	Api = require( 'wdio-mediawiki/Api' );

describe( 'Echo', function () {

	it( 'Admin creates a new user', function () {
        var password,
            username;
        username = Util.getTestString( 'NewUser-' );
	password = Util.getTestString();
        
        //Given there is an admin user on the Create Account page
        UserLoginPage.login( browser.options.username, browser.options.password );
	UserLoginPage.open();
        //When I enter a new user name and password and submit
	CreateAccountPage.createAccount( username, password )
        //Then a new user is created
        assert.strictEqual(EchoPage.newuserconfirm.getText(), `The user account for ${username} (talk) has been created.\nReturn to Special:CreateAccount.`)
    } );

} );
