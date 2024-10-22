window.addEventListener('load', function() {
    const overlay = document.getElementById('loading-overlay');
    const minLoadingTime = 500; // Minimum loading time in milliseconds

    setTimeout(() => {
        overlay.classList.add('hidden');
    }, minLoadingTime);
});