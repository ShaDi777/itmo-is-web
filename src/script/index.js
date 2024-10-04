document.querySelectorAll('.product-image').forEach(img => {
    img.addEventListener('load', function () {
        this.classList.add('loaded');
        this.previousElementSibling.style.display = 'none';
    });

    if (img.complete) {
        img.dispatchEvent(new Event('load'));
    }
});

document.addEventListener('DOMContentLoaded', function () {
    $('.promo-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        fade: true,
        cssEase: 'linear',
        centerMode: true,
    });
});
