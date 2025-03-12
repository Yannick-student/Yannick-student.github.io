// Smooth Scroll Effect
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Progress Bar Animation
window.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.progress-bar div');
    skillBars.forEach(bar => {
        const barPos = bar.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.5;
        if (barPos < screenPos) {
            bar.style.width = bar.getAttribute('style').split(':')[1];
        }
    });
});
