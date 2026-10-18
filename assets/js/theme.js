"use strict";

(() => {
    const labels = {
        de: { light: "Zum Hellmodus wechseln", dark: "Zum Dunkelmodus wechseln" },
        en: { light: "Switch to light mode", dark: "Switch to dark mode" }
    };
    let theme = "dark";
    let button;

    try {
        if (localStorage.getItem("theme") === "light") {
            theme = "light";
        }
    } catch {
        // Theme switching also works when browser storage is unavailable.
    }

    document.documentElement.dataset.theme = theme;

    function updateLabel() {
        if (!button) return;
        const language = document.documentElement.lang === "en" ? "en" : "de";
        button.setAttribute("aria-label", labels[language][theme === "dark" ? "light" : "dark"]);
    }

    document.addEventListener("portfolio:languagechange", updateLabel);
    document.addEventListener("DOMContentLoaded", () => {
        const control = document.querySelector("[data-theme-control]");
        if (!control) return;

        button = document.createElement("button");
        button.type = "button";
        button.className = "theme-toggle";
        button.id = "theme-toggle";
        button.innerHTML = `
            <svg class="theme-icon-sun" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
            </svg>
            <svg class="theme-icon-moon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                <path d="M20.6 14.2A9 9 0 0 1 9.8 3.4a9 9 0 1 0 10.8 10.8Z"></path>
            </svg>`;
        button.addEventListener("click", () => {
            theme = theme === "dark" ? "light" : "dark";
            document.documentElement.dataset.theme = theme;
            updateLabel();
            try {
                localStorage.setItem("theme", theme);
            } catch {
                // Keep the current page usable without persistent preferences.
            }
        });
        control.appendChild(button);
        updateLabel();
    }, { once: true });
})();
