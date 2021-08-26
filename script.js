'use strict';

//Variables;

const hamburger = document.getElementById('hamburger');

const navbar = document.getElementById('navbar');

const navLink = document.getElementsByClassName('nav-link');

//Function openMenu

const openMenu = function () {
     hamburger.classList.add('hamburger--active');

     //  hamburger.classList.add('close');
     navbar.classList.add('active');
};

//Function closeMenu

const closeMenu = function () {
     hamburger.classList.remove('hamburger--active');
     navbar.classList.remove('active');
};

// 1. Event Open Mobile Menu:

hamburger.addEventListener('click', openMenu);

// 2. Event Close Mobile Menu:

for (let link of navLink) {
     link.addEventListener('click', closeMenu);
}

if (hamburger.classList.contains('active')) {
     hamburger.addEventListener('click', closeMenu);
}

document.addEventListener('keydown', function (e) {
     if (e.key === 'Escape' && hamburger.classList.contains('active')) {
          closeMenu();
     }
});
