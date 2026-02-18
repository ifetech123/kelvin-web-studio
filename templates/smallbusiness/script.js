

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked (for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Check if the link is an internal anchor
            if (link.getAttribute('href').startsWith('#')) {
                // Prevent default hash jump
                event.preventDefault();

                // Close the mobile menu if it's open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }

                // Get the target section's ID
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Scroll smoothly to the target section
                    window.scrollTo({
                        top: targetSection.offsetTop - (document.querySelector('.header').offsetHeight || 0), // Adjust for sticky header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add sticky header class on scroll (optional, but good for larger headers)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add shadow after scrolling 50px
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});


