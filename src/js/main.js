const body = document.querySelector('body');

// debounce
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const dropdownConfigs = [
    {
        id: 'city',
        hasSearch: true,
        options: [
            { name: 'Любой', value: '' },
            { name: 'Астрахань', value: 'Astrakhan' },
            { name: 'Архангельск', value: 'Arkhangelsk' },
            { name: 'Барнаул', value: 'Barnaul' },
            { name: 'Белгород', value: 'Belgorod' },
            { name: 'Владивосток', value: 'Vladivostok' },
            { name: 'Волгоград', value: 'Volgograd' },
            { name: 'Вологда', value: 'Vologda' },
            { name: 'Воронеж', value: 'Voronezh' },
            { name: 'Екатеринбург', value: 'Yekaterinburg' },
            { name: 'Ижевск', value: 'Izhevsk' },
            { name: 'Иркутск', value: 'Irkutsk' },
            { name: 'Казань', value: 'Kazan' },
            { name: 'Калининград', value: 'Kaliningrad' },
            { name: 'Кемерово', value: 'Kemerovo' },
            { name: 'Киров', value: 'Kirov' },
            { name: 'Краснодар', value: 'Krasnodar' },
            { name: 'Красноярск', value: 'Krasnoyarsk' },
            { name: 'Курск', value: 'Kursk' },
            { name: 'Липецк', value: 'Lipetsk' },
            { name: 'Махачкала', value: 'Makhachkala' },
            { name: 'Москва', value: 'Moscow' },
            { name: 'Набережные Челны', value: 'Naberezhnye Chelny' },
            { name: 'Нижний Новгород', value: 'Nizhny Novgorod' },
            { name: 'Новосибирск', value: 'Novosibirsk' },
            { name: 'Омск', value: 'Omsk' },
            { name: 'Оренбург', value: 'Orenburg' },
            { name: 'Пенза', value: 'Penza' },
            { name: 'Пермь', value: 'Perm' },
            { name: 'Ростов-на-Дону', value: 'Rostov-on-Don' },
            { name: 'Рязань', value: 'Ryazan' },
            { name: 'Самара', value: 'Samara' },
            { name: 'Санкт-Петербург', value: 'Saint Petersburg' },
            { name: 'Саратов', value: 'Saratov' },
            { name: 'Сочи', value: 'Sochi' },
            { name: 'Ставрополь', value: 'Stavropol' },
            { name: 'Сургут', value: 'Surgut' },
            { name: 'Тольятти', value: 'Tolyatti' },
            { name: 'Томск', value: 'Tomsk' },
            { name: 'Тула', value: 'Tula' },
            { name: 'Тюмень', value: 'Tyumen' },
            { name: 'Ульяновск', value: 'Ulyanovsk' },
            { name: 'Уфа', value: 'Ufa' },
            { name: 'Хабаровск', value: 'Khabarovsk' },
            { name: 'Чебоксары', value: 'Cheboksary' },
            { name: 'Челябинск', value: 'Chelyabinsk' },
            { name: 'Ярославль', value: 'Yaroslavl' }
        ]
    },
    {
        id: 'type',
        hasSearch: true,
        options: [
            { name: 'все типы', value: '' },
            { name: 'Раздел тип технки 1', isTitle: true },
            { name: 'Тягачи седельные', value: 'tyagachi' },
            { name: 'Прицепы-тяжеловозы', value: 'pritsepy' },
            { name: 'Терминальные тягачи', value: 'terminal-tyagachi' },
            { name: 'Экскаваторы гусеничные', value: 'excavator-gus' },
            { name: 'Раздел тип технки 2', isTitle: true },
            { name: 'Натяжные машины', value: 'natyazhnye' },
            { name: 'Тип техники 22', value: 'tt22' },
            { name: 'Тип техники 23', value: 'tt23' },
            { name: 'Тип техники 24', value: 'tt34' },
            { name: 'Тип техники 25', value: 'tt222' },
        ]
    },
    {
        id: 'brand',
        hasSearch: true,
        options: [
            { name: 'все марки', value: '' },
            { name: 'Землеройная техника', isTitle: true },
            { name: 'Грейдеры', value: 'graders' },
            { name: 'Земснаряды', value: 'zemsnarjady' },
            { name: 'Экскаваторы колесные', value: 'excavator-kol' },
            { name: 'Строительное оборудование', isTitle: true },
            { name: 'оборудование 1', value: 'oborud-1' },
            { name: 'оборудование 2', value: 'oborud-2' },
            { name: 'оборудование 3', value: 'oborud-3' },
        ]
    },
    {
        id: 'model',
        hasSearch: true,
        options: [
            { name: 'все модели', value: '' },
            { name: 'модель 2', value: 'model-2' },
            { name: 'модель 3', value: 'model-3' },
            { name: 'модель 4', value: 'model-4' },
            { name: 'модель 6', value: 'model-5' },
            { name: 'модель 7', value: 'model-6' },
            { name: 'модель 8', value: 'model-7' },
        ]
    },
    {
        id: 'wear',
        hasSearch: false,
        options: [
            { name: 'Любые', value: '' },
            { name: 'Новые', value: 'new' },
            { name: 'Б/У', value: 'used' },
        ]
    },
    {
        id: 'availability',
        hasSearch: false,
        options: [
            { name: 'Любые', value: '' },
            { name: 'Доступные', value: 'available' },
            { name: 'Недоступные', value: 'not-available' },
        ]
    },
    {
        id: 'weight-from',
        hasSearch: false,
        options: [
            { name: 'Любая', value: 'weight-from-all' },
            { name: '0', value: 'weight-from-0' },
            { name: '1', value: 'weight-from-1' },
            { name: '2', value: 'weight-from-2' },
            { name: '3', value: 'weight-from-3' },
            { name: '4', value: 'weight-from-4' },
        ]
    },
    {
        id: 'weight-to',
        hasSearch: false,
        options: [
            { name: 'Любая', value: 'weight-to-all' },
            { name: '1', value: 'weight-to-1' },
            { name: '2', value: 'weight-to-2' },
            { name: '3', value: 'weight-to-3' },
            { name: '4', value: 'weight-to-4' },
            { name: '5', value: 'weight-to-5' },
        ]
    },
    {
        id: 'volume-from',
        hasSearch: false,
        options: [
            { name: 'Любой', value: 'volume-from-all' },
            { name: '0', value: 'volume-from-0' },
            { name: '1', value: 'volume-from-1' },
            { name: '2', value: 'volume-from-2' },
            { name: '3', value: 'volume-from-3' },
            { name: '4', value: 'volume-from-4' },
        ]
    },
    {
        id: 'volume-to',
        hasSearch: false,
        options: [
            { name: 'Любой', value: 'volume-to-all' },
            { name: '1', value: 'volume-to-1' },
            { name: '2', value: 'volume-to-2' },
            { name: '3', value: 'volume-to-3' },
            { name: '4', value: 'volume-to-4' },
            { name: '5', value: 'volume-to-5' },
        ]
    },
    {
        id: 'attachments',
        hasSearch: false,
        options: [
            { name: 'Любое', value: 'attachments-all' },
            { name: 'Ковш', value: 'bucket' },
            { name: 'Гидромолот', value: 'hydraulic-breaker' },
            { name: 'Грейфер', value: 'grapple' },
            { name: 'Бур', value: 'auger' },
        ]
    },
    {
        id: 'company-specialization',
        hasSearch: false,
        options: [
            { name: 'Поставщики спецтехники', value: 'company-all' },
            { name: 'Поставщики запчастей и комплектующих', value: 'company-equipment-suppliers' },
            { name: 'Арендные компании', value: 'company-rental' },
            { name: 'Земляные работы', value: 'company-earthworks' },
            { name: 'Курсы экскаваторщиков, крановщиков', value: 'company-excavator-courses' },
            { name: 'Лизинг спецтехники', value: 'company-leasing' },
            { name: 'Перевозка спецтехники (строительной', value: 'company-transportation' },
            { name: 'Снос зданий (демонтаж)', value: 'company-demolition' },
            { name: 'Ремонт спецтехники', value: 'company-repair' },
            { name: 'Справочник официальных дилеров', value: 'company-directory' },
        ]
    },
    {
        id: 'landlord',
        hasSearch: false,
        options: [
            { name: 'Все арендодатели', value: '' },
            { name: 'Организации', value: 'organization' },
            { name: 'Частные лица', value: 'personal' },
        ]
    },
    {
        id: 'topic',
        hasSearch: true,
        options: [
            { name: 'все рубрики', value: '' },
            { name: 'Рубрика 1', value: 'topic1' },
            { name: 'Рубрика 2', value: 'topic2' },
            { name: 'Рубрика 3', value: 'topic3' },
            { name: 'Рубрика 5', value: 'topic4' },
        ]
    },
    {
        id: 'category',
        hasSearch: true,
        options: [
            { name: 'все категории', value: '' },
            { name: 'Категория 1', value: 'category1' },
            { name: 'Категория 2', value: 'category2' },
            { name: 'Категория 3', value: 'category3' },
            { name: 'Категория 5', value: 'category4' },
        ]
    },
    {
        id: 'manufacture',
        hasSearch: true,
        options: [
            { name: 'все производители', value: '' },
            { name: 'Производитель 1', value: 'man1' },
            { name: 'Производитель 2', value: 'man2' },
            { name: 'Производитель 3', value: 'man3' },
            { name: 'Производитель 5', value: 'man4' },
        ]
    },
];

