// 3D App Icon Effect
const iconContainer = document.querySelector('.app-icon-container');
const icon = document.querySelector('.app-icon-3d');

iconContainer.addEventListener('mousemove', (e) => {
    const rect = iconContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    icon.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

iconContainer.addEventListener('mouseleave', () => {
    icon.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

reveals.forEach(reveal => revealObserver.observe(reveal));
