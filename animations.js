// Animations JavaScript for Kachi Emmanuel Ministries

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initializeAnimations();

    // Set up scroll animations
    setupScrollAnimations();

    // Add staggered animations
    setupStaggeredAnimations();
});

// Function to initialize animations that should run on page load
function initializeAnimations() {
    // Hero section animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.querySelector('h1').classList.add('slide-in-down');
        heroContent.querySelector('p').classList.add('fade-in', 'delay-300');
        
        const heroBtns = heroContent.querySelector('.hero-btns');
        if (heroBtns) {
            heroBtns.classList.add('slide-in-up', 'delay-600');
        }
    }

    // Navbar animation
    const navbar = document.querySelector('.km-navbar');
    if (navbar) {
        navbar.classList.add('slide-in-down');
    }

    // Logo animation
    const logo = document.querySelector('.km-brand');
    if (logo) {
        logo.classList.add('fade-in');
    }

    // Apply initial animations to visible sections
    animateVisibleElements();
}

// Function to set up scroll-triggered animations
function setupScrollAnimations() {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in view
            if (entry.isIntersecting) {
                // Add the active class to trigger the animation
                entry.target.classList.add('active');
                
                // Animate child elements if they have animation classes
                const animatedChildren = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right');
                animatedChildren.forEach((child, index) => {
                    // Add a slight delay for each child element
                    setTimeout(() => {
                        child.classList.add('active');
                    }, index * 150);
                });
                
                // Unobserve the element after animating it
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Element becomes visible when 20% of it enters the viewport
        threshold: 0.2,
        // Start animation slightly before element enters viewport
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        // Add the reveal class to all sections
        section.classList.add('reveal');
        observer.observe(section);
        
        // Add specific reveal classes to section titles and content
        const sectionTitle = section.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.classList.add('reveal');
            observer.observe(sectionTitle);
        }
    });

    // Observe specific elements for custom animations
    setupCustomElementAnimations(observer);
}

// Function to set up staggered animations for lists and grids
function setupStaggeredAnimations() {
    // Work cards staggered animation
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach((card, index) => {
        card.classList.add('stagger-item');
        card.style.animationDelay = `${index * 200}ms`;
    });
    
    const worksGrid = document.querySelector('.works-grid');
    if (worksGrid) {
        worksGrid.classList.add('stagger-fade-in');
    }

    // Gallery items staggered animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.classList.add('stagger-item');
        item.style.animationDelay = `${index * 150}ms`;
    });
    
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        galleryGrid.classList.add('stagger-slide-up');
    }

    // Partner options staggered animation
    const partnerOptions = document.querySelectorAll('.partner-option');
    partnerOptions.forEach((option, index) => {
        option.classList.add('stagger-item');
        option.style.animationDelay = `${index * 200}ms`;
    });
    
    const partnerOptionsContainer = document.querySelector('.partner-options');
    if (partnerOptionsContainer) {
        partnerOptionsContainer.classList.add('stagger-fade-in');
    }
}

// Function to set up custom animations for specific elements
function setupCustomElementAnimations(observer) {
    // About section animations
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.classList.add('reveal-right');
        observer.observe(aboutText);
    }

    // Testimonials animation
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.classList.add('zoom-in');
        observer.observe(testimonial);
    });

    // Contact form animation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.classList.add('reveal-left');
        observer.observe(contactForm);
    }

    // Contact info animation
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.classList.add('reveal-right');
        observer.observe(contactInfo);
    }

    // Newsletter section animation
    const newsletter = document.querySelector('.newsletter');
    if (newsletter) {
        newsletter.classList.add('section-transition');
        observer.observe(newsletter);
    }

    // Social links animation
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.classList.add('fade-in');
        link.style.animationDelay = `${index * 200}ms`;
        observer.observe(link);
    });

    // Donate button animation
    const donateBtn = document.querySelector('.donate-btn');
    if (donateBtn) {
        donateBtn.classList.add('pulse');
    }
}

// Function to animate elements that are already visible on page load
function animateVisibleElements() {
    // Check which elements are visible on page load
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with reveal classes
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(element => {
        observer.observe(element);
    });
}

// Add scroll event listener to handle navbar animations
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.km-navbar-wrapper');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Function to animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add scroll event listener for fallback animation support
window.addEventListener('scroll', animateOnScroll);

// Initial check for elements in view
animateOnScroll();
