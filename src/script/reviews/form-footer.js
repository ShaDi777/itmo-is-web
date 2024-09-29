import {clearFooterReviewState, persistFooterReviewState, saveReview} from './storage.js';
import {renderReviews} from "./reviews.js";

(function () {
    const footerForm = document.getElementById('footerReviewForm');

    footerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = footerForm.footerNameInput.value.trim();
        const rating = parseInt(footerForm.footerRating.value);
        const text = footerForm.footerReviewText.value.trim();

        if (!name || !text) return;

        const review = {
            name,
            rating,
            text
        };

        saveReview(review);
        clearFooterReviewState();
        footerForm.reset();

        const reviewsContainer = document.getElementById('reviewsContainer');
        if (reviewsContainer) {
            renderReviews(reviewsContainer);
        }

        alert("Ваш отзыв успешно отправлен!")
    });
})();


// Состояние
const nameInput = document.getElementById('footerNameInput');
const ratingSelect = document.getElementById('footerRating');
const reviewTextArea = document.getElementById('footerReviewText');

// Сохранение состояния в footer
(function () {
    const footerForm = document.getElementById('footerReviewForm');

    nameInput.addEventListener('input', () => persistFooterReviewState(footerForm));
    ratingSelect.addEventListener('change', () => persistFooterReviewState(footerForm));
    reviewTextArea.addEventListener('input', () => persistFooterReviewState(footerForm));
})();

// Выгрузка состояния в footer
(function () {
    function loadReviewState() {
        const savedState = JSON.parse(localStorage.getItem('footerReviewState'));
        if (savedState) {
            nameInput.value = savedState.name || '';
            ratingSelect.value = savedState.rating || '5'; // Значение по умолчанию
            reviewTextArea.value = savedState.text || '';
        }
    }

    loadReviewState();
})();