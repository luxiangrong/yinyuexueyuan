(function($) {
	// USE STRICT
	"use strict";

	//实现学术活动处的动态效果
	var sudden = {
		init : function() {
			if (!$(':has(.scholarship-wrap)')) {
				return false;
			}
			var $suddenContainer = $(".scholarship-wrap");

			$suddenContainer.imagesLoaded(function() {
				var itemCount = $suddenContainer.find('.scholarship-item').size();

				var originItemsWidth = 0;
				$suddenContainer.find('.scholarship-item').each(function(i, item) {
					originItemsWidth += $(item).width();
				});
				var rate = $window.width() / originItemsWidth;
				$suddenContainer.find('.scholarship-item').each(function(i, item) {
					var originItemWidth = $(item).width();
					var originItemHeight = $(item).height();
					$(item).width(originItemWidth * rate);
					$(item).find('img').width(originItemWidth * (rate + 0.3));
					$(item).height(originItemHeight * (rate + 0.3) );
				});

				$suddenContainer.find('.scholarship-item').each(function(i, item) {
					$(this).data('origin-width', $(this).width());
				});

				$suddenContainer.find('.scholarship-item').on('mouseenter', function() {
					$suddenContainer.find('.scholarship-item').removeClass('selected-item');
					$(this).addClass('selected-item');

					var $addedWidth = $(this).find('img').width() - $(this).data('origin-width');

					$suddenContainer.find('.scholarship-item').each(function(i, item) {
						$(this).width($(this).data('origin-width') - $addedWidth / 4);
					});

					$(this).width($(this).find('img').width());
				});
				$suddenContainer.find('.scholarship-item').on('mouseleave', function() {
					$(this).removeClass('selected-item');
					$suddenContainer.find('.scholarship-item').each(function(i, item) {
						if ($(this).data('origin-width') != undefined) {
							$(this).width($(this).data('origin-width'));
						}
					});

				});
			});
		}
		
	};
	
	var imageSwitch = {
		init: function(){
			$('img[data-on]').on('mouseenter', function(){
				var normalImage = $(this);
				var hoverImage = new Image();
				hoverImage.src = $(this).attr('data-on');
				$(hoverImage).css('opacity', 0);
				$(this).after(hoverImage);
				$(this).animate({
					opacity: 0
				},{
					duration: 500
				});
				$(hoverImage).animate({
					opacity: 1
				},{
					duration: 500
				});
				$(hoverImage).off('mouseleave').on('mouseleave', function(){
					$(this).animate({
						opacity: 0
					},{
						duration: 500,
						complete: function() {
					      $(this).remove();
					    }
					});
					normalImage.animate({
						opacity: 1
					},{
						duration: 500
					});
				});
			});
		}
	};

	var $window = $(window);

	var onReady = {
		init : function() {
			imageSwitch.init();
		}
	};

	//stellar计算高度的时候有bug，这里还需要改进
	$(document).ready(onReady.init);

	$(function() {
		$(document).ready(function() {
			$(window).smoothScroll();

			var owlCarouselInit = false;

			$("#banner").owlCarousel({
				navigation : false, // Show next and prev buttons
				singleItem : true,
				transitionStyle : "fade",
				beforeInit: function(){owlCarouselInit=false},
				afterInit: function(){sudden.init();owlCarouselInit=true},
			});

			$("#student").owlCarousel({
				navigation : true, // Show next and prev buttons
				navigationText : ['&nbsp;', '&nbsp;'],
				items : 4,
				beforeInit: function(){owlCarouselInit=false},
				afterInit: function(){owlCarouselInit=true},
			});
			
			$("#performance").owlCarousel({
				navigation : true, // Show next and prev buttons
				navigationText : ['&nbsp;', '&nbsp;'],
				items : 4,
				beforeInit: function(){owlCarouselInit=false},
				afterInit: function(){
					owlCarouselInit=true,
					$(this).find('.foot').width();
				},
			});
			
			
			function initStellar(){
				if(owlCarouselInit) {
					$.stellar({
						hideDistantElements: true,
						horizontalScrolling: false
					});
					return;
				}
			}
			var id = window.setTimeout(function(){
				initStellar();
				clearTimeout(id);
				id = window.setTimeout(initStellar, 100);
			}, 100);
			

		});
	});
})(jQuery);