initPageDropdowns(dropdownConfigs);
initDropdowns('.detail-item-mobile-footer__more');
initDropdowns('.price-block--dropdown');
initDropdowns('.item-card__show-buttons-wrap');
initDropdowns('.filter__dropdown-button');

// Header
const userControlsMobileButton  = document.querySelector('.user-controls__mobile-button');
const userControlsAccountButton  = document.querySelector('.user-controls__account-button > .user-controls__button');
const showHeaderSearchButton  = document.querySelector('.js-header-search');
const headerSearch = document.querySelector('.main-header-search');

if(userControlsMobileButton) {
    userControlsMobileButton.addEventListener('click', function () {
        this.classList.toggle('is-open');
    });
}
if(userControlsAccountButton) {
    userControlsAccountButton.addEventListener('click', function () {
        this.classList.toggle('is-open');
    });
}

// поиск в header
if (headerSearch) {    
    const headerSearchInput = headerSearch.querySelector('.main-header-search__input');
    const headerSearchControls = headerSearch.querySelector('.main-header-search__controls');
    const headerSearchReset = headerSearch.querySelector('.main-header-search__reset');
    const headerSearchSubmit = headerSearch.querySelector('.main-header-search__submit');

    showHeaderSearchButton.addEventListener('click', function (e) {
        e.stopPropagation();
        headerSearch.classList.toggle('is-show');
        userControlsMobileButton.classList.remove('is-open');
        headerSearchInput.focus();

        const headerTooltip = document.querySelector('.tooltip');
        headerTooltip.classList.remove('is-active');
    });

    headerSearchInput.addEventListener('input', function(e) {
        headerSearchControls.classList.toggle('show', e.target.value.length > 0);
    });

    headerSearchReset.addEventListener('click', function() {
        headerSearchInput.value = '';
        headerSearchControls.classList.remove('show');
    });

    headerSearchSubmit.addEventListener('click', function() {
        console.log(headerSearchInput.value);
    });
}


