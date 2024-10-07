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
            console.log('Элемента с ID "footer-load__text" не найдено.');
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
        `${root}/src/css/global.css`,
        `${root}/src/css/normalize.css`,
        `${root}/src/css/header.css`,
        `${root}/src/css/footer.css`,
    ].forEach(path => {
        const linkCss = document.createElement('link');
        linkCss.rel = 'stylesheet';
        linkCss.href = path;
        document.head.appendChild(linkCss);
    });

    // Scripts
    [
        `${root}/src/script/header.js`,
        `${root}/src/script/footer.js`,
        `${root}/src/script/main.js`,
    ].forEach(path => {
        const script = document.createElement('script');
        script.type = 'module'
        script.src = path;
        document.head.appendChild(script);
    });
})();
