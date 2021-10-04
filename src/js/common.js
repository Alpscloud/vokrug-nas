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


	$('.menu-item-has-children').each(function() {
		var btn = '<button class="btn-toggle js-toggle-submenu-btn" type="button"><svg  viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><path d="M0.163933 11.1725C-0.0347736 10.9777 -0.0528378 10.6728 0.10974 10.458L0.163933 10.3965L4.64894 5.99984L0.163933 1.60319C-0.0347736 1.40839 -0.0528378 1.10356 0.10974 0.888754L0.163933 0.827214C0.362639 0.632414 0.673582 0.614705 0.892695 0.774086L0.95547 0.827214L5.83607 5.61185C6.03477 5.80665 6.05284 6.11148 5.89026 6.32628L5.83607 6.38782L0.95547 11.1725C0.736893 11.3867 0.38251 11.3867 0.163933 11.1725Z"/></svg></button>';
		var link = $(this).find('> a');
		$(btn).insertAfter(link);

	});

	$('.js-toggle-submenu-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$(this).parents('LI').find('UL').stop().slideToggle(220);
	});

	$('.js-open-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();
		$('html').addClass('is-fixed');
		$('.js-menu').addClass('is-opened');

	});

	$('.js-close-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();
		$('html').removeClass('is-fixed');
		$('.js-menu').removeClass('is-opened');

	});

	$('.js-open-mobile-search-btn').on('click', function(e) {
		e.preventDefault();
		$('html').addClass('is-fixed');
		$('.js-search').addClass('is-opened');

	});

	$('.js-close-mobile-search-btn').on('click', function(e) {
		e.preventDefault();
		$('html').removeClass('is-fixed');
		$('.js-search').removeClass('is-opened');

	});


	$('.js-toggle-article-contents-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');
		$(this).parents('.article-mobile-tools').find('.toc_widget_list').stop().slideToggle(200);
	});




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


	var articlesSliderInit = $('.js-articles-slider');

	if (articlesSliderInit.length > 0) {
		articlesSliderInit.each(function() {
			var self = $(this);

			var articlesSlider = new Swiper(this, {
				slidesPerView: 'auto',
				loop: false,
				spaceBetween: 0,
				scrollbar: {
					el: this.parentNode.querySelector('.js-articles-slider-scrollbar'),
					draggable: true,
					hide: false
				},
				navigation: {
					disabledClass: 'is-disabled',
					nextEl: this.parentNode.querySelector('.js-articles-slider-btn-next'),
					prevEl: this.parentNode.querySelector('.js-articles-slider-btn-prev'),
				},
				breakpoints: {
					1200: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					1050: {
						slidesPerView: 2,
						spaceBetween: 30
					},
					767: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					700: {
						slidesPerView: 2,
						spaceBetween: 30
					}
				}
			});
		});
	}


	var subcategoriesSlider = new Swiper('.js-subcategories-slider', {
		slidesPerView: 'auto',
		spaceBetween: 15,
		scrollbar: {
			el: document.querySelector('.js-subcategories-slider-scrollbar'),
			draggable: true,
			hide: false
		},
		navigation: {
			disabledClass: 'is-disabled',
			nextEl: document.querySelector('.js-subcategories-slider-btn-next'),
			prevEl: document.querySelector('.js-subcategories-slider-btn-prev'),
		},
	});

	$('.article, .aside').theiaStickySidebar({
		'additionalMarginTop': 20,
		'disableOn': false
	});

});
