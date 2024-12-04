// Select elements
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// Toggle menu visibility with ARIA
hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded on button
    hamburger.setAttribute('aria-expanded', !isExpanded);

    // Show or hide the menu
    if (isExpanded) {
        navMenu.setAttribute('hidden', ''); // Hide menu
    } else {
        navMenu.removeAttribute('hidden'); // Show menu
    }
});
