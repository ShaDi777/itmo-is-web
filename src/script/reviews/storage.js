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

// Работа с основной страницей отзывов
export function persistPageReviewState(form) {
    const reviewState = {
        name: form.name.value.trim(),
        rating: parseInt(form.rating.value),
        text: form.reviewText.value.trim(),
    };
    localStorage.setItem('pageReviewState', JSON.stringify(reviewState));
}

export function clearPageReviewState() {
    localStorage.removeItem('pageReviewState');
}

// Работа с отзывом в footer
export function persistFooterReviewState(footerForm) {
    const reviewState = {
        name: footerForm.footerNameInput.value.trim(),
        rating: parseInt(footerForm.footerRating.value),
        text: footerForm.footerReviewText.value.trim(),
    };
    localStorage.setItem('footerReviewState', JSON.stringify(reviewState));

    console.log(reviewState)
}

export function clearFooterReviewState() {
    localStorage.removeItem('footerReviewState');
}