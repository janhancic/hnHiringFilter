(function ( document ) {

	// jQuery equivalent selector: body > center > table > tbody > tr:eq(2) > td table:eq(1) > tbody > tr
	var comments = document.querySelectorAll ( 'body > center > table > tbody > tr' )[2].querySelectorAll ( 'td table' )[1].querySelectorAll ( 'tbody > tr' );
	// comments = comments.querySelectorAll ( 'td table' )[1];
	// comments = comments.querySelectorAll ( 'tbody > tr' );

	console.log ( comments );
} ( document ) );