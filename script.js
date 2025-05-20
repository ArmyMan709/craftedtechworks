// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
            
            // Animation for mobile menu
            if(navLinks.classList.contains('nav-active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#fff';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                navLinks.style.zIndex = '99';
            } else {
                setTimeout(() => {
                    navLinks.style.display = '';
                    navLinks.style.flexDirection = '';
                    navLinks.style.position = '';
                    navLinks.style.top = '';
                    navLinks.style.left = '';
                    navLinks.style.width = '';
                    navLinks.style.backgroundColor = '';
                    navLinks.style.padding = '';
                    navLinks.style.boxShadow = '';
                    navLinks.style.zIndex = '';
                }, 300);
            }
        });
    }
    
    // Close mobile menu when clicking a link
    const navLinkElements = document.querySelectorAll('.nav-links a');
    navLinkElements.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                
                setTimeout(() => {
                    navLinks.style.display = '';
                    navLinks.style.flexDirection = '';
                    navLinks.style.position = '';
                    navLinks.style.top = '';
                    navLinks.style.left = '';
                    navLinks.style.width = '';
                    navLinks.style.backgroundColor = '';
                    navLinks.style.padding = '';
                    navLinks.style.boxShadow = '';
                    navLinks.style.zIndex = '';
                }, 300);
            }
        });
    });
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // For demo purposes - replace with actual form submission
        const formData = new FormData(contactForm);
        const formValues = {};
        
        for(let [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        
        // Simple validation
        if(!formValues.name || !formValues.email || !formValues.message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Show submission message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending
        setTimeout(() => {
            alert('Thanks for your message! We will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Function to handle intersection
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
};

// Create an observer
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe service cards for staggered animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe process steps for staggered animation
    const processSteps = document.querySelectorAll('.step');
    processSteps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(step);
    });
}); 