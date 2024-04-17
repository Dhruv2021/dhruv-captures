document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader1');
    const content = document.querySelector('.grid-container');
    const nav = document.querySelector('.navbar');

    // Initially hide the content
    content.style.display = 'none';
    nav.style.display = 'none';

    // Hide the loader after 3 seconds
    setTimeout(function() {
        loader.style.display = 'none';
        // Show the content once the loader is hidden
        content.style.display = 'block';
        nav.style.display = 'block';
    }, 3000);
});
