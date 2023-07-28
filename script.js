document.addEventListener("DOMContentLoaded", function () {
  const typedText = new Typed('#typed-text', {
    strings: ['Learner','Developer', 'Deep Learning Engineer'], 
    typeSpeed: 100, 
    backSpeed: 50, 
    loop: true // Whether to loop the animation
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
