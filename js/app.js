//Define Global Variables
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navItems = document.getElementsByClassName('nav-item');
let navbarHeight = 0;

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
const mainNavBar = document.getElementById('mainNavBar');
window.onscroll = manageScrolling;
var hideNavCallbackTimeout;
function manageScrolling() {
    //handle section custom behaviours
    sections.forEach(section => {
        section.classList.remove('active-section');
        navItem = document.getElementById("nav-" + section.id);
        navItem.classList.remove('active');
        const topBtn = document.getElementById("top-btn");
        if (window.pageYOffset > 100) {
            topBtn.style.visibility = "visible";
        } else {
            topBtn.style.visibility = "hidden";
        }
        if (
            (section.offsetTop - window.pageYOffset < navbarHeight)
            &&
            (section.offsetTop + section.offsetHeight - window.pageYOffset > navbarHeight)
        ) {
            navItem.classList.add('active');
            section.classList.add('active-section');
        }
    });
    //handle navbar display
    mainNavBar.style.visibility = 'visible';
    clearTimeout(hideNavCallbackTimeout);
    hideNavCallbackTimeout = setTimeout(function() {
        if(window.pageYOffset > 0) {
            mainNavBar.style.visibility = 'hidden';
        }
    }, 2500);
}


//Click anchor link to scroll smoothly
// document.querySelectorAll('a[href^="#').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

//Add a scroll to Top buttion
// const topBtn = document.getElementById("top-btn");
// window.onscroll = function () { displayTopBtn() };
// function displayTopBtn() {
//     if (window.pageYOffset > 100) {
//         topBtn.style.display = "block";
//     } else {
//         topBtn.style.display = "none";
//     }
// }

//Make sections collapsible




