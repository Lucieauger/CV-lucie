document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
        section.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.opacity = '0.9';
        });
        section.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1.0)';
            this.style.opacity = '1';
        });
    });
});
