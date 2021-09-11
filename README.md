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

*Ovanstående paket har valts dels därför att de förevisats som exempel under utbildningen men också för att de flesta har många nedladdningar regelbundet vilket tyder på pålitlig funktionalitet*

## Beskrivning/instruktion
Utvecklingsmiljön använder automatisering med hjälp av NodeJS, Gulp och flertalet npm-paket. För att initiera utvecklingsmiljön krävs att NodeJS och npm finns installerat på datorn. Sedan installeras först Gulp globalt på datorn för att kunna användas överallt på datorn genom terminalen. Detta görs genom att öppna ett terminalfönster och skriva `npm install gulp-cli -g`

Därefter öppnas en projektkatalog på datorn, och här initieras sedan ett nytt npm-projekt med hjälp av terminalen genom att skriva `npm init -y` (snabbinitiering utan manuell inmatning av inställningar)

Nu ska Gulp installeras lokalt att använda under utvecklingen genom att i terminalen i projektkatalogen skriva `npm install gulp --save-dev`

Filen "gulpfile.js" behöver finnas med i projektets rotkatalog för att automatiseringen ska fungera. Om versionshantering med ex. Git används rekommenderas att mappen "node_modules" ignoreras av versionshanteraren då denna innehåller många filer.

Genom att följa filstrukturen i detta repositoryt vid skapande av projektet så tillämpas automatiseringen och dess funktionalitet på projektet. Grunden är att alla källkodsfiler skapas i src-katalogen och de kommer sedan flyttas till pub-katalogen, vilka då blir de filer som är redo att publiceras publikt.

För att köra automatiseringen skrivs `gulp` i terminalen i projektkatalogen. Automatiseringen körs nu och fortsätter lyssna efter förändringar i källkodsfilerna, och kör sedan automatiskt igen om någon av dessa uppdateras. För att avsluta automatiseringen tryck `ctrl+c` i terminalen.

## Automatiseringen kommer att:
* Flytta alla HTML-filer från projektets rotkatalog till pub-katalogen.
* Slå ihop och minifiera alla CSS- respektive JavaScript-filer och döpa dessa till main.css respektive main.js (Spårning av källkodsfiler vid inspektion är fortfarande möjlig).
* Komprimera bilder som finns i katalogen images och flytta dessa till images-katalogen i pub-katalogen.
* Öppna ett webbläsarfönster och visa filerna i pub-katalogen, samt automatiskt uppdatera webbläsarfönstret vid uppdatering av någon källkodsfil.
