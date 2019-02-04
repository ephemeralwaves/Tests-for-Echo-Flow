'use strict';
const MWBot = require( 'mwbot' );

class EchoApi {
    
        getNotificationsList() {
		let bot = new MWBot;
        
        return bot.loginGetEditToken( {
			apiUrl: `${browser.options.baseUrl}/api.php`,
			username: browser.options.username,
			password: browser.options.password
		} ).then( () => {
		return new Promise( ( resolve ) => {
			return bot.request( {
				action: 'query',
	            meta: 'notifications',
	            notprop: 'count'
			 } ).then( ( response ) => {
				resolve( response.query.notifications.count );
			     } );
		    } );
        });
    }
}
module.exports = new EchoApi();