'use strict';

//Variables;

// 1. for navbar

const hamburger = document.getElementById('hamburger');

const navbar = document.getElementById('navbar');

const navLink = document.getElementsByClassName('nav-link');

let menuOpen = false;

// 2. for gallery

const carouselTrack = document.querySelector('.carousel__track--top');
const slides = document.querySelectorAll('.carousel__slide');

const prevButton = document.querySelector('#carousel__button--prev');
const nextButton = document.querySelector('#carousel__button--next');

const carouselNav = document.querySelector('.carousel__nav');
const dots = document.querySelectorAll('.carousel__indicator');

//
///////////////    Mobile Menu:   /////////////////
//

// 1. Function Open/Close Mobile Menu on hamburger click:

hamburger.addEventListener('click', () => {
     if (!menuOpen) {
          hamburger.classList.add('hamburger--active');
          menuOpen = true;
          navbar.classList.add('navbar--active');
     } else {
          hamburger.classList.remove('hamburger--active');
          navbar.classList.remove('navbar--active');
          menuOpen = false;
     }
});

//Function closeMenu:

const closeMenu = function () {
     hamburger.classList.remove('hamburger--active');
     navbar.classList.remove('navbar--active');
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
