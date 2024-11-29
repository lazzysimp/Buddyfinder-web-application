document.addEventListener('DOMContentLoaded', () => {
    // Toggle Expand Post
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const postBody = button.previousElementSibling;
            postBody.classList.toggle('expanded');
            button.textContent = postBody.classList.contains('expanded') ? 'Read Less' : 'Read More';
        });
    });

    // Toggle Like Button Animation
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('clicked');
        });
    });
});



document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


let index = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;

function nextImage() {
    index = (index + 1) % totalImages; // Loop back to first image after the last one
    const container = document.querySelector('.image-container');
    container.style.transform = `translateX(-${index * 100}%)`; // Move the container to show the next image
}

// Automatically transition every 5 seconds
setInterval(nextImage, 5000);



// Select the form elements and the container for the travel plan feeds
const tripForm = document.getElementById('tripForm');
const feedContainer = document.querySelector('.post-feed');

// Handle form submission
tripForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get values from the form
    const destination = document.getElementById('destination').value;
    const description = document.getElementById('description').value;
    const interests = document.getElementById('interests').value;
    const travelDate = document.getElementById('date').value;

    // Create new post element dynamically
    const newPost = document.createElement('div');
    newPost.classList.add('post');
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Handle form submission for "Create Trip" page
    const tripForm = document.getElementById('create-trip-form');
    
    if (tripForm) {
        tripForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get values from the form fields
            const tripTitle = document.getElementById('tripTitle').value;
            const tripDescription = document.getElementById('tripDescription').value;
            const tripLocation = document.getElementById('tripLocation').value;
            const tripDate = document.getElementById('tripDate').value;
            const tripInterests = document.getElementById('tripInterests').value;

            // Save trip data to localStorage
            localStorage.setItem('tripTitle', tripTitle);
            localStorage.setItem('tripDescription', tripDescription);
            localStorage.setItem('tripLocation', tripLocation);
            localStorage.setItem('tripDate', tripDate);
            localStorage.setItem('tripInterests', tripInterests);

            // Redirect to the homepage after form submission
            window.location.href = 'home.html';
        });
    }

    // Handle displaying the trip data on the homepage
    const tripTitle = localStorage.getItem('tripTitle');
    const tripDescription = localStorage.getItem('tripDescription');
    const tripLocation = localStorage.getItem('tripLocation');
    const tripDate = localStorage.getItem('tripDate');
    const tripInterests = localStorage.getItem('tripInterests');

    const tripDetailsDiv = document.getElementById('tripDetails');

    // Check if the data exists and display it
    if (tripTitle && tripDescription && tripLocation && tripDate && tripInterests) {
        const tripDetails = `
            <p><strong>Title:</strong> ${tripTitle}</p>
            <p><strong>Description:</strong> ${tripDescription}</p>
            <p><strong>Location:</strong> ${tripLocation}</p>
            <p><strong>Date:</strong> ${tripDate}</p>
            <p><strong>Interests:</strong> ${tripInterests}</p>
        `;
        tripDetailsDiv.innerHTML = tripDetails;
    } else {
        tripDetailsDiv.innerHTML = "<p>No trip data found. Please create a trip.</p>";
    }

    // Image manipulation logic (e.g., for a gallery or slider)
    function nextImage() {
        const imageElement = document.getElementById('image-id');  // Ensure this ID exists in the HTML
        if (imageElement) {
            imageElement.style.display = 'block';  // Example of manipulating the style
        } else {
            console.error('Image element not found!');
        }
    }

    // If you have a button to trigger the next image, add an event listener
    const nextImageButton = document.getElementById('next-image-btn');
    if (nextImageButton) {
        nextImageButton.addEventListener('click', nextImage);
    }
});

