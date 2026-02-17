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


    /* Sticky header removed by design */
});
