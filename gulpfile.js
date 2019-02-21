var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglifyjs'),
    cssnano         = require('gulp-cssnano'),
    rename          = require('gulp-rename'),
    del             = require('del'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    cache           = require('gulp-cache'),
    autoprefixer    = require('gulp-autoprefixer');

/*  компиляция sass в css | добавление префиксов в css  */   
gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.+(sass|scss)')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7', {cascade: true}]))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

/*  сжатие css-файлов библиотек | добавление суффикса  */
gulp.task('css-libs', function() {
    return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
});

/*  сжатие js-файлов библиотек в один файл libs.min.js  */
gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

/*  запуск browser-sync (отключаю всплывающие уведомления)  */
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

/*  Удаление папки dist  */
gulp.task('clean', async function() {
    return del.sync('dist');
});

/*  Очистка кэша  */
gulp.task('clear', async function() {
    return cache.clearAll();
});

/*  Сжатие изображений  */
gulp.task('img', function() {
    return(gulp.src('app/img/**/*'))
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        une: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});

/*   Наблюдение за изменениями в файлах   */
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.+(sass|scss)', gulp.parallel('sass'));
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
});

/*  Компиляция кода  */
gulp.task('buildcode', async function() {
    var buildcss    = gulp.src(['app/css/*.css', 'app/css/libs.min.css']).pipe(gulp.dest('dist/css'));
    var buildfonts  = gulp.src(['app/fonts/**/*']).pipe(gulp.dest('dist/fonts'));
    var buildjs     = gulp.src('app/js/**/*').pipe(gulp.dest('dist/js'));
    var buildhtml   = gulp.src('app/*.html').pipe(gulp.dest('dist'));
});

/*  Таск на сборку  */
gulp.task('build', gulp.parallel('clean', 'buildcode', 'img'));

/*  Таск на режим разработки  */
gulp.task('dev', gulp.parallel('browser-sync', 'sass', 'css-libs', 'scripts', 'watch'));