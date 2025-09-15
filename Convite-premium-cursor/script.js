// Smooth scrolling for anchor links and scroll indicators
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll functionality to video scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('.exclusivo-section');
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        // Add cursor pointer to indicate it's clickable
        scrollIndicator.style.cursor = 'pointer';
    }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add glitter particle animation
    createGlitterParticles();

    // Add phone tilt effect on hover
    addPhoneTiltEffect();

    // Add button hover effects
    addButtonEffects();
});

// Create additional glitter particles
function createGlitterParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'glitter-particle';
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: #d4af37;
            border-radius: 50%;
            pointer-events: none;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: glitter ${2 + Math.random() * 3}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
}

// Add phone tilt effect on hover
function addPhoneTiltEffect() {
    const phones = document.querySelectorAll('.phone-mockup');
    
    phones.forEach(phone => {
        phone.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(-15deg) scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        phone.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(-15deg) scale(1)';
        });
    });
}

// Add enhanced button effects
function addButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(239, 97, 112, 0.5)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 25px rgba(239, 97, 112, 0.3)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
    });
}

// Add video controls and effects
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video-bg');
    if (video) {
        // Ensure video plays on mobile devices
        video.addEventListener('loadeddata', function() {
            this.play().catch(function(error) {
                console.log('Video autoplay failed:', error);
            });
        });
        
        // Add subtle parallax effect to video overlay
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const videoOverlay = document.querySelector('.video-overlay');
            
            if (videoOverlay && scrolled < window.innerHeight) {
                videoOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }
});

// Add typing effect to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize video and scroll effects when page loads
window.addEventListener('load', function() {
    // Video is already initialized in the DOMContentLoaded event
    console.log('Video hero section loaded successfully');
});

// Add video play functionality
document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Here you would typically open a video modal or redirect to video
            console.log('Video play clicked');
        });
    });
});

// Add gallery item hover effects
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const phone = item.querySelector('.phone-mockup');
        
        item.addEventListener('mouseenter', function() {
            phone.style.transform = 'rotate(-15deg) scale(1.1)';
            phone.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            phone.style.transform = 'rotate(-15deg) scale(1)';
        });
    });
});

// Add step animation on scroll
function animateSteps() {
    const steps = document.querySelectorAll('.step');
    const stepObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.5 });

    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        stepObserver.observe(step);
    });
}

// Initialize step animations
document.addEventListener('DOMContentLoaded', animateSteps);

// Add WhatsApp click tracking
function trackWhatsAppClick(buttonText) {
    // Here you would typically send analytics data
    console.log(`WhatsApp button clicked: ${buttonText}`);
    
    // You can add Google Analytics or other tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            event_category: 'WhatsApp',
            event_label: buttonText
        });
    }
}

// Add click tracking to all WhatsApp buttons
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackWhatsAppClick(this.textContent.trim());
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a subtle fade-in effect to the entire page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
