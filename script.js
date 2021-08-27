'use strict';

//Variables;

const hamburger = document.getElementById('hamburger');

const navbar = document.getElementById('navbar');

const navLink = document.getElementsByClassName('nav-link');

let menuOpen = false;

// 1. Function Open/Close Mobile Menu on hamburger click:

hamburger.addEventListener('click', () => {
     if (!menuOpen) {
          hamburger.classList.add('hamburger--active');
          menuOpen = true;
          navbar.classList.add('active');
     } else {
          hamburger.classList.remove('hamburger--active');
          navbar.classList.remove('active');
          menuOpen = false;
     }
});

//Function closeMenu:

const closeMenu = function () {
     hamburger.classList.remove('hamburger--active');
     navbar.classList.remove('active');
     menuOpen = false;
};

// 2. Events Close Mobile Menu:

// a) Close Mobile Menu on click links:

for (let link of navLink) {
     link.addEventListener('click', closeMenu);
}

// b) Close Mobile Menu press Escape button:

document.addEventListener('keydown', function (e) {
     if (
          e.key === 'Escape' &&
          hamburger.classList.contains('hamburger--active')
     ) {
          closeMenu();
          menuOpen = false;
     }
});
