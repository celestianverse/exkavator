const { src, dest, watch, series, parallel } = require('gulp');
const sass         = require('gulp-sass')(require('sass'));
const cleanCSS     = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const terser       = require('gulp-terser');
const concat       = require('gulp-concat');
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');
const browserSync  = require('browser-sync').create();
const del          = require('del');

process.on('unhandledRejection', (err) => {
  console.error('UnhandledRejection:', err);
  if (err?.errors?.length) {
    console.error('AggregateError errors:', err.errors);
  }
  process.exitCode = 1;
});

process.on('uncaughtException', (err) => {
  console.error('UncaughtException:', err);
  process.exit(1);
});

// Пути
const paths = {
  html: {
    src:  'src/html/**/*.html',
    dest: 'dist/'
  },
  styles: {
    src:   'src/scss/main.scss',
    watch: 'src/scss/**/*.scss',
    dest:  'dist/css/'
  },
  scripts: {
    src:  'src/js/*.js',
    dest: 'dist/js/'
  },
  pageScripts: {
    src:  'src/js/pages/*.js',
    dest: 'dist/js/'
  },
  images: {
    src:  'src/img/**/*.{png,jpg,jpeg,svg}',
    dest: 'dist/img/'
  },
  videos: {
    src:  'src/videos/**/*.mp4',
    dest: 'dist/videos/'
  },
  fonts: {
    src:  'src/fonts/**/*.{woff,woff2}',
    dest: 'dist/fonts/'
  },
  vendors: {
    src:  'src/vendors/**/*',
    dest: 'dist/vendors/'
  }
};

// Обработка ошибок
function handleError(err) {
  console.error(err.message);
  this.emit('end');
}

// Очистка dist/
function clean() {
  return del(['dist']);
}

// HTML 
function html() {
  return src(paths.html.src)
    .pipe(newer(paths.html.dest))
    .pipe(dest(paths.html.dest));
}

// CSS - автопрефиксы, минификация
function styles() {
  return src(paths.styles.src)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', handleError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({ level: 1 }))
    .pipe(dest(paths.styles.dest));
}

// JS - конкатенация, минификация
function scripts() {
  return src(paths.scripts.src)
    .pipe(concat('main.min.js'))
    .pipe(terser({ mangle: false }))
    .on('error', handleError)
    .pipe(dest(paths.scripts.dest));
}

// JS страниц — минификация без конкатенации
function pageScripts() {
  return src(paths.pageScripts.src)
    .pipe(terser({ mangle: false }))
    .on('error', handleError)
    .pipe(dest(paths.pageScripts.dest));
}

// Сжатие картинок
function images() {
  return src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 })
    ]))
    .pipe(dest(paths.images.dest));
}

// Копирование видео
function videos() {
  return src(paths.videos.src)
    .pipe(newer(paths.videos.dest))
    .pipe(dest(paths.videos.dest));
}

// Копирование шрифтов
function fonts() {
  return src(paths.fonts.src)
    .pipe(newer(paths.fonts.dest))
    .pipe(dest(paths.fonts.dest));
}

// Копирование vendors (без минификации)
function vendors() {
  return src(paths.vendors.src)
    .pipe(newer(paths.vendors.dest))
    .pipe(dest(paths.vendors.dest));
}

// Слежение за файлами
function watchFiles(done) {
  watch(paths.html.src, html);
  watch(paths.styles.watch, styles);
  watch(paths.scripts.src, scripts);
  watch(paths.pageScripts.src, pageScripts);
  watch(paths.images.src, images);
  watch(paths.videos.src, videos);
  watch(paths.fonts.src, fonts);
  watch(paths.vendors.src, vendors);
  done();
}

// Сборка
const buildAll = parallel(html, styles, scripts, pageScripts, images, videos, fonts, vendors);

// dev
exports.default = series(clean, buildAll, watchFiles);
exports.watch = series(clean, buildAll, watchFiles);

// build
exports.build = series(clean, buildAll);

exports.clean = clean;