// слайдеры
const specialOffersSlider = new Swiper('.special-offers__slider', {
    slidesPerView: 1.15,
    spaceBetween: 8,
    navigation: {
        nextEl: '.special-offers__next',
        prevEl: '.special-offers__prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 1.6,
            spaceBetween: 8,
        },
        700: {
            slidesPerView: 1.8,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
    }
});
const interviewsSlider = new Swiper('.interviews-slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        prevEl: '.interviews-slider__prev',
        nextEl: '.interviews-slider__next',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    }
});

const chipsSlider = new Swiper('.chips-slider__slider', {
    slidesPerView: 'auto',
    spaceBetween: 6,
    navigation: {
        nextEl: '.chips-slider__next',
        prevEl: '.chips-slider__prev',
    },
});

const companiesSlider = new Swiper('.companies__slider', {
    slidesPerView: 2.8,
    spaceBetween: 8,
    navigation: {
        nextEl: '.companies__next',
        prevEl: '.companies__prev',
    },
    breakpoints: {
        400: { slidesPerView: 3.2 },
        440: { slidesPerView: 3.6 },
        480: { slidesPerView: 3.8 },
        540: { slidesPerView: 4.3 },
        600: { slidesPerView: 4.7 },
        660: { slidesPerView: 5.3 },
        768: { slidesPerView: 6 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 7 },
        1440: { slidesPerView: 8 },
    }
});

