// document.addEventListener("DOMContentLoaded", () => {
//     const targetElement = document.querySelector('#content-section');
//     if (targetElement) {
//         console.log("Element gefunden:", targetElement);
//         const arrowElement = document.querySelector('.arrow');
//         if (arrowElement) {
//             arrowElement.addEventListener('click', (event) => {
//                 event.preventDefault();
//                 targetElement.scrollIntoView({ behavior: 'smooth' });
//             });
//         } else {
//             console.error("Element with class 'arrow' not found.");
//         }
//     } else {
//         console.error("Element mit ID 'content-section' nicht gefunden.");
//     }
// });


(() => {
    const mouse = document.querySelector("#mouse")
    let lastX = 0
    let lastY = 0
    function onMouseUpdate(event){
        if(event){
            lastX = event.x
            lastY = event.y
        }
        mouse.style.left = `${lastX}px`;
        mouse.style.top = `${lastY + window.scrollY}px`;
    }
    document.addEventListener("mousemove", onMouseUpdate);
    document.addEventListener("scroll", () => onMouseUpdate())

    document.addEventListener("click", event => {
        mouse.style.animation = "mouseAni 300ms";
        setTimeout(() => {
            mouse.style.animation = "";
        }, 300);
    })
})()