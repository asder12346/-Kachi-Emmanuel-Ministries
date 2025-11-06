// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Testimonials functionality
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const testimonialTrack = document.getElementById('testimonialsTrack');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    testimonials[index].classList.add('active');
    currentTestimonial = index;
}

function nextTestimonial() {
    let nextIndex = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(nextIndex);
}

function prevTestimonial() {
    let prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prevIndex);
}

// Auto rotate testimonials
let testimonialInterval = setInterval(nextTestimonial, 5000);

// Pause auto rotation on hover
testimonialTrack.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

testimonialTrack.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

// Navigation buttons
prevBtn.addEventListener('click', prevTestimonial);
nextBtn.addEventListener('click', nextTestimonial);

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize first testimonial
showTestimonial(0);

// ==== Navbar Animation & Mobile Menu Enhancements ====
let lastScrollY = window.scrollY;
let ticking = false;
function updateNavbar() {
    const header = document.getElementById('header');
    const scrolled = window.scrollY > 100;
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add('hidden');
        header.classList.remove('visible');
    } else {
        header.classList.remove('hidden');
        header.classList.add('visible');
    }
    lastScrollY = window.scrollY;
    ticking = false;
}
function onScroll() {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}
window.addEventListener('scroll', onScroll);

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('scroll', updateActiveNavLink);
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    // Section animation on scroll
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-animate');
    });
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.section-animate').forEach(section => {
        observer.observe(section);
    });
    // Robust mobile navbar toggle
    let mobileMenu = document.getElementById('mobile-menu') || document.querySelector('#mobile-menu');
    let mobileNav = document.getElementById('mobile-nav') || document.querySelector('#mobile-nav');
    let menuOpen = false;
    if (mobileMenu && mobileNav) {
        // Remove previous listeners if any
        mobileMenu.onclick = null;
        mobileMenu.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileNav.classList.remove('hidden', 'closing');
                mobileNav.classList.add('open');
                document.body.classList.add('menu-open');
            } else {
                mobileNav.classList.remove('open');
                mobileNav.classList.add('closing');
                document.body.classList.remove('menu-open');
                // Remove .closing and hide after animation
                mobileNav.addEventListener('animationend', function handleClose() {
                    if (!menuOpen) {
                        mobileNav.classList.add('hidden');
                        mobileNav.classList.remove('closing');
                    }
                    mobileNav.removeEventListener('animationend', handleClose);
                });
            }
        });
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.onclick = null;
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                mobileNav.classList.add('closing');
                document.body.classList.remove('menu-open');
                menuOpen = false;
                // Remove .closing and hide after animation
                mobileNav.addEventListener('animationend', function handleClose() {
                    if (!menuOpen) {
                        mobileNav.classList.add('hidden');
                        mobileNav.classList.remove('closing');
                    }
                    mobileNav.removeEventListener('animationend', handleClose);
                });
            });
        });
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const headerHeight = document.getElementById('header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            if (menuOpen && mobileNav) {
                mobileNav.classList.remove('open');
                document.body.classList.remove('menu-open');
                setTimeout(() => {
                    mobileNav.classList.add('hidden');
                    menuOpen = false;
                }, 300);
            }
        }
    });
});
