// Set current date and year
document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
    });
    
    const currentYear = new Date().getFullYear();
    
    // Update all date elements
    const dateElements = [
        'current-date',
        'creation-date', 
        'footer-date'
    ];
    
    dateElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = currentDate;
        }
    });
    
    // Update year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add scroll effects and animations
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax effect for background orbs
    const orbs = document.querySelectorAll('.bg-orb');
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation for episode cards
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

// Observe episode cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const episodeCards = document.querySelectorAll('.episode-card');
    const aboutCards = document.querySelectorAll('.about-card');
    
    // Initially hide cards for animation
    [...episodeCards, ...aboutCards].forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Add glow effect on hover for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button, .secondary-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// Add typing effect to hero subtitle (optional enhancement)
function typeText(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// Enhanced scroll indicator interaction
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            scrollToSection('episodes');
        });
        
        scrollIndicator.style.cursor = 'pointer';
    }
});

// Add smooth color transitions for social links
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown' && event.ctrlKey) {
        event.preventDefault();
        const currentSection = getCurrentSection();
        const nextSection = getNextSection(currentSection);
        if (nextSection) {
            scrollToSection(nextSection);
        }
    } else if (event.key === 'ArrowUp' && event.ctrlKey) {
        event.preventDefault();
        const currentSection = getCurrentSection();
        const prevSection = getPrevSection(currentSection);
        if (prevSection) {
            scrollToSection(prevSection);
        }
    }
});

function getCurrentSection() {
    const sections = ['hero', 'episodes', 'about'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                return sectionId;
            }
        }
    }
    
    return 'hero';
}

function getNextSection(currentSection) {
    const sections = ['hero', 'episodes', 'about'];
    const currentIndex = sections.indexOf(currentSection);
    return sections[currentIndex + 1] || null;
}

function getPrevSection(currentSection) {
    const sections = ['hero', 'episodes', 'about'];
    const currentIndex = sections.indexOf(currentSection);
    return sections[currentIndex - 1] || null;
}