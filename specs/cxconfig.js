
const assert = require( 'assert' ),
    MWBot = require( 'mwbot' );

let bot = new MWBot( {
    apiUrl: 'https://en.wikipedia.beta.wmflabs.org/w/api.php'
} );

describe( 'API', function () {

	/**
	 *Given I am a user
	 *When I fetch the configuration for Spaniash-Catalan language pair
	 *Then the configuration json is ?
	*/

    it( 'Fetch content translation configuration', function() {

        return bot.request({
			action: "cxconfiguration",
			format: "json",
			from: "es",
			to: "ca"
		} ).then( ( response ) => {

             console.log(response);

             console.log(response.query);

            assert.equal( response.query, placeholder  );

        } );

    } );

} );

