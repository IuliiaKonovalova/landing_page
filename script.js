'use strict';

//Variables;

const hamburger = document.getElementById('hamburger');

const openMenu = function () {
     hamburger.classList.add('active');
};

hamburger.addEventListener('click', openMenu);
