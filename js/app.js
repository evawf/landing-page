//Define Global Variables
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navItems = document.getElementsByClassName('nav-item');
let navbarHeight = 0;

//Build the nav
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

//Custom behaviours
const mainNavBar = document.getElementById('mainNavBar');
window.onscroll = manageScrolling;
var hideNavCallbackTimeout;
mainNavBar.addEventListener('mouseenter', function() {
    clearTimeout(hideNavCallbackTimeout);
});
mainNavBar.addEventListener('mouseover', function() {
    clearTimeout(hideNavCallbackTimeout);
});
mainNavBar.addEventListener('mouseleave', function(){
    setTimeout(maybeHideNavBar, 1000);
});
function manageScrolling() {
    sections.forEach(section => {
        section.classList.remove('active-section');
        navItem = document.getElementById("nav-" + section.id);
        navItem.classList.remove('active');
        //Back to top button
        const topBtn = document.getElementById("top-btn");
        if (window.pageYOffset > 100) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
        //Add class 'active' to section when near top of viewport
        if (
            (section.offsetTop - window.pageYOffset < navbarHeight)
            &&
            (section.offsetTop + section.offsetHeight - window.pageYOffset > navbarHeight)
        ) {
            navItem.classList.add('active');
            section.classList.add('active-section');
        }
    });

    //Handle navbar display
    mainNavBar.classList.remove('hidden')
    clearTimeout(hideNavCallbackTimeout);
    hideNavCallbackTimeout = setTimeout(maybeHideNavBar, 2500);
}
function maybeHideNavBar() {
    if(window.pageYOffset > 0) {
        mainNavBar.classList.add('hidden')
    }
}

//Make navbar collapsible
const menuBtn = document.getElementById("toggle-nav-btn");
menuBtn.addEventListener('click', function() {
    if (navbar.classList.contains('expanded')) {
        closeNavBar();
    } else {
        openNavBar();
    }
});
navbar.addEventListener('click', closeNavBar)
function openNavBar() {
    navbar.classList.add('expanded');
    menuBtn.classList.add('expanded');
}
function closeNavBar() {
    navbar.classList.remove('expanded');
    menuBtn.classList.remove('expanded');
}

//Smooth scroll behavior
const getAnchor = 'a[href^="#"';
const allAnchors = document.querySelectorAll(getAnchor);

allAnchors.forEach(a => {
    a.onclick = function(event) {
        event.preventDefault();
        const destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

