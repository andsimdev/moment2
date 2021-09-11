// Funktion för att välja fjällbakgrunden
function mountains() {
    // Ändra källan för bakgrundsbilden
    document.body.style.backgroundImage = "url('/images/mountains.jpg')";

    // Ändra färgen på huvudrubriken
    heroh1El.style.color = "white";

    // Ändra färgen på texten i inforutan
    for (let i = 0; i < infotextEl.length; i++) {
        infotextEl[i].style.color = "white";
    }
}

// Funktion för att välja gräsbakgrunden
function grass() {
    // Ändra källan för bakgrundsbilden
    document.body.style.backgroundImage = "url('/images/grass.jpg')";

    // Ändra färgen på huvudrubriken
    heroh1El.style.color = "black";

    // Ändra färgen på texten i inforutan
    for (let i = 0; i < infotextEl.length; i++) {
        infotextEl[i].style.color = "black";
    }
}

// Funktion för att välja dimmbakgrunden
function fog() {
    // Ändra källan för bakgrundsbilden
    document.body.style.backgroundImage = "url('/images/fog.jpg')";

    // Ändra färgen på huvudrubriken
    heroh1El.style.color = "black";

    // Ändra färgen på texten i inforutan
    for (let i = 0; i < infotextEl.length; i++) {
        infotextEl[i].style.color = "black";
    }
}

// Funktion för att välja havsbakgrunden
function ocean() {
    // Ändra källan för bakgrundsbilden
    document.body.style.backgroundImage = "url('/images/ocean.jpg')";

    // Ändra färgen på huvudrubriken
    heroh1El.style.color = "black";

    // Ändra färgen på texten i inforutan
    for (let i = 0; i < infotextEl.length; i++) {
        infotextEl[i].style.color = "white";
    }
}