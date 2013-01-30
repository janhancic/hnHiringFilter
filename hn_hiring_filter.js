(function ( document ) {
	//var searchCity = 'london';

	// jQuery equivalent selector: body > center > table > tbody > tr:eq(2) > td table:eq(1) > tbody > tr
	var comments = null;
	try {
		commentsTrs = document.querySelectorAll ( 'body > center > table > tbody > tr' )[2].querySelectorAll ( 'td table' )[1].querySelectorAll ( 'tbody > tr' );
	} catch ( e ) {
		alert ( "Ooops, something is wrong. Are you sure you are on a 'Ask HN: Who is hiring?' page?" );
		return;
	}

	for ( var i in commentsTrs ) {
		var commentTr = commentsTrs[i];

		try {
			// jQuery equivalent selector: 'table td:eq(2) span.comment'
			var commentText = commentTr.querySelectorAll ( 'table td' )[2].querySelector ( 'span.comment' ).textContent + '';

			if ( /\b(london|boston)\b/ig.test ( commentText ) === false ) {
				// *khm* I feel like there should be a better way to do this :)
				commentTr.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild ( commentTr.parentNode.parentNode.parentNode.parentNode );
			}
		} catch ( e ) {
		}
	}
} ( document ) );