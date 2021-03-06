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
const dots = document.querySelectorAll('.carousel__nav--item');

let current = 0;

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

//
///////////////    Mobile Menu:   /////////////////
//

function reset() {
     for (let i = 0; i < slides.length; i++) {
          slides[i].classList.replace(
               'carousel__images--visible',
               'carousel__images--hidden'
          );
          dots[i].classList.replace(
               'carousel__nav--active',
               'carousel__nav--disable'
          );
     }
}

// Start Slider the first image

function startSlide() {
     reset();
     slides[0].classList.replace(
          'carousel__images--hidden',
          'carousel__images--visible'
     );
     dots[0].classList.replace(
          'carousel__nav--disable',
          'carousel__nav--active'
     );
}

// Previous Slide

function slidePrev() {
     reset();
     slides[current - 1].classList.replace(
          'carousel__images--hidden',
          'carousel__images--visible'
     );
     dots[current - 1].classList.replace(
          'carousel__nav--disable',
          'carousel__nav--active'
     );
     current--;
}

// Next Slide
function slideNext() {
     reset();
     slides[current + 1].classList.replace(
          'carousel__images--hidden',
          'carousel__images--visible'
     );
     dots[current + 1].classList.replace(
          'carousel__nav--disable',
          'carousel__nav--active'
     );
     current++;
}

// Click Previous Button
prevButton.addEventListener('click', function () {
     if (current === 0) {
          current = slides.length;
     }
     slidePrev();
});

// Click Next Button
nextButton.addEventListener('click', function () {
     if (current === slides.length - 1) {
          current = -1;
     }
     slideNext();
});

startSlide();
