
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';

});

// Close menu when clicking on a link (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 767) {
            navLinks.classList.remove('active');
            toggleBtn.textContent = '☰';
        }
    });

});

// Close menu when resizing to larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        navLinks.classList.remove('active');
        toggleBtn.textContent = '☰';

    }
});
