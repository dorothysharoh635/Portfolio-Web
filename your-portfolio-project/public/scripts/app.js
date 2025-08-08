/*
 * File: src/scripts/app.js
 * Description: Main JavaScript file for handling interactive functionality on the portfolio website.
 */

// This function runs when the entire page is loaded.
document.addEventListener('DOMContentLoaded', () => {
	// Log a message to the console to confirm the script is working.
	console.log('Portfolio website script loaded successfully!');

	// Hamburger menu toggle
	const navToggle = document.querySelector('.nav-toggle');
	const mainNav = document.querySelector('.main-nav');
	navToggle.addEventListener('click', () => {
		const expanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', !expanded);
		mainNav.classList.toggle('nav-open');
	});

	// Close menu when a link is clicked (on mobile)
	document.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			if (window.innerWidth <= 768) {
				mainNav.classList.remove('nav-open');
				navToggle.setAttribute('aria-expanded', 'false');
			}
		});
	});

	// Smooth scrolling for navigation links (only for # links)
	const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
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
