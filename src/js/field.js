document.querySelectorAll('.field-text').forEach((field) => {
  const input = field.querySelector('.field-text__input');
  const clearButton = field.querySelector('.field-text__clear');

  if (!input || !clearButton) return;

  clearButton.addEventListener('click', () => {
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
  });
});
document.querySelectorAll('.field-textarea').forEach((field) => {
  const input = field.querySelector('.field-textarea__input');
  const clearButton = field.querySelector('.field-textarea__clear');

  if (!input || !clearButton) return;

  clearButton.addEventListener('click', () => {
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
  });
});
document.addEventListener('click', (e) => {
  const button = e.target.closest('[data-clear]');
  if (!button) return;

  const inputId = button.dataset.clear;
  const input = document.getElementById(inputId);

  if (input) {
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }
});