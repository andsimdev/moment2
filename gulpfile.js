// Hämta in Gulp och nödvändiga metoder
const {src, dest, parallel, series, watch} = require('gulp');

// Hämta in paketet Gulp-concat (för att slå ihop filer)
const concat = require('gulp-concat');

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

// Task för att kopiera alla CSS-filer till pub-mappen, samt slå ihop CSS-filerna
function copyCSS() {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(dest('pub/css'));
}

// Task för att kopiera alla JavaScript-filer till pub-mappen
function copyJS() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(dest('pub/js'));
}

// Task för att kopiera alla bilder till pub-mappen
function copyImages() {
    return src(files.imagePath)
    .pipe(dest('pub/images'));
}

// Task för att lyssna efter förändringar i källkodsfiler
function watchTask() {
    watch([files.htmlPath, files.cssPath, files.jsPath, files.imagePath], parallel(copyHTML, copyCSS, copyJS, copyImages));
}

// Exportera funktionen för att kopiera HTML-filer till Gulp-default
exports.default = series(
    parallel(copyHTML, copyCSS, copyJS, copyImages),
    watchTask
    );