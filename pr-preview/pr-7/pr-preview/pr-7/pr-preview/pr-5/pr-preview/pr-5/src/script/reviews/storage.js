// Функция для сохранения отзыва в localStorage
export function saveReview(review) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Функция для загрузки отзывов из localStorage
export function loadReviews() {
    return JSON.parse(localStorage.getItem('reviews')) || [];
}
