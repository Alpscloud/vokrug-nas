$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});


	$('.nav li a').wrapInner('<span></span>');




	var mobileArticlesSlider = undefined;



	function initMobileArticlesSlider() {

		var screenWidth = $(window).width();

			if(screenWidth < 700 && mobileArticlesSlider == undefined) {     
	

			mobileArticlesSlider = new Swiper('.js-mobile-articles-slider', {            
				slidesPerView: 'auto',
				loop: true,
				speed: 700,
				// navigation: {
					
				// }
		});

		} else if (screenWidth > 700 && mobileArticlesSlider != undefined) {

			mobileArticlesSlider.destroy();
			mobileArticlesSlider = undefined;
			$('.js-mobile-articles-slider .swiper-wrapper').removeAttr('style');
			$('.js-mobile-articles-slider .swiper-slide').removeAttr('style');  

		}        
	}

	if ($('.js-mobile-articles-slider').length > 0) {
		initMobileArticlesSlider();

		$(window).on('resize', function(){
			initMobileArticlesSlider();        
		});

	}

});
