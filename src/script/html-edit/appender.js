(function () {
    window.addEventListener('load', function () {
        const [navigationEntry] = performance.getEntriesByType('navigation');
        if (!navigationEntry) {
            console.error("Не найден navigation");
            return
        }

        const loadInfo = document.getElementById('footer-load__text');
        if (loadInfo) {
            const pageLoadTime = navigationEntry.domContentLoadedEventEnd;
            loadInfo.textContent = `Время загрузки страницы: ${Math.round(pageLoadTime)} мс`;
        } else {
            console.error('Элемента с ID "footer-load__text" не найдено.');
        }
    });
})();


// Filling <head>
(function () {
    // Logo
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = `${root}/assets/logo/smart_pulse_tiny.svg`;
    link.type = 'image/svg+xml';
    document.head.appendChild(link);

    // Styles
    [
        `${root}/src/css/common/global.css`,
        `${root}/src/css/common/normalize.css`,
        `${root}/src/css/common/header.css`,
        `${root}/src/css/common/footer.css`,
        `https://cdn.jsdelivr.net/npm/izimodal/css/iziModal.css`,
        `${root}/src/css/common/modal.css`,
    ].forEach(path => {
        const linkCss = document.createElement('link');
        linkCss.rel = 'stylesheet';
        linkCss.href = path;
        document.head.appendChild(linkCss);
    });

    // Scripts head
    [
        `https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.6.1/js/iziModal.min.js`,
        `${root}/src/script/html-edit/header.js`,
        `${root}/src/script/html-edit/footer.js`,
        `${root}/src/script/main.js`,
    ].forEach(path => {
        const script = document.createElement('script');
        script.type = 'module'
        script.src = path;
        document.head.appendChild(script);
    });

    // Scripts body
    [
        `${root}/src/script/html-edit/modal.js`,
        `${root}/src/script/reviews/form-footer.js`,
    ].forEach(path => {
        const script = document.createElement('script');
        script.type = 'module'
        script.src = path;
        window.addEventListener("load", (event) => {
            document.body.appendChild(script)
        });
    });
})();
