'use strict';

//Variables;

const hamburger = document.getElementById('hamburger');

const navbar = document.getElementById('navbar');

const navLink = document.getElementsByClassName('nav-link');

//Function openMenu

const openMenu = function () {
     hamburger.classList.add('active');

     //  hamburger.classList.add('close');
     navbar.classList.add('active');
};

//Function closeMenu

const closeMenu = function () {
     hamburger.classList.remove('active');
     navbar.classList.remove('active');
};

// 1. Event Open Mobile Menu:

hamburger.addEventListener('click', openMenu);

// 2. Event Close Mobile Menu:

// navLink.forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', function (e) {
     if (e.key === 'Escape' && hamburger.classList.contains('active')) {
          closeMenu();
     }
});
