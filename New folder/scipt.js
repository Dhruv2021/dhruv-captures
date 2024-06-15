document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider img');
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    // Function to hide loader and show content
    function hideLoader() {
        loader.style.display = 'none';
        content.style.display = 'block';
    }

    // Function to show loader for the specified duration
    function showLoader(duration) {
        loader.style.display = 'block';
        content.style.display = 'none';
        setTimeout(hideLoader, duration);
    }

    // Show the loader for 3 seconds in all scenarios
    showLoader(3000);

    // Show the first image initially
    showImage(currentIndex);

    // Change image every 4 seconds (4000 milliseconds)
    setInterval(nextImage, 4000);

    // Preload images and then hide the loader
    let imagesLoaded = 0;

    images.forEach((img) => {
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                hideLoader();
            }
        };
        img.onerror = () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                hideLoader();
            }
        };
    });
});
