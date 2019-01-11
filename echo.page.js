'use strict';
const Page = require( 'wdio-mediawiki/Page' );

class EchoPage extends Page {

	get alerts() { return browser.element( '#pt-notifications-alert' ); }
	get notices() { return browser.element( '#pt-notifications-notice' ); }
   	get welcomenotice() { return browser.element('.mw-echo-ui-notificationItemWidget-content-message-header'); }
   	get newuserconfirm() { return browser.element( '#mw-content-text' ); }
   	get newusernav() { return browser.element('#pt-userpage'); }
}
module.exports = new EchoPage();
