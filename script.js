document.addEventListener("DOMContentLoaded", function () {
    const typedText = new Typed('#typed-text', {
        strings: ['Developer', 'Machine Learning Engineer'], // Add your desired words here
        typeSpeed: 100, // Typing speed in milliseconds
        backSpeed: 50, // Backspacing speed in milliseconds
        loop: true // Whether to loop the animation
    });


    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

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

$(document).ready(function () {
  const body = $('body');

  function setTransitionClass(className) {
    body.removeClass('page-transition-entering page-transition-entered page-transition-exiting page-transition-exited');
    body.addClass(className);
  }

  function handleTransitionStart() {
    setTransitionClass('page-transition-exiting');
  }

  function handleTransitionEnd() {
    setTransitionClass('page-transition-entered');
  }

  $('a').click(function (e) {
    if ($(this).attr('href').startsWith('#')) {
      e.preventDefault();
      const href = $(this).attr('href');
      handleTransitionStart();

      // Smoothly scroll to the target section
      $('html, body').animate({
        scrollTop: $(href).offset().top
      }, 1000, function () {
        handleTransitionEnd();
      });
    }
  });

  // Scroll-to-top button
  const scrollButton = $('#scroll-to-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      scrollButton.fadeIn();
    } else {
      scrollButton.fadeOut();
    }
  });

  scrollButton.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});

const typedAbout = new Typed('#typed-about', {
    strings: ['Learner', 'Developer', 'Deep Learning Engineer'], // Words to slide
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 50, // Backspacing speed in milliseconds
    loop: true // Whether to loop the animation
});

