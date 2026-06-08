const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

// Abre/fecha o menu
toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
});

// Fecha com Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', false);
        toggle.focus();
    }
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', false);
    });
});

// Sombra na navbar ao rolar
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

// Ano automático no footer
const yearSpan = document.getElementById('footer-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Demanda do cliente: indicador visual de navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('using-keyboard');
});