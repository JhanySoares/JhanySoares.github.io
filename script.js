function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function updateClock() {
    const clockDisplay = document.getElementById("clockDisplay");
    const now = new Date();
    const options = { timeZone: "America/Sao_Paulo", hour: "numeric", minute: "numeric" };
    const timeString = now.toLocaleString("pt-BR", options);
    clockDisplay.textContent = timeString;
}

setInterval(updateClock, 1000);