// item-card-more: показать/свернуть
document.querySelectorAll('.item-card-more').forEach(block => {
    const button = block.querySelector('.item-card-more__button');
    const items = block.querySelectorAll('.item-card-more__item');
    if (!button || items.length <= 2) {
        if (button) button.style.display = 'none';
        return;
    }

    const defaultText = button.textContent;

    button.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = block.classList.toggle('is-open');
        button.textContent = isOpen ? 'Свернуть' : defaultText;
    });
});

// футер
const currentYear = document.querySelector('.main-footer__current-year');
if (currentYear) {
    currentYear.innerHTML = new Date().getFullYear();
}


// клик аутсайд
const clickOutsideTargets = [
    { selector: '.user-controls__mobile-button', stateClass: 'is-open' },
    { selector: '.field-dropdown', stateClass: 'is-open' },
    { selector: '.sorting', stateClass: 'is-open' },
    { selector: '.detail-item-mobile-footer__more', stateClass: 'is-open' },
    { selector: '.filter__dropdown-button', stateClass: 'is-open' },
    { selector: '.item-card__show-buttons-wrap', stateClass: 'is-open' },
    { selector: '.price-block--dropdown', stateClass: 'is-open' },
    { selector: '.main-header-search', stateClass: 'is-show', ignore: '.js-header-search' },
    { selector: '.contact-sticky-block__nav', stateClass: 'is-open' },    
];

document.addEventListener('click', (e) => {
    clickOutsideTargets.forEach(({ selector, stateClass, ignore }) => {
        if (e.target.closest(selector)) return;
        if (ignore && e.target.closest(ignore)) return;
        document.querySelectorAll(selector).forEach(el => el.classList.remove(stateClass));
    });
});

// Тултипы
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

const TOOLTIP_GAP = 6;

document.querySelectorAll('[data-tooltip-text]').forEach(el => {
    el.addEventListener('mouseenter', () => {
        tooltip.textContent = el.dataset.tooltipText;
        tooltip.classList.add('is-active');

        const rect = el.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        let top = rect.top - tooltipRect.height - TOOLTIP_GAP;

        if (top < 0) {
            top = rect.bottom + TOOLTIP_GAP;
        }

        let left = rect.left + (rect.width - tooltipRect.width) / 2;
        left = Math.max(4, Math.min(left, window.innerWidth - tooltipRect.width - 4));

        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';
    });

    el.addEventListener('mouseleave', () => {
        tooltip.classList.remove('is-active');
    });
});

const contactNav = document.querySelector('.contact-sticky-block__nav');
if (contactNav) {
    contactNav.addEventListener('click', (e) => {
        if (window.innerWidth >= 1024) return;
        if (e.target.closest('.dropdown-backdrop')) return;
        e.preventDefault();
        contactNav.classList.toggle('is-open');
    });
}

// Маска телефона (iMask)
document.addEventListener('focusin', (e) => {
    const input = e.target.closest('input[type="tel"]');
    if (!input) return;

    // чтобы не инициализировать повторно
    if (input.dataset.maskInit) return;

    IMask(input, {
        mask: '+{7} (000) 000-00-00',
        lazy: false,
        placeholderChar: '_'
    });

    input.dataset.maskInit = 'true';
});

const forms = document.querySelectorAll('.form-validation');

forms.forEach(form => {
    const submitBtn = form.querySelector('.form-send');
    const requiredCheckbox = form.querySelector('.required-checkbox');
    const requiredInputs = form.querySelectorAll('[required]');

    if (!submitBtn) return;

    function validateForm() {
        let isValid = true;

        requiredInputs.forEach(input => {
            const field = input.closest('.field-text');
            const errorEl = field ? field.querySelector('.field-text__error') : null;

            let hasError = false;
            let errorText = '';

            if (!input.value.trim()) {
                hasError = true;
            }

            if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(input.value)) {
                    hasError = true;
                    errorText = 'Введите корректный email';
                }
            }

            if (hasError) {
                isValid = false;

                if (field) field.classList.add('field-text--error');

                if (errorEl && errorText) {
                    errorEl.textContent = errorText;
                }
            } else {
                if (field) field.classList.remove('field-text--error');

                if (errorEl) {
                    errorEl.textContent = '';
                }
            }
        });

        const isCheckboxChecked = requiredCheckbox ? requiredCheckbox.checked : true;

        submitBtn.disabled = !(isValid && isCheckboxChecked);
    }

    // debounce версия
    const debouncedValidate = debounce(validateForm, 500);

    form.addEventListener('input', debouncedValidate);
    form.addEventListener('change', validateForm);

    validateForm();
});


