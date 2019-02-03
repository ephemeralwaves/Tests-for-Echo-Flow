'use strict';
const MWBot = require( 'mwbot' ),
	EchoPage = require ( '../pageobjects/echo.page' ),
    assert = require ('assert');

describe( 'Api tests for Querying Notifications', function () {
    /*
    Given there is a created user that is logged in and has <x> notifications 
    When I set action to query 
    And I set meta to notifications
    Then the api result is the list of <x> notifications
    */

    it( 'A list of notifications are given when queried',  ()  => {
		//var notificationCount = EchoPage.notificationsCount.getText();
        let bot = new MWBot;
        
        return bot.loginGetEditToken( {
			apiUrl: `${browser.options.baseUrl}/api.php`,
			username: browser.options.username,
			password: browser.options.password
		} ).then( function () {
		return new Promise( ( resolve ) => {
			return bot.request( {
				action: 'query',
	            meta: 'notifications',
	            notprop: 'count'
			 } ).then( ( response ) => {
				resolve( response.query.notifications.count );
                //console.log(`Count: ${response.query.notifications.count}` );
                EchoPage.open();
                EchoPage.notificationsCount.waitForVisible();
        	    assert.strictEqual( `${response.query.notifications.count} notifications`,   EchoPage.notificationsCount.getText() );
			     } );
         } );
        
        } );
      
      }); 

    
} );