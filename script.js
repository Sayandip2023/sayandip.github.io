document.addEventListener("DOMContentLoaded", function () {
    const typedText = new Typed('#typed-text', {
        strings: ['Learner','Developer', 'Deep Learning Engineer'], 
        typeSpeed: 100, 
        backSpeed: 50, 
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
                // Show confirmation message below the form
                let confirmation = document.createElement('div');
                confirmation.textContent = "Message sent successfully!";
                confirmation.style.color = "green";
                confirmation.style.marginTop = "10px";
                confirmation.id = "confirmation-message";
                document.getElementById("contact-form").after(confirmation);
                setTimeout(() => {
                    confirmation.remove();
                }, 3000);
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
