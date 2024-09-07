// scripts.js
function mostrarCarta(tipo) {
    const cartas = {
        aburrida: "Hola, hermosa. Sé que estás aburrida, pero recuerda que cada momento es una oportunidad para descubrir algo nuevo. ¡Te reto a hacer algo diferente hoy! ❤️",
        triste: "Lamento que te sientas así. Quiero que sepas que aquí estoy para ti, y aunque no puedo abrazarte físicamente ahora, siempre puedes contar conmigo. Eres increíble, nunca lo olvides.",
        enojadaConmigo: "Sé que he cometido errores y lo lamento. Mi intención nunca es lastimarte. Te prometo que haré lo mejor para que te sientas amada y comprendida.",
        molestaConFamilia: "Entiendo que las cosas con la familia pueden ser difíciles a veces. Tómate tu tiempo y recuerda que está bien sentir lo que sientes. Estoy contigo.",
        motivarte: "Eres capaz de lograr todo lo que te propongas. Hoy puede ser difícil, pero recuerda todas las veces que has superado cosas complicadas. ¡Tú puedes! 💪",
        feliz: "Me encanta verte feliz, tu sonrisa ilumina mi día. Sigue brillando como lo haces siempre. Eres mi sol. ☀️",
        recuerdasAmor: "Te amo más de lo que las palabras pueden expresar. Cada día contigo es un regalo y siempre quiero que recuerdes eso.",
        abrazo: "Cierra los ojos e imagina que te estoy abrazando fuerte. Estoy aquí, contigo, en pensamiento y corazón. ❤️"
    };

    document.getElementById("contenidoCarta").innerText = cartas[tipo];
    document.getElementById("modalCarta").style.display = "block";
}

function cerrarCarta() {
    document.getElementById("modalCarta").style.display = "none";
}
