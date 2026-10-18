"use strict";

(() => {
    const translations = {
        de: {
            description: "Eigene Anwendungen für Linux und das Web. Projekte und Kontakt von Rotstein.",
            skip: "Zum Inhalt",
            "intro.greeting": "Hi, ich bin",
            "intro.body": "Ich entwickle eigene Anwendungen für Linux und fürs Web. Meine Projekte findest du hier und auf GitHub.",
            "intro.projects": "Meine Projekte",
            "nav.label": "Kreismenü",
            "nav.about": "Über mich",
            "nav.experience": "Erfahrung",
            "nav.projects": "Projekte",
            "nav.skills": "Skills",
            "nav.contact": "Kontakt",
            "nav.socials": "Socials",
            "avatar.alt": "Rotsteins Tiger-Avatar",
            "projects.title": "Meine Projekte",
            "projects.imageAlt": "Smashed Pumpkin: Startansicht mit Serverliste",
            "projects.body": "Pumpkin-Minecraft-Server installieren, aktualisieren und verwalten. Eine native Oberfläche im GNOME-Stil.",
            "projects.visit": "Projekt ansehen",
            "projects.source": "Quellcode",
            "projects.mineplay": "Bei Mineplay arbeite ich gemeinsam mit Freunden an kleinen Experimenten und größeren Projekten. Wir probieren neue Ideen aus und entwickeln sie gemeinsam weiter.",
            "about.body": "Ich beschäftige mich vor allem mit eigenen Softwareprojekten für Linux und das Web.",
            "about.linux": "Linux nutze ich seit 2015. Seit 2019 ist es mein Hauptbetriebssystem.",
            "experience.app": "Mit Smashed Pumpkin habe ich eine native Linux-Anwendung entwickelt und über Flathub zugänglich gemacht.",
            "experience.web": "Meine Kinoverwaltung ist ein Webprojekt mit einer eigenen Node.js-/Express-API und einer Oberfläche in JavaScript.",
            "experience.source": "Kinoverwaltung auf GitHub",
            "skills.title": "Kenntnisse",
            "skills.body": "Ich entwickle Anwendungen für Linux und fürs Web. Dazu gehören die Bedienoberfläche, die Funktionen im Hintergrund und die Veröffentlichung.",
            "skills.projects": "Mit Smashed Pumpkin und der Kinoverwaltung kannst du dir zwei meiner Arbeiten ansehen.",
            "contact.body": "Du erreichst mich auf Discord unter",
            "contact.copy": "Discord-Namen kopieren",
            "contact.copied": "Name kopiert.",
            "contact.copyFailed": "Bitte den Namen markieren und kopieren.",
            "socials.title": "Links",
            "footer.label": "Datenschutzerklärungen",
            "footer.rgc": "Datenschutz RGC",
            "footer.pumpkin": "Datenschutz Smashed Pumpkin"
        },
        en: {
            description: "Personal applications for Linux and the web. Projects and contact details from Rotstein.",
            skip: "Skip to content",
            "intro.greeting": "Hi, I'm",
            "intro.body": "I build my own applications for Linux and the web. You can find my projects here and on GitHub.",
            "intro.projects": "My projects",
            "nav.label": "Radial navigation",
            "nav.about": "About me",
            "nav.experience": "Experience",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.contact": "Contact",
            "nav.socials": "Socials",
            "avatar.alt": "Rotstein's tiger avatar",
            "projects.title": "My projects",
            "projects.imageAlt": "Smashed Pumpkin: home screen with a server list",
            "projects.body": "Install, update and manage Pumpkin Minecraft servers through a native GNOME-style interface.",
            "projects.visit": "View project",
            "projects.source": "Source code",
            "projects.mineplay": "At Mineplay, I work with friends on small experiments and larger projects. We try out new ideas and develop them together.",
            "about.body": "Most of my work goes into my own software projects for Linux and the web.",
            "about.linux": "I've used Linux since 2015. It has been my main operating system since 2019.",
            "experience.app": "With Smashed Pumpkin, I built a native Linux application and published it on Flathub.",
            "experience.web": "My cinema management application is a web project with its own Node.js/Express API and a JavaScript interface.",
            "experience.source": "Cinema management on GitHub",
            "skills.title": "What I work on",
            "skills.body": "I develop applications for Linux and the web. My work includes the interface, the underlying functionality and publishing the application.",
            "skills.projects": "Smashed Pumpkin and my cinema management application are two examples of my work.",
            "contact.body": "You can reach me on Discord as",
            "contact.copy": "Copy Discord username",
            "contact.copied": "Username copied.",
            "contact.copyFailed": "Please select the username and copy it.",
            "socials.title": "Links",
            "footer.label": "Privacy policies",
            "footer.rgc": "RGC privacy policy",
            "footer.pumpkin": "Smashed Pumpkin privacy policy"
        }
    };

    const panels = Array.from(document.querySelectorAll("[data-panel]"));
    const sectionLinks = Array.from(document.querySelectorAll("[data-section]"));
    const languageToggle = document.getElementById("language-toggle");
    const discordCopy = document.getElementById("discord-copy");
    const copyStatus = document.getElementById("copy-status");
    let language = "de";

    function selectSection(sectionId, updateHistory = false) {
        const selected = panels.find(panel => panel.id === sectionId) || panels[0];

        for (const panel of panels) {
            panel.hidden = panel !== selected;
        }

        for (const link of sectionLinks) {
            if (link.dataset.section === selected.id) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        }

        if (updateHistory && window.location.hash !== `#${selected.id}`) {
            history.pushState(null, "", `#${selected.id}`);
        }
    }

    function applyLanguage(nextLanguage) {
        const dictionary = translations[nextLanguage];
        language = nextLanguage;
        document.documentElement.lang = language;

        const bindings = [
            ["data-i18n", null],
            ["data-i18n-label", "aria-label"],
            ["data-i18n-alt", "alt"],
            ["data-i18n-content", "content"]
        ];

        for (const [attribute, targetAttribute] of bindings) {
            for (const element of document.querySelectorAll(`[${attribute}]`)) {
                const text = dictionary[element.getAttribute(attribute)];
                if (targetAttribute) {
                    element.setAttribute(targetAttribute, text);
                } else {
                    element.textContent = text;
                }
            }
        }

        const isGerman = language === "de";
        languageToggle.textContent = isGerman ? "I don't speak Bundesliga" : "Zurück auf Deutsch";
        languageToggle.lang = isGerman ? "en" : "de";
        languageToggle.setAttribute("aria-label", isGerman
            ? "I don't speak Bundesliga: switch to English"
            : "Zurück auf Deutsch");
        document.getElementById("social-locale").content = isGerman ? "de_DE" : "en_US";
        copyStatus.textContent = "";
        document.dispatchEvent(new Event("portfolio:languagechange"));
    }

    for (const link of sectionLinks) {
        link.addEventListener("click", event => {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                return;
            }
            event.preventDefault();
            selectSection(link.dataset.section, true);
        });
    }

    const selectFromHash = () => {
        if (window.location.hash !== "#content") {
            selectSection(window.location.hash.slice(1));
        }
    };
    window.addEventListener("popstate", selectFromHash);
    window.addEventListener("hashchange", selectFromHash);
    languageToggle.addEventListener("click", () => applyLanguage(language === "de" ? "en" : "de"));
    discordCopy.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(document.getElementById("discord-name").textContent);
            copyStatus.textContent = translations[language]["contact.copied"];
        } catch {
            copyStatus.textContent = translations[language]["contact.copyFailed"];
        }
    });

    // Every new page load starts in German, regardless of browser or saved preferences.
    applyLanguage("de");
    languageToggle.hidden = false;
    discordCopy.hidden = false;
    document.getElementById("content").classList.add("is-interactive");
    selectSection("projects");
    selectFromHash();
})();
