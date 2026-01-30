// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animate on scroll (GSAP-like from original)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0) translateY(0)';
        }
    });
});
document.querySelectorAll('.hero-content, .section').forEach(el => observer.observe(el));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.transform = 'translateY(0)';
    }
});

// Wave hand animation
document.querySelector('.wave')?.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(20deg)' }], { duration: 2000, iterations: Infinity });
