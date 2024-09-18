document.addEventListener('DOMContentLoaded', function() {
    // Get the thumb bar element
    const thumbBar = document.querySelector('.thumb-bar');

    // Declare an array of image filenames
    const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

    // Loop through the array of images
    images.forEach(function(image) {
        // Create a new image element
        const newImg = document.createElement('img');
        newImg.src = `images/${image}`;
        newImg.alt = image;
        newImg.onclick = function() {
            // Set the displayed image source
            const displayedImg = document.querySelector('.displayed-img');
            displayedImg.src = this.src;
            displayedImg.alt = this.alt;
        };
        // Add the new image to the thumb bar
        thumbBar.appendChild(newImg);
    });

    // Get the dark button element
    const darkBtn = document.querySelector('.dark');

    // Get the overlay element once, so it can be used in both if and else blocks
    const overlay = document.querySelector('.overlay');

    // Add a click event listener to the dark button
    darkBtn.addEventListener('click', function() {
        // Check the button's class name
        const className = darkBtn.getAttribute('class');
        
        // Change the class and text content based on the class name
        if (className === 'dark') {
            darkBtn.setAttribute('class', 'light');
            darkBtn.textContent = 'Lighten';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        } else {
            darkBtn.setAttribute('class', 'dark');
            darkBtn.textContent = 'Darken';
            overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
    });
});
