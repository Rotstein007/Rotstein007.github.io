/**
 * Handles the desktop radial menu interactions
 */
"use strict";

(() => {
    const images = document.querySelectorAll(".celement");
    const areas = document.querySelectorAll("map[name=selection] area");

    /**
     * Toggles a class on a specific circle element
     * @param {number} index - Index of the element
     * @param {string} className - Class to toggle (hover/clicked)
     * @param {boolean} value - Add or remove
     */
    function toggleClass(index, className, value){
        if(images[index]) {
            images[index].classList.toggle(className, value);
        }
    }

    /**
     * Handles the click on a map area
     * @param {HTMLElement} area - The clicked area element
     */
    function onClick(area){
        const targetId = area.getAttribute("data-target");
        if(window.customScrollTo) {
            window.customScrollTo(targetId);
        } else {
            const el = document.querySelector(targetId);
            if(el) el.scrollIntoView({behavior: "smooth"});
        }
    }

    // Attach event listeners to all map areas
    areas.forEach((area, i) => {
        area.addEventListener("mouseenter", () => {
            toggleClass(i, "hover", true);
            document.body.style.cursor = "pointer";
        });

        area.addEventListener("mouseleave", () => {
            toggleClass(i, "hover", false);
            document.body.style.cursor = "default";
        });

        area.addEventListener("mousedown", () => toggleClass(i, "clicked", true));
        area.addEventListener("mouseup", () => toggleClass(i, "clicked", false));

        // Touch support for hybrid devices
        area.addEventListener("touchstart", () => toggleClass(i, "hover", true));
        area.addEventListener("touchend", () => toggleClass(i, "hover", false));

        area.addEventListener("click", (e) => {
            e.preventDefault();
            onClick(area);
        });
    });
})();