const lightGalleryList = document.querySelector('#lightgallery');

if (lightGalleryList) {
    lightGallery(lightGalleryList, {
        plugins: [lgZoom, lgThumbnail, lgVideo],
        speed: 500,
        download: false,
    });
}

document.addEventListener('pointerdown', (e) => {
    const target = e.target.closest('[data-favorite-id]');
    const targetTooltip = e.target.closest('[data-tooltip-text]');
    if (!target) return;

    const id = target.dataset.favoriteId;
    const allControls = document.querySelectorAll(`[data-favorite-id="${id}"]`);

    const isFavorite = target.dataset.favorite === 'true';
    const newState = !isFavorite;

    allControls.forEach((el) => {
        el.dataset.favorite = String(newState);

        // КНОПКА
        if (el.tagName === 'BUTTON') {
            const iconUse = el.querySelector('use');
            const svg = el.querySelector('.icon');

            if (iconUse && svg) {
                if (newState) {
                    iconUse.setAttribute('xlink:href', 'img/sprites/sprite-20.svg#favoriteFilled');
                    svg.classList.add('icon--red');
                    el.dataset.tooltipText = 'Удалить из избранного';
                    el.setAttribute('aria-label', 'Удалить из избранного');
                } else {
                    iconUse.setAttribute('xlink:href', 'img/sprites/sprite-20.svg#favorite');
                    svg.classList.remove('icon--red');
                    el.dataset.tooltipText = 'Добавить в избранное';
                    el.setAttribute('aria-label', 'Добавить в избранное');
                }

                if (targetTooltip) {
                    el.dispatchEvent(new Event('mouseenter'));
                }
            }
        }

        // DROPDOWN
        if (el.classList.contains('dropdown-backdrop__option-button')) {
            el.textContent = newState
                ? 'Удалить из избранного'
                : 'Добавить в избранное';
        }
    });
});

// Фильтры

const filter = document.querySelector('.filter');
const filterMoreButton = document.querySelector('.filter__more-button');

if (filterMoreButton) {
    filterMoreButton.addEventListener('click', () => {
        if (!filter) return;

        filter.classList.add('filter--opened');
        body.classList.add('scroll-lock');
    });
}

const filterExtraButton = document.querySelector('.filter__extra-button');
const filterExtraButtonText = document.querySelector('.filter__extra-button span');

const extraHandler = () => {
    if (filter.classList.contains('filter--hidden-extra')) {
        filter.classList.remove('filter--hidden-extra');

        if (filterExtraButtonText) {
            filterExtraButtonText.textContent = 'Скрыть дополнительные параметры';
        }
    } else {
        filter.classList.add('filter--hidden-extra');

        if (filterExtraButtonText) {
            filterExtraButtonText.textContent = 'Дополнительные параметры';
        }
    }
};

if (filterExtraButton) {
    filterExtraButton.addEventListener('click', () => {
        const filter = filterExtraButton.closest('.filter');
        if (!filter) return;

        extraHandler();
    });
}

if (filter) {
    const filterInputsSelector = '.field-text__input, .field-dropdown__input, .field-checkbox__input';

    const updateFilterFilledState = () => {
        const hasValue = Array.from(filter.querySelectorAll(filterInputsSelector))
            .some((input) => {
                if (input.type === 'checkbox') {
                    return input.checked;
                }
                return input.value.trim() !== '';
            });

        filter.classList.toggle('filter--filled', hasValue);
    };

    filter.addEventListener('input', updateFilterFilledState);
    filter.addEventListener('change', updateFilterFilledState);

    filter.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown-backdrop__option')) return;
        requestAnimationFrame(updateFilterFilledState);
    });

    updateFilterFilledState();
}

