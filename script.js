document.addEventListener("DOMContentLoaded", function () {
    // Initialize Typed.js animation
    const typedText = new Typed('#typed-text', {
        strings: ['Developer', 'Machine Learning Engineer'], // Add your desired words here
        typeSpeed: 100, // Typing speed in milliseconds
        backSpeed: 50, // Backspacing speed in milliseconds
        loop: true // Whether to loop the animation
    });

    // Contact form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Perform validation (you can add more checks as needed)
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Send form data to the server (you can replace the URL with your own endpoint)
        var formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        fetch("path/to/your/endpoint", {
            method: "POST",
            body: formData
        })
        .then(function (response) {
            if (response.ok) {
                alert("Message sent successfully!");
                // Clear the form
                document.getElementById("contact-form").reset();
            } else {
                alert("An error occurred. Please try again.");
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        });
    });
});
