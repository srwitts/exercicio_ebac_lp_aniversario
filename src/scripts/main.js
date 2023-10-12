/* Scroll Reveal laterais */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.container-left',{delay: 100})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.container-right',{delay: 100})

/* Contador de Tempo */
const eventTime = new Date("Oct 20, 2023 20:00:00")
const timeStampEventTime = eventTime.getTime();
const countHours = setInterval(function() {
    const now = new Date();
    const timeStampCurrent = now.getTime();

    const distanceEvent = timeStampEventTime - timeStampCurrent;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMS = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const daysToEvent = Math.floor(distanceEvent / dayInMs);
    const hoursToEvent = Math.floor((distanceEvent % dayInMs) / hourInMS);
    const minutesToEvent = Math.floor((distanceEvent % (hourInMS)) / minuteInMs);
    const secondsToEvent = Math.floor((distanceEvent % minuteInMs) / 1000);

    document.getElementById('contador').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

    if (distanceEvent < 0) {
        clearInterval(countHours);
        document.getElementById('hero-text').innerHTML = 'O aniversário já passou :(';
    }
}, 1000);

/* Button abrir Mapa */

function openGoogleMaps() {
    let location = "https://www.google.com/maps?q=-23.282331,-46.722605";

    window.open(location, "_blank");
}