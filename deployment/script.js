// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const steps = document.querySelectorAll('.step');
    const signupForm = document.querySelector('.signup-form');
    const ctaButton = document.querySelector('.cta-button');
    const joinBtn = document.querySelector('.join-btn');
    const modal = document.getElementById('signup-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalForm = document.getElementById('modal-form');
    const guestlistForm = document.getElementById('guestlist-form');
    const tagline = document.getElementById('tagline');
    const typewriterText = document.querySelector('.typewriter-text');
    const countdownContainer = document.querySelector('.countdown-container');
    const primaryCtaButtons = document.querySelectorAll('.cta-button.primary');
    const secondaryCtaButton = document.querySelector('.cta-button.secondary');
    const parallaxLayer = document.querySelector('.parallax-layer');
    const gradientBlobs = document.querySelectorAll('.gradient-blob');
    const heroVideo = document.querySelector('.hero-video');
    
    // Handle video loading
    if (heroVideo) {
        console.log('Hero video element found:', heroVideo);
        
        // Force the video to load
        heroVideo.load();
        
        // Check if the browser is capable of playing the video
        const canPlayVideo = heroVideo.canPlayType && (
            heroVideo.canPlayType('video/mp4') !== ''
        );
        
        console.log('Can play video:', canPlayVideo);
        
        if (!canPlayVideo || window.matchMedia('(max-width: 768px)').matches) {
            // If the browser can't play the video or on mobile, hide video and show fallback
            const videoContainer = document.querySelector('.video-container');
            if (videoContainer) {
                console.log('Adding fallback mode to video container');
                videoContainer.classList.add('fallback-mode');
            }
        }
        
        // Add event listeners for video
        heroVideo.addEventListener('loadeddata', () => {
            console.log('Hero video loaded successfully');
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.classList.add('video-loaded');
            }
        });
        
        heroVideo.addEventListener('error', (e) => {
            console.error('Error loading hero video:', e);
            // Show fallback on error
            const videoContainer = document.querySelector('.video-container');
            if (videoContainer) {
                videoContainer.classList.add('fallback-mode');
            }
        });
        
        // Start the video playback explicitly
        heroVideo.play().catch(e => {
            console.error('Error playing video:', e);
            // Fallback to static image on error
            const videoContainer = document.querySelector('.video-container');
            if (videoContainer) {
                videoContainer.classList.add('fallback-mode');
            }
        });
    } else {
        console.error('Hero video element not found');
        // Fallback if video element not found
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer) {
            videoContainer.classList.add('fallback-mode');
        }
    }
    
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Enhanced animated background
    function enhanceBackgroundAnimation() {
        // Apply additional subtle animations to gradient blobs
        gradientBlobs.forEach((blob, index) => {
            // Random starting positions to make each page load unique
            const randomX = (Math.random() - 0.5) * 5;
            const randomY = (Math.random() - 0.5) * 5;
            const randomScale = 0.95 + Math.random() * 0.2;
            
            // Set initial random position
            gsap.set(blob, {
                x: randomX + "%",
                y: randomY + "%",
                scale: randomScale,
            });
            
            // Continuous slow pulse effect with warm luxe colors
            gsap.to(blob, {
                opacity: 0.3 + Math.random() * 0.3,
                duration: 3 + Math.random() * 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            
            // Additional subtle movement that works alongside CSS animations
            const timeline = gsap.timeline({
                repeat: -1,
                yoyo: true,
                delay: index * 0.8
            });
            
            timeline.to(blob, {
                x: randomX + (Math.random() - 0.5) * 8 + "%",
                y: randomY + (Math.random() - 0.5) * 8 + "%",
                scale: randomScale + (Math.random() * 0.15),
                duration: 15 + Math.random() * 10,
                ease: "sine.inOut"
            });
            
            // Random subtle rotation
            gsap.to(blob, {
                rotation: "+=30",
                duration: 20 + Math.random() * 10,
                repeat: -1,
                ease: "none"
            });
        });
        
        // Create subtle pulsing radial gradient background effect with warm luxe colors
        const backgroundGlow = document.createElement('div');
        backgroundGlow.className = 'background-glow';
        document.querySelector('.animated-background').appendChild(backgroundGlow);
        
        gsap.to(backgroundGlow, {
            scale: 1.2,
            opacity: 0.15,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Add animated gradient overlay to hero section if it doesn't exist
        const heroSection = document.querySelector('.hero');
        if (heroSection && !document.querySelector('.hero .animated-gradient')) {
            const animatedGradient = document.createElement('div');
            animatedGradient.className = 'animated-gradient';
            heroSection.appendChild(animatedGradient);
        }
    }
    
    // Initialize enhanced background animation
    enhanceBackgroundAnimation();

    // Initialize particles background with warm luxe theme colors
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 50, density: { enable: true, value_area: 1000 } },
                color: { value: ['#CEA335', '#B78E3F', '#D4B152', '#95845A'] }, // Warm Luxe gold theme colors
                opacity: { value: 0.2, random: true, anim: { enable: true, speed: 0.2, opacity_min: 0.05, sync: false } },
                size: { value: 2, random: true, anim: { enable: true, speed: 1, size_min: 0.1, sync: false } },
                line_linked: { enable: true, distance: 150, color: '#CEA335', opacity: 0.1, width: 1 }, // Gold color
                move: {
                    enable: true, 
                    speed: 0.6, 
                    direction: 'none', 
                    random: true, 
                    straight: false, 
                    out_mode: 'out', 
                    bounce: false,
                    attract: { enable: true, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'bubble' },
                    onclick: { enable: true, mode: 'repulse' },
                    resize: true
                },
                modes: {
                    bubble: { distance: 200, size: 4, duration: 2, opacity: 0.3, speed: 3 },
                    repulse: { distance: 200, duration: 0.4 }
                }
            },
            retina_detect: true
        });
    }

    // Scroll reveal configurations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        reset: false,
        delay: 200
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Typewriter effect for the heading
    function startTypewriter() {
        if (typewriterText) {
            // Store the original text
            const originalText = typewriterText.textContent || "Experience the future of matchmaking";
            typewriterText.innerHTML = '';
            typewriterText.style.opacity = '1';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    typewriterText.innerHTML += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                } else {
                    // Show tagline after typing effect is complete
                    setTimeout(() => {
                        if (tagline) {
                            tagline.classList.add('visible');
                        }
                    }, 300);
                }
            };
            
            // Start typing after a brief delay
            setTimeout(typeWriter, 500);
        }
    }
    
    // Start typewriter effect
    startTypewriter();

    // Initialize scroll animations
    sr.reveal('.hero .container', {
        delay: 0,
        origin: 'bottom'
    });

    // Animate steps as they come into view
    steps.forEach((step, index) => {
        gsap.fromTo(
            `#step${index + 1}`,
            { 
                opacity: 0, 
                y: 50 
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: `#step${index + 1}`,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                    onEnter: () => {
                        // Add visible class for CSS animations
                        document.querySelector(`#step${index + 1}`).classList.add('visible');
                        
                        // Update progress line and markers
                        updateProgressLine(index + 1);
                    }
                },
                duration: 0.8,
                delay: 0.2 * index,
                ease: "power2.out"
            }
        );
    });

    // Animate cards in Why It Works section
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                delay: index * 0.2,
                ease: "back.out(1.7)"
            }
        );
    });

    // Animate signup form
    gsap.fromTo(
        '.signup-form',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.signup-form',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 0.8,
            ease: "power2.out"
        }
    );

    // Animate countdown container
    gsap.fromTo(
        '.countdown-container',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.countdown-container',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 0.8,
            ease: "power2.out"
        }
    );

    // Countdown timer functionality
    let prevDays, prevHours, prevMinutes, prevSeconds;
    
    function updateCountdown() {
        const eventDate = new Date('April 23, 2025 19:00:00 GMT').getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            // Show event started message
            const countdownContainer = document.querySelector('.countdown-container');
            const eventStartedMsg = document.createElement('div');
            eventStartedMsg.className = 'event-started-message';
            eventStartedMsg.innerHTML = '<h3>The event has started!</h3><p>Join us now or check back for the next event.</p>';
            
            // Only add the message if it doesn't exist already
            if (!document.querySelector('.event-started-message')) {
                countdownContainer.appendChild(eventStartedMsg);
            }
            
            return;
        }

        // Calculate time units
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Check if values have changed to add animation
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        // Only update and animate if the values have changed
        if (seconds !== prevSeconds) {
            secondsElement.classList.add('flip');
            setTimeout(() => {
                secondsElement.classList.remove('flip');
            }, 500);
            secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
            prevSeconds = seconds;
        }

        if (minutes !== prevMinutes) {
            minutesElement.classList.add('flip');
            setTimeout(() => {
                minutesElement.classList.remove('flip');
            }, 500);
            minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
            prevMinutes = minutes;
        }

        if (hours !== prevHours) {
            hoursElement.classList.add('flip');
            setTimeout(() => {
                hoursElement.classList.remove('flip');
            }, 500);
            hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
            prevHours = hours;
        }

        if (days !== prevDays) {
            daysElement.classList.add('flip');
            setTimeout(() => {
                daysElement.classList.remove('flip');
            }, 500);
            daysElement.textContent = days < 10 ? `0${days}` : days;
            prevDays = days;
        }
        
        // Update page title with countdown
        document.title = `Chapter One - ${days}d ${hours}h ${minutes}m ${seconds}s until event!`;
    }

    // Initial call
    updateCountdown();
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);

    // Modal functionality
    function openModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        
        // Add entrance animation
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.classList.add('open');
        }, 10);
    }

    function closeModalFunc() {
        modal.style.opacity = '0';
        modal.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 400);
    }

    // Event listeners for modal
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });
    
    // Make all 'Join the Guestlist' buttons open the modal
    const allGuestlistButtons = document.querySelectorAll('.cta-button:not([onclick]), .join-btn:not([href^="https"]), a.join-btn:not([href^="https"])');
    allGuestlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });

    closeModal.addEventListener('click', closeModalFunc);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple');

        // Remove existing ripples
        const ripple = button.querySelector('.ripple');
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    // Add ripple effect to all buttons with ripple-effect class
    const rippleButtons = document.querySelectorAll('.ripple-effect');
    rippleButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Load Lottie animations
    if (typeof lottie !== 'undefined') {
        // We're using static images now instead of Lottie animations
        console.log('Using static images for steps instead of Lottie animations');
    } else {
        // If Lottie is not available, use our SVG fallback
        createSVGFolder();
    }

    // Carousel functionality for testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = testimonials.length - 1;
            }
            showTestimonial(newIndex);
        });

        nextBtn.addEventListener('click', () => {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) {
                newIndex = 0;
            }
            showTestimonial(newIndex);
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            showTestimonial(index);
        });
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonials.length) {
            newIndex = 0;
        }
        showTestimonial(newIndex);
    }, 5000);

    // Form validation with microinteractions
    const formInputs = document.querySelectorAll('.form-group input');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            const validationIcon = this.nextElementSibling;
            if (this.value.trim() !== '') {
                if (this.checkValidity()) {
                    validationIcon.style.opacity = '1';
                    validationIcon.querySelector('i').className = 'fas fa-check';
                    validationIcon.style.color = '#4CAF50';
                } else {
                    validationIcon.style.opacity = '1';
                    validationIcon.querySelector('i').className = 'fas fa-times';
                    validationIcon.style.color = '#F44336';
                }
            } else {
                validationIcon.style.opacity = '0';
            }
        });
    });

    // Handle form submissions
    function handleFormSubmit(e) {
        // If form has an action URL, allow default form submission
        if (e.target.action && (e.target.action.includes('typeform.com') || e.target.action.includes('mailto:Chapterone.eventsldn@gmail.com'))) {
            return true; // Allow the form to submit naturally
        }
        
        e.preventDefault();
        
        // Validate form
        let isValid = true;
        const form = e.target;
        const formInputs = form.querySelectorAll('input[required]');
        
        formInputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.classList.add('error');
                
                // Add shake animation
                input.addEventListener('animationend', function() {
                    this.classList.remove('error');
                }, {once: true});
            } else {
                input.classList.remove('error');
            }
        });
        
        if (!isValid) {
            return;
        }
        
        // Get form values
        const email = form.querySelector('[type="email"]').value;
        const age = form.querySelector('[type="number"]').value;
        const location = form.querySelector('[type="text"][id$="location"]').value;
        const instagram = form.querySelector('[id$="instagram"]').value;
        
        // Get interested in values
        const interests = [];
        form.querySelectorAll('[name^="interest"]:checked, [name^="modal-interest"]:checked').forEach(checkbox => {
            interests.push(checkbox.value);
        });
        
        // Here you would typically send this data to your server or email
        console.log('Form submitted:', { email, age, location, instagram, interests });
        
        // If form doesn't have a specific action set, use mailto as fallback
        if (!e.target.action) {
            window.location.href = `mailto:Chapterone.eventsldn@gmail.com?subject=Event Registration&body=Email: ${email}%0D%0AAge: ${age}%0D%0ALocation: ${location}%0D%0AInstagram: ${instagram}%0D%0AInterests: ${interests.join(', ')}`;
        }
        
        // Show submission confirmation
        const formContent = form.parentElement;
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <h3>Thank you for joining!</h3>
            <p>We'll notify you about upcoming events.</p>
        `;
        
        // Animate form transition
        gsap.to(form, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                // Replace form with success message
                form.style.display = 'none';
                formContent.appendChild(successMessage);
                
                // Animate success message
                gsap.from(successMessage, {
                    opacity: 0,
                    y: 20,
                    duration: 0.4
                });
                
                // Close modal after delay
                setTimeout(closeModalFunc, 2500);
            }
        });
    }

    // Form submission events
    if (modalForm) modalForm.addEventListener('submit', handleFormSubmit);
    if (guestlistForm) guestlistForm.addEventListener('submit', handleFormSubmit);

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        
        if (heroSection && scrolled < heroSection.offsetHeight) {
            heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });

    // Parallax effect for animated background
    if (parallaxLayer) {
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            // Move parallax layer based on mouse position
            gsap.to(parallaxLayer, {
                x: (mouseX - 0.5) * 30,
                y: (mouseY - 0.5) * 30,
                duration: 1,
                ease: 'power1.out'
            });
            
            // Move gradient blobs subtly based on mouse position
            gradientBlobs.forEach((blob, index) => {
                const offsetFactor = index * 0.2;
                gsap.to(blob, {
                    x: (mouseX - 0.5) * (30 + index * 10) * (index % 2 ? 1 : -1),
                    y: (mouseY - 0.5) * (30 + index * 10) * (index % 2 ? -1 : 1),
                    duration: 2,
                    ease: 'power1.out'
                });
            });
        });
    }

    // Progress line animation
    function updateProgressLine(activeStep) {
        const progressLine = document.querySelector('.progress-line');
        const markers = document.querySelectorAll('.progress-marker');
        
        // Animate progress line based on active step
        if (progressLine) {
            let scaleValue = 0;
            
            switch(activeStep) {
                case 1:
                    scaleValue = 0.33;
                    break;
                case 2:
                    scaleValue = 0.66;
                    break;
                case 3:
                    scaleValue = 1;
                    break;
                default:
                    scaleValue = 0;
            }
            
            // Animate the progress line
            gsap.to(progressLine, {
                scaleY: scaleValue,
                opacity: 1,
                duration: 0.8,
                ease: "power2.inOut"
            });
            
            // Activate markers up to the current step
            markers.forEach((marker, idx) => {
                if (idx < activeStep) {
                    setTimeout(() => {
                        marker.classList.add('active');
                    }, 300 * idx);
                }
            });
        }
    }
    
    // Add ambient floating orbs to the steps section
    function addFloatingOrbs() {
        const stepsSection = document.querySelector('.steps');
        
        if (stepsSection) {
            // Create orbs container
            const orbsContainer = document.createElement('div');
            orbsContainer.className = 'floating-orbs';
            
            // Add orbs
            for (let i = 0; i < 15; i++) {
                const orb = document.createElement('div');
                orb.className = 'orb';
                
                // Randomize orb properties
                const size = 5 + Math.random() * 15;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = 15 + Math.random() * 30;
                
                orb.style.width = `${size}px`;
                orb.style.height = `${size}px`;
                orb.style.left = `${posX}%`;
                orb.style.top = `${posY}%`;
                
                // Animate using GSAP
                gsap.set(orb, {
                    opacity: 0.1 + Math.random() * 0.2
                });
                
                gsap.to(orb, {
                    x: -100 + Math.random() * 200,
                    y: -100 + Math.random() * 200,
                    duration: duration,
                    delay: delay,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
                
                orbsContainer.appendChild(orb);
            }
            
            // Add orbs container to steps section
            stepsSection.appendChild(orbsContainer);
        }
    }
    
    // Initialize floating orbs
    addFloatingOrbs();
    
    // Initialize Lottie animations with scroll trigger
    function initializeLottieAnimations() {
        // Get all the lottie containers which now contain static images
        const imageContainers = document.querySelectorAll('.lottie-container');
        
        // Add scroll trigger animations for the static images
        imageContainers.forEach((container) => {
            // Set up scroll trigger for image animations
            ScrollTrigger.create({
                trigger: container,
                start: "top 80%",
                onEnter: () => {
                    // Add a subtle animation effect when the image comes into view
                    gsap.to(container, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                    
                    // Add a subtle pulse animation to the image
                    const img = container.querySelector('.step-img');
                    if (img) {
                        gsap.to(img, {
                            scale: 1.05,
                            repeat: 1,
                            yoyo: true,
                            duration: 1,
                            ease: 'power1.inOut'
                        });
                    }
                }
            });
        });
    }
    
    // Initialize Lottie animations
    initializeLottieAnimations();

    // Intersection Observer for steps animations
    function initStepsObserver() {
        const stepsSection = document.querySelector('.steps');
        if (!stepsSection) return;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    if (!section.classList.contains('animated')) {
                        animateStepsSection(section);
                        section.classList.add('animated');
                    }
                }
            });
        }, options);

        observer.observe(stepsSection);
    }

    function animateStepsSection(section) {
        // Animate the progress line
        const progressLine = section.querySelector('.progress-line');
        if (progressLine) {
            gsap.to(progressLine, {
                scaleY: 1,
                opacity: 1,
                duration: 1.5,
                ease: 'power2.out'
            });
        }
        
        // Animate steps
        const steps = section.querySelectorAll('.step');
        steps.forEach((step, index) => {
            gsap.to(step, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    step.classList.add('visible');
                    // Activate progress marker
                    const marker = section.querySelector(`.progress-marker[data-step="${index + 1}"]`);
                    if (marker) {
                        marker.classList.add('active');
                    }
                }
            });
        });

        // Add floating orbs
        addFloatingOrbs(section);
    }

    function addFloatingOrbs(section) {
        const container = section.querySelector('.steps-particles');
        if (!container) return;
        
        // Create orbs
        for (let i = 0; i < 15; i++) {
            const orb = document.createElement('div');
            orb.classList.add('floating-orb');
            
            // Randomize orb properties
            const size = Math.random() * 80 + 20; // 20-100px
            const posX = Math.random() * 100; // 0-100%
            const posY = Math.random() * 100; // 0-100%
            const duration = Math.random() * 15 + 15; // 15-30s
            const delay = Math.random() * -30; // -30-0s
            
            orb.style.width = `${size}px`;
            orb.style.height = `${size}px`;
            orb.style.opacity = Math.random() * 0.3;
            
            // Animate with GSAP
            gsap.set(orb, {
                x: `${posX}%`,
                y: `${posY}%`,
                scale: Math.random() * 0.6 + 0.4
            });
            
            gsap.to(orb, {
                x: `+=${Math.random() * 20 - 10}%`,
                y: `+=${Math.random() * 20 - 10}%`,
                duration: duration,
                delay: delay,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            
            gsap.to(orb, {
                opacity: Math.random() * 0.2 + 0.1,
                duration: Math.random() * 5 + 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            
            container.appendChild(orb);
        }
    }

    // Initialize the neural network animation in Matchbox section
    function initializeNeuralNetwork() {
        const neuralNetwork = document.querySelector('.neural-network');
        if (!neuralNetwork) return;
        
        // GSAP animation for data flow along connections
        const connections = document.querySelectorAll('.connection');
        connections.forEach((connection, index) => {
            // Create a data point element that travels along the connection
            const dataPoint = document.createElement('div');
            dataPoint.className = 'data-point';
            dataPoint.style.width = '6px';
            dataPoint.style.height = '6px';
            dataPoint.style.borderRadius = '50%';
            dataPoint.style.background = 'white';
            dataPoint.style.position = 'absolute';
            dataPoint.style.boxShadow = '0 0 8px var(--primary-light)';
            dataPoint.style.opacity = '0';
            
            connection.appendChild(dataPoint);
            
            // Animate the data point
            gsap.to(dataPoint, {
                left: '100%',
                opacity: 0.8,
                duration: 2 + Math.random(),
                delay: index * 0.5,
                repeat: -1,
                ease: 'power1.inOut',
                onComplete: () => {
                    dataPoint.style.left = '0%';
                }
            });
        });
        
        // Add slight movement to the nodes
        const nodes = document.querySelectorAll('.node');
        nodes.forEach((node, index) => {
            const originalTop = parseFloat(window.getComputedStyle(node).top);
            const originalLeft = parseFloat(window.getComputedStyle(node).left);
            
            gsap.to(node, {
                top: originalTop + (Math.random() * 10 - 5) + 'px',
                left: originalLeft + (Math.random() * 10 - 5) + 'px',
                duration: 3 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: index * 0.3
            });
        });
    }

    // Initialize all animations
    document.addEventListener('DOMContentLoaded', function() {
        // ... existing code ...
        initStepsObserver();
        initializeLottieAnimations();
        initializeNeuralNetwork();
        // ... existing code ...
    });
});

// Additional animation keyframes (will be added via CSS)
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

.success-message {
    text-align: center;
    animation: fadeIn 0.5s ease forwards;
}

.success-message h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--primary-light);
}

.success-message p {
    color: var(--text-secondary);
}

.form-group input.error {
    border-color: #F44336;
    animation: shake 0.5s ease-in-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.validation-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}
</style>
`);

