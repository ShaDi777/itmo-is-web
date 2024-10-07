(function () {
    const textarea = document.getElementById('reviewText');

    function rescaleTextarea() {
        textarea.style.height = 'auto'; // Сброс высоты
        textarea.style.height = `${Math.max(textarea.scrollHeight, 100)}px`;
    }

    textarea.addEventListener('input', rescaleTextarea);
    window.addEventListener('resize', () => {
        setTimeout(rescaleTextarea, 50);
    });
})();
