$(document).ready(function () {
	$('.slide-home').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  slide: 'div',
	  easing: 'linear'
	});
	$('.slick-slide').imagefill();
});

