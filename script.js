'use strict';

//Variables;

const hamburger = document.getElementById('hamburger');

const navbar = document.getElementById('navbar');

const openMenu = function () {
     hamburger.classList.add('active');
     navbar.classList.add('active');
};

const closeMenu = function () {
     hamburger.classList.remove('active');
     navbar.classList.remove('active');
};

hamburger.addEventListener('click', openMenu);
