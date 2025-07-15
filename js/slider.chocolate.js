new Swiper('.reviews-swiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.reviews-swiper .swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.reviews-swiper .swiper-button-next',
		prevEl: '.reviews-swiper .swiper-button-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
})
