var assert = require( 'assert' ),
	EchoPage = require( '../pageobjects/echo.page' ),
	UserLoginPage = require( 'wdio-mediawiki/LoginPage' ),
 	Api = require( 'wdio-mediawiki/Api' );


describe( 'Echo', function () {
	var password,
    	username;

	it( 'alerts and notices are visible after logging in', function () {

		UserLoginPage.login( browser.options.username, browser.options.password );
        UserLoginPage.open();

		assert( EchoPage.alerts.isExisting() );
		assert( EchoPage.notices.isExisting() );

	} );

	/**
     *Given I am a new logged in user
     *When I click the notices icon
     *Then I see a welcome message
     */

    it( 'checks for welcome message after signin @smoke', function () {

		browser.call( function () {
			return Api.createAccount( username, password );
		} );
		UserLoginPage.login( username, password );

        UserLoginPage.open();
        EchoPage.notices.click();
        EchoPage.welcomeNotice.waitForVisible();

        assert( EchoPage.welcomeNotice.isExisting() );

	} );


} );
