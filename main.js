//header scroll

window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	//topbtn

	window.addEventListener("scroll", function (e) {
		if (window.pageYOffset > 100) {
		  document.querySelector("nav").classList.add("is-scrolling");      
		  toTop.classList.add("is-active");
		} else {
		  document.querySelector("nav").classList.remove("is-scrolling");      
		  toTop.classList.remove("is-active");
		}
	});
	
	const toTop = document.querySelector(".to-top");

//hamburger-menu mobile

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});
}




