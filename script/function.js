(function($) {
	$(function() {
		$(document).ready(function() {
			$("#banner").owlCarousel({

				navigation : true, // Show next and prev buttons
				navigationText: ['&nbsp;','&nbsp;'],
				singleItem : true,
				transitionStyle : "fade"

				// "singleItem:true" is a shortcut for:
				// items : 1,
				// itemsDesktop : false,
				// itemsDesktopSmall : false,
				// itemsTablet: false,
				// itemsMobile : false

			});
		});
	});
})(jQuery);
