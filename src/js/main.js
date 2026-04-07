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
];

initPageDropdowns(dropdownConfigs);

// Header
const userControlsMobileButton  = document.querySelector('.user-controls__mobile-button');
const showHeaderSearchButton  = document.querySelector('.js-header-search');
const headerSearch = document.querySelector('.main-header-search');

if(userControlsMobileButton) {
    userControlsMobileButton.addEventListener('click', function () {
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
        headerSearchInput.focus();
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
            spaceBetween: 12,
        },
        700: {
            slidesPerView: 1.8,
        },
        768: {
            slidesPerView: 3,
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
// document.querySelectorAll('input[type="tel"]').forEach(function (input) {
//     IMask(input, {
//         mask: '+{7} (000) 000-00-00',
//         lazy: false,
//         placeholderChar: '_'
//     });
// });

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
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
    });
}