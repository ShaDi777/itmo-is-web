document.querySelectorAll('.product-image').forEach(img => {
    img.addEventListener('load', function () {
        this.classList.add('loaded');
        this.previousElementSibling.style.display = 'none';
    });

    if (img.complete) {
        img.dispatchEvent(new Event('load'));
    }
});
