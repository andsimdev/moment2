// Hämta in Gulp och nödvändiga metoder
const {src, dest, parallel, series, watch} = require('gulp');

// Hämta in paketet Gulp-concat (för att slå ihop filer)
const concat = require('gulp-concat');

// Hämta in paketet Gulp-terser (för att minifiera JS-filer)
const terser = require('gulp-terser');

// Hämta in paketet Gulp-cssnano (för att minifiera CSS-filer)
const cssnano = require('gulp-cssnano');

// Hämta in paketet Imagemin (för att komprimera bildfiler)
const imagemin = require('gulp-imagemin');

// Hämta in paketet BrowserSync för att kunna förhandsvisa i webbläsaren
const browserSync = require('browser-sync').create();

// Definiera sökvägar för HTML-filer, CSS-filer, JavaScript-filer och bilder
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*"
}

// Task för att kopiera alla existerande HTML-filer i src-mappen till pub-mappen
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

// Task för att kopiera alla CSS-filer till pub-mappen, samt slå ihop CSS-filerna till en och minifiera den
function copyCSS() {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(cssnano())
    .pipe(dest('pub/css'));
}

// Task för att kopiera alla JavaScript-filer till pub-mappen, samt slå ihop JS-filerna till en och minifiera den
function copyJS() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(dest('pub/js'));
}

// Task för att kopiera alla bilder till pub-mappen
function copyImages() {
    return src(files.imagePath)
    .pipe(imagemin())
    .pipe(dest('pub/images'));
}

// Task för att lyssna efter förändringar i källkodsfiler
function watchTask() {

    // Initiera BrowserSync
    browserSync.init({
        server: "./pub"
    });

    // Lyssna efter förändringar i källkodsfiler, i så fall kör "publiceringsfunktioner" samt ladda om BrowserSync
    watch([files.htmlPath, files.cssPath, files.jsPath, files.imagePath], parallel(copyHTML, copyCSS, copyJS, copyImages)).on('change', browserSync.reload);
}

// Exportera funktionen för att kopiera HTML-filer till Gulp-default
exports.default = series(
    parallel(copyHTML, copyCSS, copyJS, copyImages),
    watchTask
    );