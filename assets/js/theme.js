
const ToogleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

function animateIcon() {
    const visibleIcon = root.getAttribute('data-theme') === 'dark'
        ? document.getElementById('sun-icon')
        : document.getElementById('moon-icon');

    visibleIcon.classList.add('rotate');
    setTimeout(() => visibleIcon.classList.remove('rotate'), 1);
}

function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    animateIcon();
}

ToogleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
});

window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
});