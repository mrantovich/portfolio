const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const wholeHTML = document.querySelector('html');
const wholeBody = document.querySelector('body');
burger.addEventListener('click', addActive);

function addActive() {
	this.classList.toggle('_active');
	navbar.classList.toggle('_active');
	wholeHTML.classList.toggle('_lock');
	wholeBody.classList.toggle('_lock');
};

function removeActive() {
	burger.classList.remove('_active');
	navbar.classList.remove('_active');
	wholeHTML.classList.remove('_lock');
	wholeBody.classList.remove('_lock');
};

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			removeActive();

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
		};
	};
};