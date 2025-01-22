document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.typewriter');
    const content = document.querySelector('.container3');
    const foot = document.querySelector('.foot');

    // Function to hide loader and show content
    function hideLoader() {
        loader.style.display = 'none';
        content.style.display = 'block';
        foot.style.display = 'block';
    }

    // Function to show loader for the specified duration
    function showLoader(duration) {
        loader.style.display = 'block';
        content.style.display = 'none';
        foot.style.display = 'none';
        setTimeout(hideLoader, duration);
    }

    // Show the loader for 2 seconds in all scenarios
    showLoader(1000);
});
