/*
 * File: src/scripts/app.js
 * Description: Main JavaScript file for handling interactive functionality on the portfolio website.
 */

// This function runs when the entire page is loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Log a message to the console to confirm the script is working.
    console.log('Portfolio website script loaded successfully!');

    // --- Add your interactive JavaScript code here ---

    // Example: A simple function to handle smooth scrolling for navigation links.
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent the default anchor link behavior
            e.preventDefault();

            // Get the target element's ID from the href attribute
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to the target element smoothly
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});