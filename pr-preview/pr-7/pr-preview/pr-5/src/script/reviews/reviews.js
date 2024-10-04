import {loadReviews} from "./storage.js";

// Функция для отображения одного отзыва
function displayReview(review, container) {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';

    const headerContainer = document.createElement('div');
    headerContainer.className = 'review-header';

    const reviewName = document.createElement('h3');
    reviewName.textContent = review.name;

    const ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating';

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = i <= review.rating ? 'star' : 'star empty';
        star.textContent = i <= review.rating ? '★' : '☆';
        ratingContainer.appendChild(star);
    }

    const reviewText = document.createElement('p');
    reviewText.innerHTML = review.text;

    headerContainer.appendChild(reviewName);
    headerContainer.appendChild(ratingContainer);
    reviewCard.appendChild(headerContainer);
    reviewCard.appendChild(reviewText);
    container.appendChild(reviewCard);
}

// Функция для отображения всех отзывов
export function renderReviews(container) {
    const reviews = loadReviews();
    container.innerHTML = '';

    if (reviews.length === 0) {
        container.innerHTML = '<p>Отзывов пока нет. Будьте первым!</p>';
        return;
    }

    reviews.forEach(review => displayReview(review, container));
}
