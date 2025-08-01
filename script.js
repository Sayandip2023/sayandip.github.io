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

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Section entrance animations
    gsap.utils.toArray(".fade-in-section").forEach(section => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                    // markers: true // Uncomment for debugging scroll triggers
                }
            }
        );
    });

    // Card animations within sections
    gsap.utils.toArray(".card").forEach(card => {
        gsap.fromTo(card, 
            { opacity: 0, scale: 0.8, y: 20 }, 
            { 
                opacity: 1, 
                scale: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                    // markers: true
                }
            }
        );
    });

    

    // Initialize particles.js for each section
    const particleSections = document.querySelectorAll('.particles-js');
    particleSections.forEach(section => {
        particlesJS(section.id, {
            "particles": {
                "number": {
                    "value": 120, // Increased particle count
                    "density": {
                        "enable": true,
                        "value_area": 1000 // Increased density area
                    }
                },
                "color": {
                    "value": ["#00a8ff", "#ffffff", "#888888"] // Multiple colors
                },
                "shape": {
                    "type": ["circle", "triangle", "star"], // Multiple shapes
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": true, // Random opacity
                    "anim": {
                        "enable": true, // Enable opacity animation
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4, // Increased max size
                    "random": true,
                    "anim": {
                        "enable": true, // Enable size animation
                        "speed": 20,
                        "size_min": 0.5,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 180, // Increased link distance
                    "color": "#00a8ff",
                    "opacity": 0.5,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 4, // Slightly slower movement
                    "direction": "none",
                    "random": true, // Random movement direction
                    "straight": false,
                    "out_mode": "bounce", // Particles bounce off edges
                    "bounce": true,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" // Grab mode on hover
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 250, // Increased grab distance
                        "line_linked": {
                            "opacity": 0.8
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    });
});
