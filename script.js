// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('show');
        }
    });
});

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form Submission
const quoteForm = document.getElementById('quoteForm');

quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your server
    // For this example, we'll just show an alert
    alert('Thank you for your message! We will contact you shortly.');
    quoteForm.reset();
});

// Service Modals
const serviceCards = document.querySelectorAll('.service-card');
const modals = {
    emergency: document.getElementById('emergencyModal'),
    leak: document.getElementById('leakModal'),
    pipe: document.getElementById('pipeModal'),
    installations: document.getElementById('installationModal'),
    drain: document.getElementById('drainModal')
};
const closeButtons = document.querySelectorAll('.close-modal');

// Add click events to service cards
serviceCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Determine which modal to show based on card index
        let modal;
        switch(index) {
            case 0:
                modal = modals.emergency;
                break;
            case 1:
                modal = modals.leak;
                break;
            case 2:
                modal = modals.pipe;
                break;
            case 3:
                modal = modals.installations;
                break;
            // Add more cases if you have more services
        }
        
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
});

// Close modals when clicking X
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('show');
        });
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }


// FAQ Accordion Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

if (faqQuestions) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-question').forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('show');
                }
            });
            
            // Toggle current FAQ
            question.classList.toggle('active');
            answer.classList.toggle('show');
        });
    });
}

});

