import {renderReviews} from "./reviews.js";
import {clearPageReviewState, persistPageReviewState, saveReview} from "./storage.js";

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
        clearPageReviewState();
        form.reset();

        // Обновляем список отзывов после добавления нового
        renderReviews(reviewsContainer);
    });

    // Загружаем отзывы при открытии страницы
    window.addEventListener('DOMContentLoaded', function () {
        renderReviews(reviewsContainer);
    });
})();


// Состояние
const nameInput = document.getElementById('name');
const ratingSelect = document.getElementById('rating');
const reviewTextArea = document.getElementById('reviewText');

// Сохранение состояния в footer
(function () {
    const form = document.getElementById('reviewForm');

    nameInput.addEventListener('input', () => persistPageReviewState(form));
    ratingSelect.addEventListener('change', () => persistPageReviewState(form));
    reviewTextArea.addEventListener('input',() =>  persistPageReviewState(form));
})();

// Выгрузка состояния в footer
(function (){
    function loadReviewState() {
        const savedState = JSON.parse(localStorage.getItem('pageReviewState'));
        if (savedState) {
            nameInput.value = savedState.name || '';
            ratingSelect.value = savedState.rating || '5'; // Значение по умолчанию
            reviewTextArea.value = savedState.text || '';
        }
    }

    window.addEventListener('DOMContentLoaded', loadReviewState);
})();