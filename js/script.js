window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    // Add 'header-scrolled' class if user scrolls more than 50px, else remove it
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});