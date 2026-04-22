// Ripple effect on card click
document.querySelectorAll('.link-card').forEach(link => {
    link.addEventListener('click', function (e) {
        const platform = this.dataset.platform;
        const label = this.querySelector('span')?.innerText;
        console.log(`التوجيه إلى: ${label} (${platform})`);

        // Create ripple
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.12);
            width: 10px;
            height: 10px;
            left: ${e.clientX - this.getBoundingClientRect().left - 5}px;
            top: ${e.clientY - this.getBoundingClientRect().top - 5}px;
            transform: scale(0);
            animation: rippleAnim 0.5s ease forwards;
            pointer-events: none;
        `;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 500);
    });
});

// Inject ripple keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleAnim {
        to { transform: scale(30); opacity: 0; }
    }
`;
document.head.appendChild(style);