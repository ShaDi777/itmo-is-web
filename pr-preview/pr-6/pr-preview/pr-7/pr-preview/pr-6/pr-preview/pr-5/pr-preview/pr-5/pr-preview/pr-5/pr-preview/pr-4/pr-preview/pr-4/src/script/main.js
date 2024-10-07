

(function () {
    const menuItems = document.querySelectorAll('nav a');
    const currentPath = document.location.pathname;

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
    });
})();