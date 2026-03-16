// main.js
import { loadSection } from './loader.js';
import { initTypeEffect } from './animationtitle.js';

function forceStickyUpdate() {
    // Pequeño truco para forzar reflow
    document.body.style.display = 'none';
    document.body.offsetHeight;
    document.body.style.display = '';
    window.dispatchEvent(new Event('scroll'));
}

document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
        loadSection('nav-cv', 'pages/nav.html'),
        loadSection('landing-cv', 'pages/landing.html'),
        loadSection('quien-soy', 'pages/quiensoy.html'),
        loadSection('conocimientos', 'pages/conocimientos.html'),
        loadSection('proyectos', 'pages/proyectos.html'),
        loadSection('contactame', 'pages/contactame.html'),
        loadSection('footer-cv', 'pages/footer.html')
    ]).then(() => {
        // Forzar actualización de sticky
        forceStickyUpdate();

        // Inicializar animación de escritura (ahora los elementos ya están en el DOM)
        initTypeEffect();
    });
});