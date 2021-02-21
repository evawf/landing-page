/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navItems = document.getElementsByClassName('nav-item');
let navbarHeight = 0;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    for (section of sections) {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = section.querySelector('h2').textContent;
        navItem.classList.add('nav-item');
        navLink.classList.add('nav-link');
        navLink.href = "#" + section.id;
        navItem.id = "nav-" + section.id;
        navItem.appendChild(navLink);
        navbar.appendChild(navItem);
    }
    navbarHeight = document.getElementById('top').offsetHeight;
}

buildNav();

// Add class 'active' to section when near top of viewport
window.onscroll = function () { activeSection() };

function debug(text) {
    document.getElementById('debug').textContent = text;
}

function activeSection() {
    sections.forEach(section => {
        section.classList.remove('active-section');
        navItem = document.getElementById("nav-" + section.id);
        navItem.classList.remove('active')
        if (
            (section.offsetTop - window.pageYOffset < navbarHeight)
            &&
            (section.offsetTop + section.offsetHeight - window.pageYOffset > navbarHeight)
        ) {
            navItem.classList.add('active');
            section.classList.add('active-section');
        }
    });
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


