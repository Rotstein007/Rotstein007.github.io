document.addEventListener("DOMContentLoaded", () => {

    /* 1. SCROLL ANIMATIONEN (Fade In Up) */
    const observerOptions = {
        threshold: 0.15 // Startet wenn 15% des Elements sichtbar sind
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Alle Content-Blöcke beobachten
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach(el => scrollObserver.observe(el));


    /* 2. STICKY HEADER LOGIK */
    const header = document.getElementById('mobile-header');
    const introSection = document.querySelector('.landing');

    if (header && introSection) {
        window.addEventListener('scroll', () => {
            // Wenn man über die Landing-Page hinaus scrollt, Header zeigen
            const triggerHeight = introSection.offsetHeight * 0.8;

            if (window.scrollY > triggerHeight) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
        });
    }
});