(() => {
    const images = document.querySelectorAll(".profile .celement")
    const areas = document.querySelectorAll("map[name=selection] area")

    function toggleClass(index, className, value){
        Array.from(images).at(index).classList.toggle(className, value)
    }
    function onClick(area){
        document.querySelector(area.getAttribute("data-target")).scrollIntoView({
            behavior: "smooth"
        })
    }

    areas.forEach((area, i) => {
        area.addEventListener("mouseenter", () => toggleClass(i, "hover", true))
        area.addEventListener("mouseleave", () => toggleClass(i, "hover", false))
        area.addEventListener("mousedown", () => toggleClass(i, "clicked", true))
        area.addEventListener("mouseup", () => toggleClass(i, "clicked", false))
        area.addEventListener("click", () => onClick(area))
    })
})()