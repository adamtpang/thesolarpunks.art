// Simple script for The Solarpunks website
document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Update date elements
    const creationDateEl = document.getElementById('creation-date');
    if (creationDateEl) {
        creationDateEl.textContent = dateString;
    }
    
    // Update year
    const footerYearEl = document.getElementById('footer-year');
    if (footerYearEl) {
        footerYearEl.textContent = today.getFullYear();
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple fade-in effect for episode cards on scroll
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
    
    // Apply fade-in to episode cards
    const episodeCards = document.querySelectorAll('.episode-card');
    episodeCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Apply fade-in to about content
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(20px)';
        aboutContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(aboutContent);
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    // Support Ctrl/Cmd + arrow keys for section navigation
    if ((event.ctrlKey || event.metaKey) && event.key === 'ArrowDown') {
        event.preventDefault();
        const episodesSection = document.getElementById('episodes');
        if (episodesSection) {
            episodesSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else if ((event.ctrlKey || event.metaKey) && event.key === 'ArrowUp') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// PDF.js functionality
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
const scale = 1.5;
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas?.getContext('2d');

// PDF.js worker setup
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

function renderPage(num) {
    if (!pdfDoc) return;
    
    pageRendering = true;
    
    pdfDoc.getPage(num).then(function(page) {
        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        
        const renderTask = page.render(renderContext);
        
        renderTask.promise.then(function() {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
    
    // Update page counters
    const pageInfo = document.getElementById('page-info');
    if (pageInfo) pageInfo.textContent = num + ' / ' + pdfDoc.numPages;
    
    // Update button states
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    
    if (prevBtn) prevBtn.disabled = (num <= 1);
    if (nextBtn) nextBtn.disabled = (num >= pdfDoc.numPages);
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

function onPrevPage() {
    if (pageNum <= 1) return;
    pageNum--;
    queueRenderPage(pageNum);
}

function onNextPage() {
    if (!pdfDoc || pageNum >= pdfDoc.numPages) return;
    pageNum++;
    queueRenderPage(pageNum);
}

// Initialize PDF viewer
function initPDF() {
    const pdfPath = 'sunday_comic.pdf';
    
    if (typeof pdfjsLib === 'undefined') {
        showPDFFallback();
        return;
    }
    
    pdfjsLib.getDocument(pdfPath).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        
        // Initial page render
        renderPage(pageNum);
        
        // Button event listeners
        const prevBtn = document.getElementById('prev-page');
        const nextBtn = document.getElementById('next-page');
        
        if (prevBtn) prevBtn.addEventListener('click', onPrevPage);
        if (nextBtn) nextBtn.addEventListener('click', onNextPage);
        
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
        showPDFFallback();
    });
}

function showPDFFallback() {
    const fallback = document.querySelector('.pdf-fallback');
    const canvas = document.getElementById('pdf-canvas');
    const controls = document.querySelector('.pdf-controls');
    
    if (fallback) fallback.style.display = 'block';
    if (canvas) canvas.style.display = 'none';
    if (controls) controls.style.display = 'none';
}

// Initialize PDF when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code...
    
    // Initialize PDF viewer
    if (document.getElementById('pdf-canvas')) {
        initPDF();
    }
});