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
    // Инициализация слайдера Slick для элемента с классом .promo-slider
    $('.promo-slider').slick({
        infinite: true,         // Включает бесконечную прокрутку слайдов
        slidesToShow: 1,        // Показывает один слайд за раз
        slidesToScroll: 1,      // Прокручивает один слайд за один шаг
        autoplay: true,         // Включает автоматическое воспроизведение слайдов
        autoplaySpeed: 3000,    // Интервал между слайдами (3000 мс = 3 секунды)
        dots: true,             // Отображает навигационные точки-индикаторы для каждого слайда
        fade: true,             // Анимация плавного затухания между слайдами
        cssEase: 'linear',      // Линейное сглаживание анимации
        centerMode: true,       // Центрирование активного слайда
        pauseOnHover: true,     // Приостановка автоматического воспроизведения при наведении мыши
    });
});
