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

    document.querySelectorAll(".copy-btn").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const value = btn.getAttribute("data-copy");
            if (!value) return;
            try {
                await navigator.clipboard.writeText(value);
                btn.classList.add("copied");
                setTimeout(() => btn.classList.remove("copied"), 1600);
            } catch (e) {
                btn.classList.add("copied");
                btn.setAttribute("data-copy-status", "Kopieren fehlgeschlagen");
                setTimeout(() => {
                    btn.classList.remove("copied");
                    btn.removeAttribute("data-copy-status");
                }, 2000);
            }
        });
    });

    function getApproxAge() {
        const birthYear = 2004;
        const birthMonth = 5;
        const now = new Date();
        let age = now.getFullYear() - birthYear;
        if (now.getMonth() < birthMonth) {
            age -= 1;
        }
        return age;
    }

    const translations = {
        de: {
            "slice.about": "Über Mich",
            "slice.experience": "Erfahrung",
            "slice.projects": "Projekte",
            "slice.skills": "Skills",
            "slice.contact": "Kontakt",
            "slice.socials": "Socials",
            "nav.about": "Über mich",
            "nav.experience": "Erfahrung",
            "nav.projects": "Projekte",
            "nav.skills": "Skills",
            "nav.contact": "Kontakt",
            "nav.socials": "Socials",
            "section.about.title": "Über Mich",
            "section.about.body": "Hey, ich bin Rotstein, <span class=\"age\">{age}</span> Jahre alt. Ich studiere Informatik im 5. Semester, begeistere mich leicht für neue Dinge und arbeite gern an technischen Herausforderungen. Außerdem bin ich offen und positiv gegenüber der Energiewende, technischen Neuerungen und KI.",
            "section.experience.title": "Erfahrung",
            "section.experience.body": "Meine Praxiserfahrung stammt vor allem aus eigenen Projekten. Dabei habe ich mir verschiedene Programmiersprachen und technische Lösungsansätze selbstständig angeeignet.",
            "section.projects.title": "Projekte",
            "section.projects.body": "Auf <a href=\"https://github.com/rotstein007\" target=\"_blank\" rel=\"noopener\" style=\"color: #fff; font-weight: bold; text-decoration: underline;\">GitHub</a> findest du eine Auswahl meiner Projekte. Eines davon ist <a href=\"https://flathub.org/apps/dev.rotstein.SmashedPumpkin\" target=\"_blank\" rel=\"noopener\" style=\"color: #fff; font-weight: bold; text-decoration: underline;\">Smashed Pumpkin</a>, ein GNOME-Tool zum Installieren, Aktualisieren und Verwalten von PumpkinMC-Servern mit Instanzen, Logs sowie Worlds und Plugins.",
            "section.skills.title": "Skills",
            "section.skills.body": "Im Studium habe ich C++, JavaScript und PHP gelernt, mit einer Vertiefung in Java über zwei Module. Ich arbeite sicher mit Git und gängigen IDEs wie Visual Studio Code sowie der JetBrains-Suite. Außerdem nutze ich Linux seit 2015 privat und habe 2019 vollständig von Windows gewechselt.",
            "section.contact.title": "Kontakt",
            "section.contact.body": "Am besten erreichst du mich auf Discord unter rotstein_meister.",
            "section.socials.title": "Soziale Medien",
            "footer.privacy": "Datenschutz",
            "footer.source": "Source",
            "footer.license": "Rotstein - MIT Lizenz 2024"
        },
        en: {
            "slice.about": "About Me",
            "slice.experience": "Experience",
            "slice.projects": "Projects",
            "slice.skills": "Skills",
            "slice.contact": "Contact",
            "slice.socials": "Socials",
            "nav.about": "About me",
            "nav.experience": "Experience",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.contact": "Contact",
            "nav.socials": "Socials",
            "section.about.title": "About Me",
            "section.about.body": "Hi, I am Rotstein, <span class=\"age\">{age}</span> years old. I study computer science in my 5th semester, get excited about new things easily, and enjoy working on technical challenges. I am also open and positive toward the energy transition, technical innovations, and AI.",
            "section.experience.title": "Experience",
            "section.experience.body": "My practical experience mainly comes from passion projects in my free time. Along the way I taught myself various programming languages and technical approaches.",
            "section.projects.title": "Projects",
            "section.projects.body": "On <a href=\"https://github.com/rotstein007\" target=\"_blank\" rel=\"noopener\" style=\"color: #fff; font-weight: bold; text-decoration: underline;\">GitHub</a> you can find a selection of my projects. One of them is <a href=\"https://flathub.org/apps/dev.rotstein.SmashedPumpkin\" target=\"_blank\" rel=\"noopener\" style=\"color: #fff; font-weight: bold; text-decoration: underline;\">Smashed Pumpkin</a>, a GNOME tool to install, update, and manage PumpkinMC servers with instances, logs, worlds, and plugins.",
            "section.skills.title": "Skills",
            "section.skills.body": "At university I learned C++, JavaScript, and PHP, with a deeper focus on Java across two modules. I work confidently with Git and common IDEs like Visual Studio Code and the JetBrains suite. I have used Linux privately since 2015 and fully switched away from Windows in 2019.",
            "section.contact.title": "Contact",
            "section.contact.body": "The best way to reach me is on Discord at rotstein_meister.",
            "section.socials.title": "Social media",
            "footer.privacy": "Privacy Policy",
            "footer.source": "Source",
            "footer.license": "Rotstein - MIT License 2024"
        }
    };

    function applyLanguage(lang) {
        const dictionary = translations[lang];
        if (!dictionary) return;
        const age = getApproxAge();

        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dictionary[key]) {
                el.textContent = dictionary[key].replace("{age}", String(age));
            }
        });

        document.querySelectorAll("[data-i18n-html]").forEach((el) => {
            const key = el.getAttribute("data-i18n-html");
            if (dictionary[key]) {
                el.innerHTML = dictionary[key].replace("{age}", String(age));
            }
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
            const key = el.getAttribute("data-i18n-alt");
            if (dictionary[key]) {
                el.setAttribute("alt", dictionary[key]);
            }
        });

        document.querySelectorAll(".lang-btn").forEach((btn) => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-pressed", String(isActive));
        });

        localStorage.setItem("lang", lang);
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    const storedLang = localStorage.getItem("lang");
    applyLanguage(storedLang === "en" ? "en" : "de");
});
