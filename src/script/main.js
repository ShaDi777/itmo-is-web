(function () {
    window.onload = function () {
        const currentPath = document.location.pathname;

        const navLinks = document.querySelectorAll('.header-nav__link');

        navLinks.forEach(link => {
            let linkPathname = new URL(link.href).pathname

            if (linkPathname === currentPath) {
                link.classList.add('active');
                link.removeAttribute('href');
            }
        });
    };
})();
