document.addEventListener("DOMContentLoaded", function () {
    // Typed.js animation
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['A Passionate Learner', 'A Full-Stack Developer', 'A Deep Learning Engineer'],
            typeSpeed: 70,
            backSpeed: 40,
            loop: true
        });
    }

    // Scroll-to-top button
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    });

    scrollToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Fade-in animations for sections
    const faders = document.querySelectorAll('.fade-in-section');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('is-visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Contact form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // In a real application, you would handle the form submission here.
        // For this template, we'll just show a confirmation message.
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
    });
});