const clearHandler = (clearButton) => {
    const filter = clearButton.closest('.filter');
    if (!filter) return;

    filter.classList.add('filter--hidden-extra');
    if (filterExtraButtonText) {
        filterExtraButtonText.textContent = 'Дополнительные параметры';
    }

    filter.classList.remove('filter--opened');
    body.classList.remove('scroll-lock');

    // 1. Очищаем обычные input'ы
    filter.querySelectorAll('.field-text__input').forEach(input => {
        input.value = '';
    });

    // 2. Очищаем dropdown'ы
    filter.querySelectorAll('.field-dropdown').forEach(container => {
        const input = container.querySelector('.field-dropdown__input');
        if (!input) return;

        // сброс значения
        input.value = '';
        input.dataset.value = '';

        // убираем выбранную опцию
        container.querySelector('.dropdown-backdrop__option.selected')
            ?.classList.remove('selected');

        // убираем состояние selected у контейнера
        container.classList.remove('selected');

        // сбрасываем поиск внутри dropdown
        resetDropdownSearch(container);
    });

    // 3. Чекбоксы
    filter.querySelectorAll('.field-checkbox__input').forEach(cb => {
        cb.checked = false;
    });

    // 4. Специальная логика для model (зависимость от brand)
    const modelContainer = filter.querySelector('#model')?.closest('.field-dropdown');
    const modelInput = filter.querySelector('#model');

    if (modelContainer && modelInput) {
        modelContainer.classList.add('disabled');
        modelInput.disabled = true;
    }

    // 5. Триггерим обновление состояния filter--filled
    filter.dispatchEvent(new Event('input', { bubbles: true }));
    filter.dispatchEvent(new Event('change', { bubbles: true }));
};

document.addEventListener('click', (e) => {
    const clearButton = e.target.closest('[data-filter-clear].filter__clear-button');
    if (!clearButton) return;

    clearHandler(clearButton);
});

document.addEventListener('click', (e) => {
    const clearButton = e.target.closest('[data-filter-clear].filter__header-link');
    if (!clearButton) return;

    clearHandler(clearButton);
});

document.addEventListener('pointerdown', (e) => {
    const clearButton = e.target.closest('.filter__dropdown-button [data-filter-clear]');
    if (!clearButton) return;

    clearHandler(clearButton);
});

document.addEventListener('click', (e) => {
    const closeButton = e.target.closest('[data-filter-close].filter__header-link');
    if (!closeButton) return;

    filter.classList.remove('filter--opened');
    body.classList.remove('scroll-lock');
});

document.addEventListener('pointerdown', (e) => {
    const closeButton = e.target.closest('.filter__dropdown-button [data-filter-close]');
    if (!closeButton) return;

    filter.classList.remove('filter--opened');
    body.classList.remove('scroll-lock');
});

const typeInput = document.querySelector('#type');

if (typeInput && filter) {
    const handleTypeChange = () => {
        const brandContainer = filter.querySelector('#brand')?.closest('.field-dropdown');
        const brandInput = filter.querySelector('#brand');

        const modelContainer = filter.querySelector('#model')?.closest('.field-dropdown');
        const modelInput = filter.querySelector('#model');

        // --- Очищаем brand ---
        if (brandContainer && brandInput) {
            brandInput.value = '';
            brandInput.dataset.value = '';

            brandContainer.querySelector('.dropdown-backdrop__option.selected')
                ?.classList.remove('selected');

            brandContainer.classList.remove('selected');

            resetDropdownSearch(brandContainer);
        }

        // --- Очищаем и дизейблим model ---
        if (modelContainer && modelInput) {
            modelInput.value = '';
            modelInput.dataset.value = '';

            modelContainer.querySelector('.dropdown-backdrop__option.selected')
                ?.classList.remove('selected');

            modelContainer.classList.remove('selected');

            modelContainer.classList.add('disabled');
            modelInput.disabled = true;

            resetDropdownSearch(modelContainer);
        }

        // обновляем состояние filter--filled
        filter.dispatchEvent(new Event('input', { bubbles: true }));
        filter.dispatchEvent(new Event('change', { bubbles: true }));
    };

    // 1. При обычном вводе
    typeInput.addEventListener('change', handleTypeChange);

    // 2. При выборе из dropdown
    filter.addEventListener('click', (event) => {
        if (!event.target.closest('#type')) return;
        if (!event.target.closest('.dropdown-backdrop__option')) return;

        requestAnimationFrame(handleTypeChange);
    });
}