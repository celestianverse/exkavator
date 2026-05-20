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
            slidesPerView: 5,
            watchSlidesProgress: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            // Добавляем обработчик клика
            on: {
                click: function (swiper) {
                    // swiper.clickedIndex — это глобальный индекс слайда, по которому кликнули
                    // swiper.activeIndex — индекс первого видимого слайда слева
                    const clickedIndex = swiper.clickedIndex;
                    const activeIndex = swiper.activeIndex;
                    const slidesPerView = swiper.params.slidesPerView; // в вашем случае это 5

                    // Если кликнули по слайду, индекс которого равен первому видимому
                    if (clickedIndex === activeIndex) {
                        swiper.slidePrev();
                    }

                    // Если кликнули по последнему видимому слайду
                    // (например, первый видимый 0, а кликнули по 0 + 5 - 1 = 4)
                    if (clickedIndex === activeIndex + slidesPerView - 1) {
                        swiper.slideNext();
                    }
                }
            }
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
        on: {
            slideChange: () => {
                document.querySelectorAll('.swiper iframe').forEach((iframe) => {
                    iframe.src = iframe.src;
                });

                // ДОПОЛНИТЕЛЬНО: Если основной слайдер перелистывают стрелками
                // или свайпом, превьюшки тоже должны центрироваться/докручиваться
                if (detailItemSliderThumb && detailItemSliderThumb.initialized) {
                    const activeIdx = detailItemSlider.activeIndex;
                    const thumbActiveIdx = detailItemSliderThumb.activeIndex;
                    const thumbSlidesPerView = detailItemSliderThumb.params.slidesPerView;

                    // Если основной слайд ушел дальше, чем видно в превью
                    if (activeIdx >= thumbActiveIdx + thumbSlidesPerView) {
                        detailItemSliderThumb.slideNext();
                    }
                    // Если основной слайд вернулся назад, за пределы видимости превью
                    if (activeIdx < thumbActiveIdx) {
                        detailItemSliderThumb.slidePrev();
                    }
                }
            }
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
