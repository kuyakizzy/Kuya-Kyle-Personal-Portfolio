// Wait for DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for same-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Handle hash navigation on page load
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
    }

    // Add scroll effect to navigation
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.pageYOffset > 100) {
                nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
            } else {
                nav.style.boxShadow = 'none';
            }
        }
    });

});
