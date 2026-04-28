const thumbMediaQuery = window.matchMedia('(min-width: 768px)');
let detailItemSlider = null;
let detailItemSliderThumb = null;

function initSliders() {
    if (detailItemSlider) detailItemSlider.destroy();
    if (detailItemSliderThumb) detailItemSliderThumb.destroy();
    detailItemSliderThumb = null;

    // const slidesCount = document.querySelectorAll('.detail-item-slider .swiper-slide').length;

    if (thumbMediaQuery.matches) {
        detailItemSliderThumb = new Swiper('.detail-item-slider__thumb', {
            spaceBetween: 8,
            // slidesPerView: 5,
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesProgress: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        });
    }

    detailItemSlider = new Swiper('.detail-item-slider', {
        slidesPerView: 1.05,
        spaceBetween: 2,
        navigation: {
            nextEl: '.detail-item-slider__next',
            prevEl: '.detail-item-slider__prev',
        },
        breakpoints: {
            768: { slidesPerView: 1 },
        },
        ...(detailItemSliderThumb ? { thumbs: { swiper: detailItemSliderThumb } } : {}),
    });
}

initSliders();
thumbMediaQuery.addEventListener('change', initSliders);

document.querySelectorAll('.detail-item-text').forEach((block) => {
    const toggle = block.nextElementSibling;
    if (!toggle) return;

    const maxHeight = 192;

    if (block.scrollHeight > maxHeight) {
        block.classList.add('is-collapsible', 'is-collapsed');

        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const collapsed = block.classList.toggle('is-collapsed');
            toggle.textContent = collapsed ? 'Развернуть' : 'Свернуть';
        });
    }
});
