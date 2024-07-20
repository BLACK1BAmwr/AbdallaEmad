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

function dshowElement() {
        var element = document.getElementById("myElement");
        element.style.display = "none";
        setTimeout(function() {
            element.style.display = "block";
        }, 3000); // 3000 milliseconds = 3 seconds
    }

    // Call showElement function when the page loads
    window.onload = function() {
        dshowElement();
    };