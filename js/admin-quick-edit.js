(function($) {

	// we create a copy of the WP inline edit tax function
	var $wp_inline_edit = inlineEditTax.edit;

	// and then we overwrite the function with our own code
	inlineEditTax.edit = function( id ) {

		// "call" the original WP edit function
		// we don't want to leave WordPress hanging
		$wp_inline_edit.apply( this, arguments );

		// get the term ID
		var $term_id = 0;
		if ( typeof( id ) == 'object' ) {
			$term_id = parseInt( this.getId( id ) );
		}

		if ( $term_id > 0 ) {
			var $edit_row = $( '#edit-' + $term_id ); // define the quick edit row
			var $term_row = $( '#tag-' + $term_id ); // define the term row

			// get the data
			var menu_order = $( '.column-menu_order', $term_row ).text();

			// populate the data
			$( 'input[name="ns_tmo_menu_order"]', $edit_row ).val( menu_order );
		}
	};

})(jQuery);