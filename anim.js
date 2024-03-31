var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
    {text: "Ya no importa cada noche que esperé", time: 3},
    {text: "Cada calle o laberinto que crucé", time: 8},
    {text: "Porque el cielo ha conspirado en mi favor", time: 12},
    {text: "y a un segundo de rendirme TE ENCONTRÉ", time: 17},
    {text: "Piel con Piel", time: 22},
    {text: "El corazón se me desarma", time: 23},
    {text: "ME HACES BIEN", time: 25},
    {text: "Enciendes luces en mi alma", time: 27},
    {text: "CREO EN TÍ", time: 30},
    {text: "Y en este amor", time: 32},
    {text: "Que me vuelve INDESTRUCTIBLE", time: 35},
    {text: "Qué detuvo mi caida libre", time: 38},
    {text: "CREO EN TÍ", time: 42},
    {text: "Y mi dolor", time: 44},
    {text: "SE QUEDÓ KILOMETROS ATRÁS", time: 46},
    {text: "Tantas cosas para agradecerte, gordita", time: 50},
    {text: "Te amo hasta el cielo", time: 55},
    {text: "Ida y vuelta", time: 58},
    {text: "A pasito de...", time: 61},
    {text: "Pingüinito bebé 😘", time: 65},
];

function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
    );
    
    if (currentLine) {
        var fadeInDuration = 0.1;
        var opacity = Math.min(1,(time - currentLine.time) / fadeInDuration);

        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation =
      "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
  
  setTimeout(ocultarTitulo, 10000);