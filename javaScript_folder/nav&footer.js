
    // JavaScript to dynamically load the footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
    
    
        // Load the navbar from navbar.html into the div with id "navbar"
        document.getElementById("navbar").innerHTML = fetch('navbar.html')
            .then(response => response.text())
            .then(data => document.getElementById("navbar").innerHTML = data);
    