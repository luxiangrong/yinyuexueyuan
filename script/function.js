(function($) {
	// USE STRICT
	"use strict";
	
	var sudden = {
		init : function(){
			if(!$(':has(.scholarship-wrap)')) {
				return false;
			}
			var $suddenContainer = $(".scholarship-wrap");
			var itemCount = $suddenContainer.find('.scholarship-item').size();
			
			var originItemsWidth = 0;
			$suddenContainer.find('.scholarship-item').each(function(i,item){
				originItemsWidth += $(item).width();
			});
			var rate = $window.width() / originItemsWidth;
			$suddenContainer.find('.scholarship-item').each(function(i,item){
				var originItemWidth = $(item).width();
				var originItemHeight = $(item).height();
				$(item).width(originItemWidth * rate);
				$(item).find('img').width(originItemWidth * (rate + 0.1));
				$(item).height(originItemHeight * rate);
			});
			
			$suddenContainer.find('.scholarship-item').on('mouseenter', function(){
				$suddenContainer.find('.scholarship-item').removeClass('selected-item');
				$(this).data('origin-width', $(this).width());
				$(this).addClass('selected-item');
				
				
				var $addedWidth = $(this).find('img').width() - $(this).width();
				
				console.log($addedWidth);
				
				$suddenContainer.find('.scholarship-item').each(function(i, item){
					$(this).width($(this).width() - $addedWidth / 4);
				});
				
				$(this).width($(this).find('img').width());
			});
			$suddenContainer.find('.scholarship-item').on('mouseleave', function(){
				if($(this).data('origin-width') != undefined) {
					$(this).width($(this).data('origin-width'));
				}
			});
		}
	};
	
	var $window = $(window);
	
	var onReady = {
		init: function(){
			sudden.init();
		}
	};
	
	$(document).ready(onReady.init);
	
	$(function() {
		$(document).ready(function() {
			$(window).smoothScroll();

			$("#banner").owlCarousel({

				navigation : true, // Show next and prev buttons
				navigationText : ['&nbsp;', '&nbsp;'],
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
				navigationText : ['&nbsp;', '&nbsp;'],
				items : 3
			});
			$("#performance").owlCarousel({
				navigation : true, // Show next and prev buttons
				navigationText : ['&nbsp;', '&nbsp;'],
				items : 4
			});
			

		});
	});
})(jQuery);
