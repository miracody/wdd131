// Footer: Current Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static Weather Data (Metric Units for Angola)
const temperature = 28; // °C
const windSpeed = 10; // km/h

// Wind Chill Calculation Function
function calculateWindChill(t, v) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  ).toFixed(1);
}

// Display Wind Chill if Conditions Are Met
const windChillElement = document.getElementById("windchill-factor");
const temperatureElement = document.getElementById("temperature-info");
const windSpeedElement = document.getElementById("wind-speed");

temperatureElement.textContent = `${temperature} °C`;
windSpeedElement.textContent = `${windSpeed} km/h`;

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}
