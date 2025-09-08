// Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Testimonial Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');

        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = dot.getAttribute('data-slide');

                // Remove active class from all slides and dots
                testimonialSlides.forEach(slide => slide.classList.remove('active'));
                testimonialDots.forEach(d => d.classList.remove('active'));

                // Add active class to current slide and dot
                testimonialSlides[slideIndex].classList.add('active');
                dot.classList.add('active');
            });
        });

        // Auto rotate testimonials
        let currentTestimonial = 0;

        function rotateTestimonials() {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            testimonialDots.forEach(dot => dot.classList.remove('active'));

            currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;

            testimonialSlides[currentTestimonial].classList.add('active');
            testimonialDots[currentTestimonial].classList.add('active');
        }

        setInterval(rotateTestimonials, 3500);

        // Form submission
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Thank you for your message, ${name}! We'll get back to you soon.`);

            // Reset the form
            contactForm.reset();
        });

        // Add scroll animation
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
                header.style.padding = '10px 0';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
                header.style.padding = '15px 0';
            }
        });


        