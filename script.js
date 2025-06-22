const slides = document.querySelectorAll('.slide')
let currentIndex = 0

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index)
  })
}

// Mostrar a primeira imagem
showSlide(currentIndex)

// Troca a imagem a cada 3 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length
  showSlide(currentIndex)
}, 3000)
