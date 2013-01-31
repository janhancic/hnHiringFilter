(function ( document ) {
	var script = document.createElement ( 'script' );
	script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js';
	document.body.appendChild ( script );
	script.onload = function () {
		var searchCities = 'london, boston';
		searchCities = searchCities.split ( ',' );
		for ( var i in searchCities ) {
			searchCities[i] = searchCities[i].trim ();
		}

		$comments = $( 'body > center > table > tbody > tr:eq(2) > td table:eq(1) > tbody > tr' );
		if ( $comments.length === 0 ) {
			alert ( "Ooops, something is wrong. Are you sure you are on a 'Ask HN: Who is hiring?' page?" );
			return;
		}

		$comments.each ( function () {
			var $this = $( this );
			var commentContent = $this.find ( 'table td:eq(2) span.comment' ).text ().toLowerCase ();

			var foundCity = false;
			for ( var i in searchCities ) {
				if ( commentContent.indexOf ( searchCities[i] ) >= 0 ) {
					foundCity = true;
					break;
				}
			}

			if ( foundCity === false ) {
				$this.hide ();
			}
		} );
	}
} ( document ) );