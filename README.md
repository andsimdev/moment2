# Moment 2 i DT173G (Webbutveckling III)

## Syfte med automatiseringsprocessen
Syftet med att skapa en automatiserad utvecklingsmiljö är att göra det enklare och snabbare att köra processer som annars hade tagit mycket tid att genomföra manuellt. Till exempel att minifiera filer och komprimera bilder automatiskt.

## Paket och verktyg som använts
* __Gulp-concat__, används för att sammanslå CSS- och JavaScript-filer
* __Gulp-terser__, används för att minifiera JavaScript-filer
* __Gulp-cssnano__, används för att minifiera CSS-filer
* __Gulp-imagemin__, används för att komprimera bilder
* __BrowserSync__, används för att testköra publiceringskatalogen i webbläsaren
* __Gulp-sourcemaps__, används för att kunna spåra i vilka CSS- eller JavaScriptkällkodsfiler en viss regel finns

## Beskrivning
Utvecklingsmiljön använder automatisering med hjälp av NodeJS, Gulp och flertalet npm-paket. För att initiera utvecklingsmiljön krävs att NodeJS och npm finns installerat på datorn. Sedan installeras först Gulp globalt på datorn för att kunna användas överallt på datorn genom terminalen. Detta görs genom att öppna ett terminalfönster och skriva `npm install gulp-cli -g`

Därefter öppnas en projektkatalog på datorn, och här initieras sedan ett nytt npm-projekt med hjälp av terminalen genom att skriva `npm init -y` (snabbinitiering utan manuell inmatning av inställningar)


