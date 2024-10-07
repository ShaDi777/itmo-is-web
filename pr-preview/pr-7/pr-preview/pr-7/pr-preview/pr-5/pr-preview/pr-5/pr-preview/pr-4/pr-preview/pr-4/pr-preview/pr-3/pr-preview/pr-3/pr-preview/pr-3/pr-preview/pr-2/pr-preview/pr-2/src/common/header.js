class ShopHeader extends HTMLElement {
    static get observedAttributes() {
        return ["root"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const root = this.getAttribute("root")
        this.innerHTML = `
<header class="header">

    <!-- BEGIN HEADER TOP -->
    <div class="header-top">

        <!-- BEGIN HEADER TOP LEFT -->
        <div class="header-top__left">
            <a class="header-logo" href="${root}/index.html">
                <img alt="SmartPulse" src="${root}/assets/smart_pulse_horizontal.svg">
            </a>
        </div>
        <!-- END HEADER TOP LEFT -->

        <!-- BEGIN HEADER TOP CENTER -->
        <div class="header-top__center">

            <!-- BEGIN NAVIGATION -->
            <nav class="header-nav">
                <ul class="header-nav__list">

                    <li class="header-nav__item">
                        <a itemprop="url" href="${root}/src/pages/delivery.html" class="header-nav__link">
                            <span>Доставка и оплата</span>
                        </a>
                    </li>

                    <li class="header-nav__item">
                        <a itemprop="url" href="${root}/src/pages/reviews.html" class="header-nav__link">
                            <span>Отзывы</span>
                        </a>
                    </li>

                    <li class="header-nav__item">
                        <a itemprop="url" href="${root}/src/pages/contacts.html" class="header-nav__link">
                            <span>Контакты</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- END NAVIGATION -->
        </div>
        <!-- END HEADER TOP CENTER -->

        <!-- BEGIN HEADER TOP RIGHT -->
        <div class="header-top__right">
            <!-- BEGIN LOGIN -->
            <a class="login__button" href="${root}/src/pages/account.html">
            <span class="login__icon">
                Личный кабинет
            </span>
            </a>
            <!-- LOGIN EOF -->
        </div>
        <!-- END HEADER TOP RIGHT -->

    </div>
    <!-- HEADER TOP EOF -->

    <!-- BEGIN HEADER BOTTOM -->
    <div class="header-bottom">

        <!-- BEGIN HEADER BOTTOM LEFT -->
        <div class="header-bottom__left">
            <a class="catalog__button" href="${root}/src/pages/catalog.html">
            <span class="catalog__icon">
                Каталог
            </span>
            </a>
        </div>
        
        <!-- END HEADER TOP LEFT -->

        <!-- BEGIN HEADER BOTTOM CENTER -->
        <div class="header-bottom__center">
            <div class="search-form">
                <form action="/catalog/" method="get" id="search">
                    <input type="text" name="search" placeholder="Поиск по сайту">
                    <input type="submit" value="Найти">
                </form>
            </div>
        </div>
        <!-- END HEADER BOTTOM CENTER -->

        <!-- BEGIN HEADER BOTTOM RIGHT -->
        <div class="header-bottom__right">
            <div class="header-cart">
                <a class="cart-button" href="${root}/src/pages/cart.html">
                <span class="cart-button__icon">
                    Корзина
                </span>
                </a>
            </div>
        </div>
        <!-- END HEADER BOTTOM RIGHT -->

    </div>
    <!-- END HEADER TOP -->
</header>
        `;
    }
}

customElements.define('shop-header', ShopHeader);
