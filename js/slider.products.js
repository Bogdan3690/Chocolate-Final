new Swiper('.products-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 4,
		},
	},
})
