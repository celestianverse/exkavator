const videosGrid = document.querySelector(".main-videos__grid");

const videos = [
    {
        image: "img/news/news-7.jpg",
        video: "https://vkvideo.ru/video_ext.php?oid=-19065351&id=456239230&hash=fbe3d6b440bc3484&hd=4&autoplay=1",
        title: "Запчасти на маркетплейсе: заказать и не прогадать. Спецпроект Grenar",
        date: "23.02.2026",
        tag: "# Подкасты Экскаватор Ру",
        link: "#"
    },
    {
        image: "img/news/news-8.jpg",
        video: "https://vkvideo.ru/video_ext.php?oid=-19065351&id=456239061&hash=62f73a9fcc80e3f1&hd=3&autoplay=1",
        title: "Спецтехника и запчасти UMG теперь доступны на Ozon, Wildberries и собственной цифровой платформе",
        date: "23.02.2026",
        tag: "# Новости Экскаватор Ру",
        link: "#"
    },
    {
        image: "img/news/news-9.jpg",
        video: "https://vkvideo.ru/video_ext.php?oid=-19065351&id=456239230&hash=fbe3d6b440bc3484&hd=4&autoplay=1",
        title: "Увеличенные высота выгрузки и производительность: компания «Спецтехника» представила мини-погрузчики LONKING",
        date: "23.02.2026",
        tag: "# Обзор Экскаватор Ру",
        link: "#"
    },
    {
        image: "img/news/news-10.jpg",
        video: "https://vkvideo.ru/video_ext.php?oid=-19065351&id=456239061&hash=62f73a9fcc80e3f1&hd=3&autoplay=1",
        title: "Запчасти на маркетплейсе: заказать и не прогадать. Спецпроект Grenar",
        date: "23.02.2026",
        tag: "# Подкасты Экскаватор Ру",
        link: "#"
    },
    {
        image: "img/news/news-11.jpg",
        video: "https://vkvideo.ru/video_ext.php?oid=-19065351&id=456239230&hash=fbe3d6b440bc3484&hd=4&autoplay=1",
        title: "Спецтехника и запчасти UMG теперь доступны на Ozon, Wildberries и собственной цифровой платформе",
        date: "23.02.2026",
        tag: "# Новости Экскаватор Ру",
        link: "#"
    },
    {
        image: "img/news/news-12.jpg",
        video: "https://vkvideo.ru/video_ext.php?oid=-19065351&id=456239061&hash=62f73a9fcc80e3f1&hd=3&autoplay=1",
        title: "Увеличенные высота выгрузки и производительность: компания «Спецтехника» представила мини-погрузчики LONKING",
        date: "23.02.2026",
        tag: "# Обзор Экскаватор Ру",
        link: "#"
    },
];

// перемешивание
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let shuffled = shuffle([...videos]);
let currentIndex = 0;

function getCurrentVideos() {
    return [
        shuffled[currentIndex % shuffled.length],
        shuffled[(currentIndex + 1) % shuffled.length],
        shuffled[(currentIndex + 2) % shuffled.length]
    ];
}

function createSmallCard(video, index) {
    return `
      <div class="card card--s">
        <button type="button" class="card__cover card__play" data-index="${index}">
          <img src="${video.image}" alt="${video.title}" class="card__image">
          <div class="card__play-icon">
            <svg class="icon icon--32">
              <use xlink:href="img/sprites/sprite-16.svg#play"></use>
            </svg>
        </div>
        </button>
        <div class="card__body">
          <a href="${video.link}" class="card__title text text--l text--600">${video.title}</a>
          <p class="text text--s text--secondary">${video.date}</p>
        </div>
      </div>
    `;
}

function render() {
    const [main, second, third] = getCurrentVideos();

    if (!main || !second || !third) return;

    videosGrid.innerHTML = `
      <div class="main-videos__card card card--xl">
        <div class="card__cover">
          <iframe class="card__video" src="${main.video}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="card__body">
          <a href="${main.link}" class="card__title title title--m">${main.title}</a>
          <p class="text text--s text--secondary">${main.date}</p>
          <span class="chip chip--small chip--white">${main.tag}</span>
        </div>
      </div>

      <div class="main-videos__column">
        ${createSmallCard(second, 1)}
        ${createSmallCard(third, 2)}
      </div>
    `;
}

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".card__play");
    if (!btn) return;

    const index = +btn.dataset.index;
    if (!index) return;

    // просто смещаем индекс на кликнутый элемент
    currentIndex = (currentIndex + index) % shuffled.length;

    render();

    const target = document.getElementById("main-videos");
    if (target) {
        const y = target.getBoundingClientRect().top + window.pageYOffset - 68;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    }
});

render();
