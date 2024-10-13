document.addEventListener('DOMContentLoaded', function () {
    const catalogContainer = document.getElementById('catalog');
    const preloaderText = document.getElementById('preloader-text');
    const preloaderGif = document.getElementById('preloader-gif');
    const apiUrl = 'https://66f9c79fafc569e13a99a9e2.mockapi.io/smartpulse/api/smartphones';

    function filterProducts(products) {
        return products.filter(product => parseInt(product.id) > 0);
    }

    async function loadProducts() {
        preloaderText.style.display = 'block';
        preloaderGif.style.display = 'block';

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Ошибка сети');
            }

            const products = await response.json();
            const filteredProducts = filterProducts(products);

            displayProducts(filteredProducts);

        } catch (error) {
            console.error('Произошла ошибка при загрузке данных:', error);
            catalogContainer.innerHTML = '<p>Что-то пошло не так. Попробуйте снова позже.</p>';
        } finally {
            preloaderText.style.display = 'none';
            preloaderGif.style.display = 'none';
        }
    }

    async function fetchImageUrl(url) {
        const response = await fetch(url);
        if (!response.ok || Math.floor(Math.random() * 5) === 0) {
            return "../../assets/logo/smart_pulse_tiny.svg";
        }

        return response.url;
    }

    function displayProducts(products) {
        products.forEach(product => {
            const productCard = document.createElement('article');
            productCard.classList.add('product-card');

            // Контейнер для изображения и прелоадера
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            // Прелоадер
            const spinner = document.createElement('div');
            spinner.classList.add('loading-spinner');
            imageContainer.appendChild(spinner);

            // Картинка товара
            const productImage = document.createElement('img');
            productImage.alt = product.name;
            productImage.classList.add('product-image');
            imageContainer.appendChild(productImage);

            // Добавляем карточку товара в контейнер каталога до загрузки изображений
            catalogContainer.appendChild(productCard);
            productCard.appendChild(imageContainer);

            // Название товара
            const productName = document.createElement('h3');
            productName.textContent = product.name;
            productCard.appendChild(productName);

            // Цена товара
            const productPrice = document.createElement('p');
            productPrice.innerHTML = `Цена: <strong>${Math.round(product.price * 100)} руб.</strong>`;
            productCard.appendChild(productPrice);

            // Статус наличия товара
            const productStock = document.createElement('p');
            if (product.in_stock) {
                productStock.innerHTML = '<span class="in-stock">В наличии</span><p><br></p>';
            } else {
                const nextShipmentDate = new Date(product.next_shipment).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                productStock.innerHTML = `<span class="out-of-stock">Нет в наличии</span><p>(Поставка: ${nextShipmentDate})</p>`;
            }
            productCard.appendChild(productStock);

            // Кнопка добавления в корзину
            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add('add-to-cart-button');
            addToCartButton.textContent = 'Добавить в корзину';
            productCard.appendChild(addToCartButton);

            // Загружаем URL изображения асинхронно
            fetchImageUrl(product.image).then(finalImageUrl => {
                if (!finalImageUrl) {
                    spinner.style.display = 'none';
                    productImage.alt = 'Изображение недоступно';
                    return
                }

                productImage.src = finalImageUrl;

                productImage.onload = function () {
                    productImage.classList.add('loaded');
                    spinner.style.display = 'none';

                };

                productImage.onerror = function () {
                    spinner.style.display = 'none';
                    productImage.alt = 'Изображение недоступно';
                };
            });
        });
    }

    loadProducts();
});
