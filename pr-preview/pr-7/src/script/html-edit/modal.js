function initModal() {

    $("#modal-custom").iziModal({
        overlayClose: false,                    // Отключение закрытия модального окна при клике вне области действия
        overlayColor: 'rgba(0, 0, 0, 0.6)',     // Цвет области за модальным окном
        headerColor: "#EC6037",                 // Цвет заголовка модального окна
    });

    // Логика для смены активной формы. Замена классов hide и active у элементов
    $("#modal-custom").on('click', 'header a', function (event) {
        event.preventDefault();

        // Определение индекса выбранной формы
        var index = $(this).index();

        // Активирование выбранной формы
        $(this).addClass('active').siblings('a').removeClass('active');

        // Изменение классов hide для скрытие и раскрытия нужных форм
        $(this).parents("div").find("form").eq(index).removeClass('hide').siblings('form').addClass('hide');
    });

    $("#modal-custom").on('click', '.submit', function (event) {
        event.preventDefault();

        var isValid = true;
        var $form = $(this).closest('form');  // Поиск формы, связанной с нажатием кнопки

        $form.find('.error-message').hide();  // Скрытие всех сообщений об ошибках перед валидацией

        $form.find('input[required]').each(function () {
            if (!$(this).val()) {
                isValid = false;

                // Отображение ошибки, если поле не заполнено
                $(this).closest('.form-group').find('.error-message').show();
            }
        });

        // Проверка, что пользователь согласился с правилами при регистрации
        if ($form.attr('id') === 'signup-form') {
            var $checkbox = $form.find('input[type="checkbox"]');
            if (!$checkbox.is(':checked')) {
                isValid = false;

                // Отображение ошибки, если поле не заполнено
                $checkbox.closest('.form-group').find('.error-message').show();
            }
        }

        if (!isValid) {
            // Добавление анимации при невалидной форме.
            var fx = "wobble",
                $modal = $(this).closest('.iziModal');

            if (!$modal.hasClass(fx)) {
                $modal.addClass(fx);
                setTimeout(function () {
                    $modal.removeClass(fx);
                }, 1500);
            }
        } else {
            // Обработка валидных данных
            console.log("Success!");
            $("#modal-custom").iziModal("close");
            window.open(`${root}/src/pages/account.html`, "_self");
        }
    });
}

$(document).ready(function () {
    $.get(`${root}/src/pages/modal.html`, function (data) {
        $('.page-wrapper').append(data);
        initModal();
    });
});
