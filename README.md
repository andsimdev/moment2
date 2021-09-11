# Moment 2 i DT173G (Webbutveckling III)

## Syfte med automatiseringsprocessen
Syftet med att skapa en automatiserad utvecklingsmiljö är att göra det enklare och snabbare att köra processer som annars hade tagit mycket tid att genomföra manuellt. Till exempel att minifiera filer och komprimera bilder automatiskt.

## Paket och verktyg som använts
* Gulp-concat, används för att sammanslå CSS- och JavaScript-filer
* Gulp-terser, används för att minifiera JavaScript-filer
* Gulp-cssnano, används för att minifiera CSS-filer
* Gulp-imagemin, används för att komprimera bilder
* BrowserSync, används för att testköra publiceringskatalogen i webbläsaren
* Gulp-sourcemaps, används för att kunna spåra i vilka CSS- eller JavaScriptkällkodsfiler en viss regel finns

## Beskrivning
Utvecklingsmiljön använder automatisering med hjälp av NodeJS, Gulp och flertalet npm-paket. För att initiera utvecklingsmiljön krävs att NodeJS och npm finns installerat på datorn. Sedan installeras först Gulp genom att i projektets katalog öppna en terminal och skriva `
