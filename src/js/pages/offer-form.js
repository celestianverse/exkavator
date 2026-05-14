// Размещение объявления

const offerForm = document.querySelector('#offer-form');

if (offerForm) {

    function setActiveButton(buttons, activeValue) {
        buttons.forEach((btn) => {
            const isActive = btn.dataset.value === activeValue;

            btn.classList.toggle('button--primary-alt', isActive);
            btn.classList.toggle('button--regular', !isActive);
        });
    }

    function updateOperatingHoursState() {
        const operatingType = document.querySelector('#operating-type');
        const operatingHours = document.querySelector('#operating-hours');

        if (!operatingType || !operatingHours) return;

        const shouldDisable =
            operatingType.value === 'is_new' ||
            operatingType.value === 'dont_know';

        operatingHours.disabled = shouldDisable;

        if (shouldDisable) {
            operatingHours.value = '';

            operatingHours.dispatchEvent(new Event('input', { bubbles: true }));
            operatingHours.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    function selectDropdownOption(input, value) {
        const container = input.closest('.field-dropdown');
        if (!container) return;

        const option = container.querySelector(
            '.dropdown-backdrop__option[data-value="' + value + '"]'
        );

        if (!option) return;

        container
            .querySelector('.dropdown-backdrop__option.selected')
            ?.classList.remove('selected');

        option.classList.add('selected');

        input.value = option.textContent.trim();
        input.dataset.value = value;

        container.classList.add('selected');

        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    }

    document.querySelectorAll('.offer-form__item').forEach((item) => {

        const input = item.querySelector('input');
        const textarea = item.querySelector('.field-textarea__input');
        const buttons = item.querySelectorAll('button[data-value]');
        const descriptionButtons = item.querySelectorAll('button[data-description]');
        const clearBtn = item.querySelector('.field-textarea__clear');

        if (input && buttons.length) {
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    const value = button.dataset.value;

                    if (input.classList.contains('field-text__input')) {
                        input.value = value;
                        updateOperatingHoursState();
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                    }

                    if (input.classList.contains('field-dropdown__input')) {
                        selectDropdownOption(input, value);
                    }

                    setActiveButton(buttons, value);
                });
            });

            if (input.classList.contains('field-text__input')) {
                input.addEventListener('input', () => {
                    setActiveButton(buttons, input.value);
                });
            }

            if (input.classList.contains('field-dropdown__input')) {
                input.addEventListener('change', () => {
                    setActiveButton(buttons, input.dataset.value);
                });
            }
        }

        if (textarea && descriptionButtons.length) {
            descriptionButtons.forEach((button) => {
                button.addEventListener('click', () => {

                    const text = button.dataset.description;
                    const isActive = button.classList.contains('button--primary-alt');

                    button.classList.toggle('button--primary-alt');
                    button.classList.toggle('button--regular');

                    if (!isActive) {
                        if (!textarea.value.includes(text)) {
                            textarea.value = (textarea.value + ' ' + text).trim();
                        }
                    } else {
                        textarea.value = textarea.value
                            .replace(text, '')
                            .replace(/\s{2,}/g, ' ')
                            .trim();
                    }

                    textarea.dispatchEvent(new Event('input', { bubbles: true }));
                    textarea.dispatchEvent(new Event('change', { bubbles: true }));
                });
            });

            if (clearBtn) {
                clearBtn.addEventListener('click', () => {

                    descriptionButtons.forEach((btn) => {
                        btn.classList.remove('button--primary-alt');
                        btn.classList.add('button--regular');
                    });

                });
            }
        }
    });
}

// Подсчёт прогресса заполнения

if (offerForm) {
    const completionItems = document.querySelectorAll('.offer-completion__item');
    const progressNumber = document.querySelector('.progress-circle__number');
    const progressCircle = document.querySelector('.progress-circle__progress');

    const circleLength = 226.195;

    function isInputFilled(input) {
        if (!input) return false;

        if (input.tagName === 'TEXTAREA') {
            return input.value.trim() !== '';
        }

        if (input.classList.contains('field-dropdown__input')) {
            return !!input.dataset.value;
        }

        return input.value.trim() !== '';
    }

    function updateCompletion() {
        let activeCount = 0;

        completionItems.forEach((item) => {
            const inputId = item.dataset.input;

            if (!inputId) return;

            const input = document.querySelector('#' + inputId);

            const isFilled = isInputFilled(input);

            item.classList.toggle('offer-completion__item--active', isFilled);

            if (isFilled) {
                activeCount++;
            }
        });

        const total = completionItems.length;
        const percent = Math.round((activeCount / total) * 100);

        if (progressNumber) {
            progressNumber.textContent = percent + '%';
        }

        if (progressCircle) {
            const offset = circleLength - (circleLength * percent / 100);

            progressCircle.style.strokeDashoffset = offset;
        }
    }

    offerForm.querySelectorAll('input, textarea, select').forEach((field) => {
        field.addEventListener('input', updateCompletion);
        field.addEventListener('change', updateCompletion);
    });

    updateCompletion();
}

// Добавление и удаление города

if (offerForm) {
    const addButton = document.querySelector('[data-add-city]');

    function getNextPlaceNumber() {
        const inputs = document.querySelectorAll('input[name^="place-"]');

        let max = 1;

        inputs.forEach((input) => {
            const number = parseInt(input.name.replace('place-', ''));

            if (number > max) {
                max = number;
            }
        });

        return max + 1;
    }

    // Добавление
    addButton.addEventListener('click', () => {
        const number = getNextPlaceNumber();

        const block = document.createElement('div');

        block.className = 'row row--4 row--nowrap';

        block.innerHTML = `
            <div class="field-text field--nocaption">
              <input 
                class="field-text__input"
                type="text"
                placeholder="Регион, город, населенный пункт"
                name="place-${number}"
                id="place-${number}"
                autocomplete="off"
                required
              />
            
              <label class="field-text__label" for="place-${number}">
                <span class="field-text__caption">
                  Регион, город, населенный пункт
                </span>
              </label>
            
              <button class="field-text__clear" aria-label="Очистить" type="button">
                <svg class="icon icon--16">
                  <use xlink:href="img/sprites/sprite-16.svg#clearAlt"></use>
                </svg>
              </button>
            </div>
            
            <button
              class="button button--primary-alt button--no-body button--large"
              type="button"
              data-remove-city
            >
              <svg class="icon">
                <use xlink:href="img/sprites/sprite-16.svg#deleteAlt"></use>
              </svg>
            </button>
        `;

        addButton.before(block);
    });

    // Удаление
    document.addEventListener('click', (event) => {
        const removeButton = event.target.closest('[data-remove-city]');

        if (!removeButton) return;

        removeButton.closest('.row--4').remove();
    });
}