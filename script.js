// Add animation to social buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.social-btn');
    buttons.forEach((btn, index) => {
        setTimeout(() => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            btn.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 100 * index);
        }, 500);
    });
});
