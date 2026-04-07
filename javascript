// Slider de imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slider .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos
showSlide(currentSlide);

// Formulário de contato
const form = document.getElementById('formContato');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    form.reset();
});
