

function updateDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toLocaleString();
}

// Update the date and time every second
setInterval(updateDateTime, 1000);


        // Function to get the current date and time
        function getCurrentDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            };
            return now.toLocaleString('en-US', options);
        }

        // Update the element content with current date and time
        const dateTimeElement = document.querySelector('.date-time');
        if (dateTimeElement) {
            dateTimeElement.textContent = 'Date and Time: ' + getCurrentDateTime();
        }
    
    // Function to handle liking the resume
    function likeResume() {
        // Check if localStorage is supported
        if (typeof(Storage) !== "undefined") {
            // Check if the user has already liked the resume
            if (localStorage.getItem("resumeLiked")) {
                alert("You have already liked this resume.");
                return; // Exit function, do not allow liking again
            }

            // Increment the like count
            let currentLikes = parseInt(localStorage.getItem("resumeLikes")) || 2;
            currentLikes++;
            localStorage.setItem("resumeLikes", currentLikes);

            // Mark resume as liked by storing a flag
            localStorage.setItem("resumeLiked", "true");

            // Update the button text to reflect the number of likes
            updateLikeButtonText(currentLikes);
        } else {
            // If localStorage is not supported, fallback message (though not needed for most modern browsers)
            alert("Sorry, your browser does not support Web Storage. Unable to like.");
        }
    }

    // Function to update like button text
    function updateLikeButtonText(likeCount) {
        document.getElementById("likeButton").textContent = `Liked! ❤️ (${likeCount})`;
    }

    // Function to initialize like count on page load
    window.onload = function() {
        if (typeof(Storage) !== "undefined") {
            // Initialize like count from localStorage
            let currentLikes = parseInt(localStorage.getItem("resumeLikes")) || 0;

            // Update the button text to reflect the number of likes
            updateLikeButtonText(currentLikes);
        }
    };

    // Function to change the background image
function changeBackgroundOnLoad() {
    // Array of background image URLs
    const images = [
        'eh.jpg',  // Example background image URLs
        'eh2.jpg',
        'eh3.jpg',
        'eh4.jpg',
        'eh5.jpg'
        // Add more background image URLs as needed
    ];

    // Randomly select an image from the array
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Update the body's background image
    document.body.style.backgroundImage = `url('${randomImage}')`;
}

// Call the function when the page loads
window.onload = changeBackgroundOnLoad;


    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            alert("Why are you looking at View Page Source, there is nothing.");
        }
    });
    
// Function to download the resume as PDF
function downloadResume() {
    // Initialize jsPDF
    const doc = new jsPDF();

    // Define elements to include in PDF
    const container = document.querySelector('.container');
    
    // Generate PDF
    doc.html(container, {
        callback: function (doc) {
            // Save PDF file
            doc.save('Debabrata_Mukherjee_Resume.pdf');
        },
        x: 10,
        y: 10
    });
}

// Disable zooming function
    function disableZoom() {
      var viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      }
    }
    
    // Call the function to disable zoom
    disableZoom();
