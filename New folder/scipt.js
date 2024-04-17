

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider img');
    
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

    // Show the first image initially
    showImage(currentIndex);

    // Change image every 3 seconds (3000 milliseconds)
    setInterval(nextImage, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.querySelector('.close-btn');
    
    menuIcon.addEventListener('click', function () {
        overlay.classList.toggle('active');
        menuIcon.classList.add('fade-out'); // Add fade-out class
    });

    closeBtn.addEventListener('click', function () {
        overlay.classList.remove('active');
        menuIcon.classList.remove('fade-out'); // Remove fade-out class
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

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

    // Show the loader for 2 seconds in all scenarios
    showLoader(1500);
});






