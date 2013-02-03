(function ( document ) {
	try {
		var commentsTrs = null;
		try {
			commentsTrs = document.querySelectorAll ( 'body > center > table > tbody > tr' )[2];
			if ( document.location.pathname === '/x' ) {
				// on a second/third/... page of thread
				commentsTrs = commentsTrs.querySelectorAll ( 'td table tbody tr' );
			} else {
				// first page of thread
				commentsTrs = commentsTrs.querySelectorAll ( 'td table' )[1].querySelectorAll ( 'tbody > tr' );
			}
		} catch ( e ) {
			alert ( "Ooops, something is wrong. Are you sure you are on a 'Ask HN: Who is hiring?' page?" );
			return;
		}

		var searchCities = prompt ( "Enter the cities (separated by commas) you are interested in:", localStorage.getItem ( 'hn_hiring_filter' ) );
		searchCities = searchCities.trim ();
		if ( searchCities === '' ) {
			return;
		}

		searchCities = searchCities.toLowerCase ();

		localStorage.setItem ( 'hn_hiring_filter', searchCities );

		searchCities = searchCities.split ( ',' );
		for ( var i in searchCities ) {
			searchCities[i] = searchCities[i].trim ();
		}

		for ( var i in commentsTrs ) {
			var commentTr = commentsTrs[i];

			try {
				var commentText = commentTr.innerHTML;
				if ( !commentText ) {
					continue;
				}

				commentText = commentText.toLowerCase ();

				var foundCity = false;
				for ( var i in searchCities ) {
					if ( commentText.indexOf ( searchCities[i] ) >= 0 ) {

						foundCity = true;
						break;
					}
				}

				if ( foundCity === false ) {
					commentTr.parentNode.removeChild ( commentTr );
				}
			} catch ( e ) {
			}
		}
	} catch ( e ) {
		alert ( "Something went wrong :/ please try again!" );
	}
} ( document ) );