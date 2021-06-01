const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
burger.addEventListener('click', addActive);

function addActive() {
	this.classList.toggle('_active');
	navbar.classList.toggle('_active');
};