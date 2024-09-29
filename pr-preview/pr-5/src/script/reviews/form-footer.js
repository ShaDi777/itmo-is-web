import {saveReview} from './storage.js';
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
        footerForm.reset();

        const reviewsContainer = document.getElementById('reviewsContainer');
        if (reviewsContainer) {
            renderReviews(reviewsContainer);
        }

        alert("Ваш отзыв успешно отправлен!")
    });
})();
