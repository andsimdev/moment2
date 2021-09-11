// Hämta in Gulp och nödvändiga metoder
const {src, dest} = require('gulp');

// Definiera sökvägar
const files = {
    htmlPath: "src/**/*.html"
}

// Task för att kopiera alla existerande HTML-filer i src-mappen till pub-mappen
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

// Exportera funktionen för att kopiera HTML-filer till Gulp-default
exports.default = copyHTML;