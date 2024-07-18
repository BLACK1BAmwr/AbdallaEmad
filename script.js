// Toggle menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Typing effect
const typingSpan = document.querySelector('.typing span');
const words = ['Frontend Developer', 'Python Developer', 'Graphic Designer', 'Anime Designer', 'Editor'];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = words[wordIndex];
let isDeleting = false;

window.onload = function() {
    document.querySelector('svg').style.visibility = 'visible';
  };