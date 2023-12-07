let burgerBtn = document.querySelector(".burger")
let headerMenu = document.querySelector(".header__menu")

burgerBtn.addEventListener("click", () => {
	headerMenu.classList.toggle("active-menu")
	document.body.classList.toggle("active-body")
	burgerBtn.classList.toggle("active-burger")
})

let swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		460: {
			slidesPerView: 2
		},
		700: {
			slidesPerView: 3
		},
		1080: {
			slidesPerView: 4
		},
		1300: {
			slidesPerView: 6
		},
	},
});

let saleSwiper = new Swiper(".sale-swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		820: {
			slidesPerView: 2,
			loop: true
		},
		1240: {
			slidesPerView: 3,
			loop: false,
		},
	},
});

let mainSwiper = new Swiper(".main-swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
});


async function product () {

    const requestURL = 'https://holovchuknatalia.github.io/product.json'
    const request = new Request(requestURL)

    const response = await fetch(request)
    const cardArrivals = await response.json()
 productCard (cardArrivals)
}

function productCard (obj) {
    const section = document.getElementById('swiper-wrapper-js')
    console.log(section)
    const products = obj.products

    for(const product of products) {
    console.log(product)

    const cardProduct = document.createElement('div')
	cardProduct.className = 'card-arrivals swiper-slide';

	const arrivalsCard = document.createElement('div')
	arrivalsCard.className = 'arrivals-card';

	const cardImg = document.createElement('img')
	cardImg.src = product.img
	cardImg.className = 'card-img-arrivals';

	const btnFavorite = document.createElement('button')
	btnFavorite.className = 'btn-favorite';

	const cardText = document.createElement('div')
	cardText.className = 'card-text'; 
	
	const cardDescription = document.createElement('p')
	cardDescription.textContent = product.description
	cardDescription.className = 'card-title';

	const cardPrice = document.createElement('span')
	cardPrice.textContent = product.price +  '$'
	cardPrice.className = 'arrivals-card-price'
  
  	const ratingDiv = document.createElement('div')
  	if (product.rating > 0) {
   
   	ratingDiv.className = 'card-rating'
   	for (let i = 0; i < 5; i++) {
    if (i < product.rating) {
     const starDiv = document.createElement('div')
     starDiv.className = 'rating-img rating-active';
     ratingDiv.append(starDiv)
    } else {
     const starDiv = document.createElement('div')
     starDiv.className = 'rating-img';
     ratingDiv.append(starDiv)
    }
   }
  }

  	arrivalsCard.append(ratingDiv)
  	arrivalsCard.append(btnFavorite)
    arrivalsCard.append(cardImg)
	cardProduct.append(arrivalsCard)
	cardText.append(cardPrice)
  	cardText.append(cardDescription)
  	cardProduct.append(cardText)
    section.append(cardProduct) 
    }
}

product();



