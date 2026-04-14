const body = document.querySelector('body');

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