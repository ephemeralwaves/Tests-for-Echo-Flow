'use strict';
var	EchoPage = require ( '../pageobjects/echo.page' ),
	EchoApi = require ( '../pageobjects/echo.api' ),
	UserLoginPage = require( 'wdio-mediawiki/LoginPage' ),
    assert = require ('assert');

describe( 'Api tests for Querying Notifications', function () {
    /*
    Given there is a created user that is logged in and has <x> notification(s)
    When I set action to query 
    And I set meta to notifications
    Then the api result is the list of <x> notification(s)
    */
    
    it( 'A list of notifications are given when queried',  ()  => {
        //Api
        var count;
        EchoApi.getNotificationsList().then( value => {
            count = value;});
        //Manual Check
        UserLoginPage.login( browser.options.username, browser.options.password );
        EchoPage.open();
        EchoPage.notificationsCount.waitForVisible();
        if (count = 1){
            assert.strictEqual( `${count} notification`, EchoPage.notificationsCount.getText() );
        } else {
            assert.strictEqual( `${count} notifications`, EchoPage.notificationsCount.getText() );
        }
            
            
    });
    
} );