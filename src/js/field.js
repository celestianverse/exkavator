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