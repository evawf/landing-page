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
const navItems = document.querySelectorAll('.navItem');
const sections = document.querySelectorAll('section');
const navItemNames = document.querySelectorAll('h2');


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
for (section of sections) {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = document.querySelector('h2').textContent;
    navLink.classLst.add('navItem');
    navLink.href = "#" + section.id;
    navItem.appendChild(navLink);
    navbar.appendChild(navItem);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Eventsß
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


