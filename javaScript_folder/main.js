// Get references to the elements
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let saad = document.querySelector('.saad');

// Add a scroll event listener to the window
window.onscroll = function() {
    let value = scrollY; // Get the current scroll position

    // Update the positions and styles of elements based on scroll value
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    saad.style.fontSize = value + 'px';

    // Conditional styling based on scroll position
    if (scrollY >= 100) {
        saad.style.fontSize = '100px';
        saad.style.position = '';

        if (scrollY >= 400) {
            saad.style.display = 'none'; // Hide the name
        } else {
            saad.style.display = 'block'; // Show the name
        }

        // Change background color based on scroll position
        if (scrollY >= 200) {
            document.querySelector('.main').style.background = 'linear-gradient(#246b9d, #10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
    }
};
