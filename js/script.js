document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    // --- LÓGICA PARA EL MENÚ DE HAMBURGUESA ---
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar/ocultar el menú
            navMenu.classList.toggle('active');
            // Alterna la clase 'active' para animar el icono
            navToggle.classList.toggle('active');
        });
    }
    // --- CERRAR MENÚ AL HACER CLIC EN UN ENLACE ---
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    // --- LÓGICA PARA EL SCROLL DEL HEADER ---
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);
});