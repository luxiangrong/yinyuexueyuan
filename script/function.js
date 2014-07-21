(function($) {
	$(function() {
		$(document).ready(function() {
			$(window).smoothScroll();
			
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
			
			$("#student").owlCarousel({
				navigation : true, // Show next and prev buttons
				navigationText: ['&nbsp;','&nbsp;'],
				items: 3
			});
			$("#performance").owlCarousel({
				navigation : true, // Show next and prev buttons
				navigationText: ['&nbsp;','&nbsp;'],
				items: 4
			});
			
				
			
		});
	});
})(jQuery);
