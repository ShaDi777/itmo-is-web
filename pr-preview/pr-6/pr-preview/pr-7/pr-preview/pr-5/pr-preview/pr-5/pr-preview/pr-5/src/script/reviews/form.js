import {renderReviews} from "./reviews.js";

(function () {
    const form = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const rating = parseInt(form.rating.value);
        const text = form.reviewText.value.trim();

        if (!name || !text) return;

        const review = {
            name,
            rating,
            text
        };

        saveReview(review);
        form.reset();

        // Обновляем список отзывов после добавления нового
        renderReviews(reviewsContainer);
    });

    // Загружаем отзывы при открытии страницы
    window.addEventListener('DOMContentLoaded', function () {
        renderReviews(reviewsContainer);
    });
})();
