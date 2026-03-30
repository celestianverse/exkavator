const body = document.querySelector('body');

const dropdownConfigs = [
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

];

initPageDropdowns(dropdownConfigs);
initDropdowns('.item-card__show-buttons-wrap');
initDropdowns('.filter__dropdown-button');

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
    const filterInputsSelector = '.field-text__input, .field-dropdown__input';

    const updateFilterFilledState = () => {
        const hasValue = Array.from(filter.querySelectorAll(filterInputsSelector))
            .some((input) => input.value.trim() !== '');

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
