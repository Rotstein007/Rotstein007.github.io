/**
 * Main application script
 * Handles custom scrolling and initialization
 */
"use strict";

/**
 * Custom non-linear scroll function (Ease-Out-Quart)
 * @param {string} targetSelector - CSS selector for the target element
 */
window.customScrollTo = function(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;

    // Duration in ms (0.7s = fast & snappy)
    const duration = 700;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        // Easing function: 1 - (1 - t)^4
        const ease = (t) => 1 - Math.pow(1 - t, 4);

        const run = ease(Math.min(timeElapsed / duration, 1));

        window.scrollTo(0, startPosition + (distance * run));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
};

// Initialize listeners when DOM is ready
document.addEventListener("DOMContentLoaded", () => {

    // Attach custom scroll to all anchor links starting with #
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            window.customScrollTo(targetId);
        });
    });
});