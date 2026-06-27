// Add a subtle shadow to the navbar when scrolling
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    } else {
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Trigger CSS animations when elements scroll into view
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    elements.forEach(el => {
        el.style.animationPlayState = 'paused'; // Pause initially
        observer.observe(el);
    });
});

// Mock donation interaction
function mockDonation() {
    alert("Thank you for your interest in supporting the Diamond Jubilee Hall Renovation! This will redirect to the secure payment portal.");
}
// =========================================
// Intro Screen Logic
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');

    if (introScreen) {
        // Function to smoothly hide the intro
        const dismissIntro = () => {
            introScreen.classList.add('hide-intro');
        };

        // 1. Dismiss automatically after 2 seconds (2000 milliseconds)
        const introTimer = setTimeout(dismissIntro, 2000);

        // 2. Or dismiss immediately if the user taps/clicks the screen
        introScreen.addEventListener('click', () => {
            clearTimeout(introTimer); // Stop the timer so it doesn't run twice
            dismissIntro();
        });
    }
});
// =========================================
// Image Slideshow Logic
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        // Change image every 3 seconds (3000 milliseconds)
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000); 
    }
});
