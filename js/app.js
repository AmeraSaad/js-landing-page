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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const buildNav = () => {
    sections.forEach((section) => {
    const navItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = section.dataset.nav;
    anchor.classList.add('menu__link');
    anchor.href = `#${section.id}`;
    navItem.appendChild(anchor);
    navBar.appendChild(navItem);
  });
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNav();

// Add class 'active' to section when near top of viewport
const setActiveNav = () => {
  const navLinks = document.querySelectorAll('.menu__link');
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -50 && rect.top <= 300) {
      navLinks[index].classList.add('active');
    } else {
      navLinks[index].classList.remove('active');
    }
  });
};


// Scroll to anchor ID using scrollTO event
document.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.page__header').offsetHeight;

    // Scroll to the section, offsetting by the header height
    window.scrollTo({
      top: targetSection.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  });
});




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
const makeActive = () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -50 && rect.top <= 300) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  });
};

// Add scroll event listener
window.addEventListener('scroll', () => {
  setActiveNav();
  makeActive();
});



// Function to adjust the margin-top of the main content
function adjustMainMargin() {
    const header = document.querySelector('.page__header');
    const main = document.querySelector('main');
    const headerHeight = header.offsetHeight;

    // Set the margin-top dynamically
    main.style.marginTop = `${headerHeight}px`;
}

// Run the function on load and on resize
window.addEventListener('DOMContentLoaded', adjustMainMargin);
window.addEventListener('resize', adjustMainMargin);
