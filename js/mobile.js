/**
 * Handles mobile-specific logic (scroll animations, sticky header)
 */
"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* --- Scroll Animations (Fade In) --- */
    const observerOptions = {
        threshold: 0.15 // Trigger when 15% visible
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with .scroll-animate class
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach(el => scrollObserver.observe(el));


    /* --- Sticky Header Logic --- */
    const header = document.getElementById('mobile-header');
    const introSection = document.querySelector('.landing');

    if (header && introSection) {
        window.addEventListener('scroll', () => {
            // Show header when scrolled past 80% of the landing section
            const triggerHeight = introSection.offsetHeight * 0.8;

            if (window.scrollY > triggerHeight) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
        });
    }
});