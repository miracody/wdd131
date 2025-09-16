document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temp = 24;
const wind = 12;

function calculateWindChill(t, s) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

const chill = (temp <= 10 && wind > 4.8) ? calculateWindChill(temp, wind).toFixed(1) + " °C" : "N/A";
document.getElementById("chill").textContent = chill;
