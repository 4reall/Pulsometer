// const { reset } = require("browser-sync");

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
	toggleSlide('.catalogue-item__more');
	toggleSlide('.catalogue-item__back');

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('fast');
		
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order,#thanks').fadeOut('fast');
		
	});
	$('.button_card').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalogue-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('fast');
		})
	});

	function myValidate(form) {
		$(form).validate({
			rules: {
				name: 'required',
				phone: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: 'Пожалуйста, введите свое имя',
				phone: 'Пожалуйста, введите свой номер телефона',
				email: {
					required: 'Пожалуйста, введите свою почту',
					email: 'Вы ввели некорректный адрес почты'
				}
			},
		});
	}
	myValidate('#consultation-form');
	myValidate('#consultation form');
	myValidate('#order form');

	$("input[name=phone]").mask("+7 (999) 999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			 type: "POST",
			 url: "mailer/smart.php",
			 data: $(this).serialize()
		}).done(function() {
			 $(this).find("input").val("");
			 $('#consultation, #order').fadeOut();
			 $('.overlay, #thanks').fadeIn('slow');

			 $('form').trigger('reset');
		});
		return false;
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.page-up').fadeIn();
		}
		else {
			$('.page-up').fadeOut();
		}
	});

	$("a").on('click', function (event) {
		
		if (this.hash !== "") {
		  event.preventDefault();
  
		  const hash = this.hash;

		  $('html, body').animate({
			 scrollTop: $(hash).offset().top
		  }, 400, function(){
			 window.location.hash = hash;
		  });
		} 
	});
	
})(jQuery);