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
