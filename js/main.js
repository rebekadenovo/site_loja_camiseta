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

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Abre ao clicar em qualquer imagem de card
document.querySelectorAll('.card__img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // trava o scroll
        lightboxClose.focus(); // foco acessível
    });
});

// Fecha pelo botão X
lightboxClose.addEventListener('click', fecharLightbox);

// Fecha clicando fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) fecharLightbox();
});

// Fecha com Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        fecharLightbox();
    }
});

function fecharLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = ''; // libera o scroll
}