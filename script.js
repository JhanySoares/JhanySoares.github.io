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

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const assunto = 'Mensagem de Contato';

    const corpoEmail = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`;

    window.location.href = `mailto:jnsds.25@gmail.com?subject=${assunto}&body=${encodeURIComponent(corpoEmail)}`;
});