// SVG fallback if Lottie doesn't load
function createSVGFolder() {
    // This would normally be server-side
    // For demo, we're creating these SVGs dynamically
    
    // Create images folder if needed in a real environment
    // For this demo, we'll just use inline SVGs
    
    const svgs = {
        'questionnaire': `
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="120" height="160" rx="10" fill="#1e1e1e" stroke="#8a2be2" stroke-width="4"/>
            <line x1="60" y1="70" x2="140" y2="70" stroke="#8a2be2" stroke-width="4"/>
            <line x1="60" y1="100" x2="140" y2="100" stroke="#8a2be2" stroke-width="4"/>
            <line x1="60" y1="130" x2="140" y2="130" stroke="#8a2be2" stroke-width="4"/>
            <line x1="60" y1="160" x2="110" y2="160" stroke="#8a2be2" stroke-width="4"/>
            <circle cx="150" cy="50" r="30" fill="#8a2be2" opacity="0.3"/>
        </svg>
        `,
        'algorithm': `
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="#1e1e1e" stroke="#8a2be2" stroke-width="4"/>
            <path d="M60 80 L90 120 L140 60" stroke="#8a2be2" stroke-width="4" stroke-linecap="round"/>
            <circle cx="60" cy="80" r="8" fill="#8a2be2"/>
            <circle cx="90" cy="120" r="8" fill="#8a2be2"/>
            <circle cx="140" cy="60" r="8" fill="#8a2be2"/>
            <path d="M170 130 C 150 180, 60 170, 40 120" stroke="#8a2be2" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 8"/>
        </svg>
        `,
        'match': `
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="100" r="40" fill="#1e1e1e" stroke="#8a2be2" stroke-width="4"/>
            <circle cx="130" cy="100" r="40" fill="#1e1e1e" stroke="#8a2be2" stroke-width="4"/>
            <path d="M100 60 L100 140" stroke="#8a2be2" stroke-width="4" stroke-dasharray="10 10"/>
            <path d="M70 90 L60 110 L80 110 Z" fill="#8a2be2"/>
            <path d="M130 90 L120 110 L140 110 Z" fill="#8a2be2"/>
            <path d="M45 70 C 60 40, 80 40, 95 70" stroke="#8a2be2" stroke-width="3" fill="none"/>
            <path d="M105 70 C 120 40, 140 40, 155 70" stroke="#8a2be2" stroke-width="3" fill="none"/>
        </svg>
        `
    };

    // Replace SVG placeholders with actual inline SVGs
    document.querySelectorAll('.step-image img').forEach(img => {
        const alt = img.getAttribute('alt').toLowerCase();
        if (svgs[alt]) {
            const svgContainer = document.createElement('div');
            svgContainer.innerHTML = svgs[alt];
            img.parentNode.replaceChild(svgContainer.firstElementChild, img);
        }
    });
}

