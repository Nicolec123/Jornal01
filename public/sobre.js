//Carrossel

let currentIndex = 0
const images = document.querySelectorAll(".carrossel-item")
const totalImages = images.length

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages
  updateCarrossel()
})

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages
  updateCarrossel()
})

function updateCarrossel() {
  const offset = -currentIndex * 100 // Calcula a posição do carrossel
  document.querySelector(
    ".carrossel-img"
  ).style.transform = `translateX(${offset}%)`
}
