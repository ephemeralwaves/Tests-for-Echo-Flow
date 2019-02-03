'use strict';

var assert = require( 'assert' ),
	RecentChangesPage = require( '../pageobjects/recentchanges.page' ),
	UserLoginPage = require( 'wdio-mediawiki/LoginPage' ),
    WatchlistPage = require( '../pageobjects/watchlist.page' );

describe( 'filters', function () {

	/**    
	 *Given I am an anon user
 	 *When I go on the Recent Changes page
	 *Then filters are present
     */
	it( 'filters are present', function () {
		RecentChangesPage.open();
        RecentChangesPage.activeFilters.waitForVisible();
		assert( RecentChangesPage.activeFilters.isExisting() );
	} );
    
    /**
     *Given I am in the Recent Changes page
     *When I click on active filters
     *Then I see different groups of filters
     */
    it( 'there are different groups of filters', function () {
        RecentChangesPage.filterButton.waitForVisible();
        RecentChangesPage.filterButton.click();
		assert( RecentChangesPage.filterDropDown.isExisting() );
	} );

    /**
     *Given I am a logged in user
     *When I go on the Recent Changes page
     *Then filters and bookmark icon are present
    
     */
      it( 'filters and bookmark icon are present for user', function () {
		UserLoginPage.login( browser.options.username, browser.options.password );
		RecentChangesPage.open();
        RecentChangesPage.activeFilters.waitForVisible();
		assert( RecentChangesPage.activeFilters.isExisting() );
        assert( RecentChangesPage.bookmarkIcon.isExisting() );
        } );
     /**  
      *Given I am a logged in user
      *When I go on the Watchlist page
      *Then filters are present
      */
      it( 'filters are present on Watchlist page for user', function () {
		WatchlistPage.open();
        assert( WatchlistPage.activeFilters.isExisting() );
	} );
} );
