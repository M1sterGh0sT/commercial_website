let swiper = new Swiper(".mySwiper", {
	pagination: {
	  el: ".swiper-pagination",
	  type: "fraction",
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},

	keyboard: {
		enabled: true,

		onlyInViewport: true,

		pageUpDown: true,
	},

  });



alert('Переверніть екран для кращого перегляду сторінки')
