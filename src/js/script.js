var slider = tns({
	container: '.slider__inner',
	items: 1,
	slideBy: 'page',
	speed: "1000",
	controls: false,
	navPosition: "bottom",
	responsive: {
		768: {
			nav:"false"
		},
	}
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
 
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});

(function($) {
	$(function() {
	  
	  $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
		 $(this)
			.addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
			.closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
	  });
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault()
				$('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
				$('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
			});
		});
	}
	toggleSlide('.catalogue-item__more')
	toggleSlide('.catalogue-item__back')
})(jQuery);