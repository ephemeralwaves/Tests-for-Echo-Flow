'use strict';
const Page = require( 'wdio-mediawiki/Page' );

class EchoPage extends Page {

        get alerts() { return browser.element( '#pt-notifications-alert' ); }
        get notices() { return browser.element( '#pt-notifications-notice' ); }
        get welcomeNotice() { return browser.element( '.mw-echo-ui-notificationItemWidget-content-message-header' ); }
        get newUserConfirm() { return browser.element( '#mw-content-text' ); }
        get newUserNav() { return browser.element( '#pt-userpage' ); }
        get notificationHeading() { return browser.element( '#firstHeading' ); }
        get notificationsCount() {return browser.element('.mw-echo-ui-paginationWidget-label');}
	    get alertText() { return browser.element( '.mw-echo-ui-notificationItemWidget-content-message-header' ); }
		get userMention() { return browser.element('.mw-selflink' );}
        open() {
                super.openTitle( 'Special:Notifications', { uselang: 'en' } );
        }

}
module.exports = new EchoPage();




