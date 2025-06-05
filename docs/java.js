//Evento al dar CLICK en ordenar esta
document.querySelectorAll('.cta-boton').forEach(boton => {
    boton.addEventListener('click', () => {
        alert('¡Gracias por tu interés! Serás redirigido a WhatsApp.');
    });
});

//Cambiar texto motivacional
const fraseTexto = document.getElementById('frasetexto');
const frases = [
    "La salud es la mayor riqueza.",
    "Cada pequeño paso cuenta.",
    "Cuida tu cuerpo, es tu templo.",
    "Nutrirte bien es amarte más.",
];
let index = 0;
setInterval(() => {
    fraseTexto.textContent = frases[index];
    index = (index + 1) % frases.length;
}, 6000);