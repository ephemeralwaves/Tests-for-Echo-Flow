const Page = require( 'wdio-mediawiki/Page' );

class RecentChangesPage extends Page {
	get changesList() { return browser.element( '.mw-changeslist' ); }
	get titles() { return this.changesList.$$( '.mw-changeslist-title' ); }
	get activeFilters() { return browser.element( '.oo-ui-labelElement-label' ); }
    get filterButton() { return browser.element('.oo-ui-icon-menu');} 
    get filterDropDown() { return browser.element('.oo-ui-icon-search');} 
    get bookmarkIcon () { return browser.element('.oo-ui-icon-bookmark');} 
	open() {
		super.openTitle( 'Special:RecentChanges' );
	}

}

module.exports = new RecentChangesPage();