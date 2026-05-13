document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.main-videos__grid');

    if (!grid) return;

    let cards = Array.from(grid.querySelectorAll('.card'));

    cards.sort(() => Math.random() - 0.5);

    render(cards);

    grid.addEventListener('click', (e) => {
        const playButton = e.target.closest('.card__play');

        if (!playButton) return;

        const clickedCard = playButton.closest('.card');

        if (!clickedCard) return;

        const currentCards = Array.from(grid.querySelectorAll('.card'));

        const clickedIndex = currentCards.indexOf(clickedCard);

        if (clickedIndex === -1) return;

        const newOrder = [
            ...currentCards.slice(clickedIndex),
            ...currentCards.slice(0, clickedIndex)
        ];

        render(newOrder);
    });

    function render(cardsArray) {
        grid.innerHTML = '';

        cardsArray.forEach((card, index) => {
            card.classList.remove('card--xl');
            card.classList.add('card--s');

            if (index === 0) {
                card.classList.remove('card--s');
                card.classList.add('card--xl');
            }

            grid.appendChild(card);
        });
    }
});