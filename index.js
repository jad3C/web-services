const nav = document.querySelector('.nav');
const navIcons = document.querySelector('.menu-and-close-icons');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navItems = document.querySelectorAll('.nav a');
const header = document.querySelector('.header');

navIcons.addEventListener('click', () => {
	if(nav.classList.contains('showMenu')) {
		menuIcon.classList.remove('hideIcon');
		closeIcon.classList.remove('showIcon');
		nav.classList.remove('showMenu');
	} else {
		menuIcon.classList.add('hideIcon');
		closeIcon.classList.add('showIcon');
		nav.classList.add('showMenu');
	}
});

/*navItems.forEach(navItem => {
	navItem.addEventListener('click', e => {
		document.querySelector('.nav a.active').classList.remove('active');
		const clickedItem = e.target;
		clickedItem.classList.add('active');
	});
});*/

const shadowHeader = () => {
	this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shadowHeader);