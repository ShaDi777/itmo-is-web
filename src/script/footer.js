class ShopFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<!-- Подвал -->
<footer class="footer">
    <div class="footer__left">
        <a class="footer-logo" href="${root}/index.html">
            <img alt="SmartPulse" src="${root}/assets/logo/smart_pulse_vertical.svg">
        </a>
        <h4>Контактная информация:</h4>
        <p class="footer-copyrights">SmartPulse 2024</p>
        <p class="footer-name">Интернет-магазин смартфонов</p>
        <p class="contacts-phone">Телефон: <a class="contacts-phone__link" href="tel:8 (999) 999-99-99">8 (999) 999-99-99</a></p>
        <p class="contacts-email">Email: <a class="contacts-email__link" href="mailto:smartpulse@info.com">smartpulse@info.com</a></p>
        <ul class="contacts-social">
            <li class="contacts-social__item">
                <a href="https://t.me/ShaDmi777">
                    <img src="${root}/assets/socials/telegram-icon.svg" width="24" height="24" alt="telegram">
                </a>
            </li>
            <li class="contacts-social__item">
                <a href="https://vk.com/id0">
                    <img src="${root}/assets/socials/vk-icon.svg" width="24" height="24" alt="vk">
                </a>
            </li>
            <li class="contacts-social__item">
                <a href="https://github.com/ShaDi777">
                    <img src="${root}/assets/socials/github-icon.svg" width="24" height="24" alt="github">
                </a>
            </li>
        </ul>
    </div>
    
    <div class="footer__right">
        <div class="footer-review">
                <h4>Оставить отзыв</h4>
                <form>
                    <textarea rows="10" cols="50" maxlength="300" placeholder="Ваш отзыв..."></textarea>
                    <br>
                        <button type="submit">Отправить</button>
                </form>
        </div>
        <div class="footer-load">
                <p id="footer-load__text"></p>
        </div>
    </div>
</footer>
        `;
    }
}

customElements.define('shop-footer', ShopFooter);
