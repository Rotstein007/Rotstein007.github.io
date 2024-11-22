document.addEventListener("DOMContentLoaded", () => {
    const targetElement = document.querySelector('#content-section');
    if (targetElement) {
        console.log("Element gefunden:", targetElement);
        document.querySelector('.arrow').addEventListener('click', (event) => {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        console.error("Element mit ID 'content-section' nicht gefunden.");
    }
});
