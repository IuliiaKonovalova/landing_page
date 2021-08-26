'use strict';

//Variables;

const hamburger = document.getElementById('hamburger');

const navbar = document.getElementById('navbar');

//Function openMenu

const openMenu = function () {
     hamburger.classList.add('active');
     navbar.classList.add('active');
};

//Function closeMenu

const closeMenu = function () {
     hamburger.classList.remove('active');
     navbar.classList.remove('active');
};

hamburger.addEventListener('click', openMenu);