// Function to handle typewriter effect for the step descriptions
function typewriterEffect(element, text, speed = 50) {
    if (!element) return;
    
    element.innerHTML = '';
    element.style.opacity = 1;
    
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// How It Works Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Questionnaire Animation with Typewriter Effect
    const questions = [
        "Past matters",
        "Flirting is cheating",
        "I would accept a bribe",
        "My partner can be friends with an ex",
        "I'm special",
        "Every perspective deserves to be heard",
        "I would try any drug at least once"
    ];
    const questionBox = document.getElementById('questionBox');
    let currentQuestion = 0;

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            questionBox.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function startTextAnimation(i) {
        if (typeof questions[i] == 'undefined') {
            setTimeout(function() {
                startTextAnimation(0);
            }, 2000);
        }
        if (i < questions.length) {
            typeWriter(questions[i], 0, function() {
                startTextAnimation(i + 1);
            });
        }
    }

    startTextAnimation(currentQuestion);

    // Step 2: Algorithm Connection Animation
    const canvas = document.getElementById("connectionCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let animationRunning = false;
        let animationFrame;
        
        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        const nodes = Array.from({ length: 30 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        }));
        
        function animate() {
            if (!canvas.getContext) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
                
                ctx.beginPath();
                ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = "#CEA335"; // Gold color
                ctx.fill();
            });
            
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        const opacity = 1 - dist / 100;
                        ctx.strokeStyle = `rgba(206, 163, 53, ${opacity * 0.2})`; // Gold color
                        ctx.lineWidth = opacity * 1.5;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            animationFrame = requestAnimationFrame(animate);
        }
        
        // Start animation when the element comes into view
        const startAnimation = () => {
            if (!animationRunning) {
                animationRunning = true;
                animate();
            }
        };
        
        const stopAnimation = () => {
            if (animationRunning) {
                cancelAnimationFrame(animationFrame);
                animationRunning = false;
            }
        };
        
        // Use intersection observer to detect when the canvas is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAnimation();
                } else {
                    stopAnimation();
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(canvas);
    }

    // Step 3: Match Reveal Animation
    const matches = [
        "You and Alex share a 92% value alignment — and love debating over dessert.",
        "You and Maya both believe flirting is cheating — and love spicy food.",
        "You and Josh matched on 8 worldview dimensions.",
        "You both said 'monogamy is outdated' — and want something real.",
        "You and Priya value emotional independence and long Sunday walks."
    ];

    let matchIndex = 0;
    const matchBox = document.getElementById("matchRevealBox");
    
    if (matchBox) {
        function showNextMatch() {
            matchBox.style.opacity = 0;
            setTimeout(() => {
                matchBox.innerText = matches[matchIndex];
                matchBox.style.opacity = 1;
                matchIndex = (matchIndex + 1) % matches.length;
            }, 600);
        }

        setInterval(showNextMatch, 3500);
        showNextMatch();
    }
});

// Ensure all animations and dynamic styles use the gold theme

// Example of updating a dynamic style
const someElement = document.querySelector('.some-element');
if (someElement) {
    someElement.style.color = '#CEA335'; // Gold color
}