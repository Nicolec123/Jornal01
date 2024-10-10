let currentIndex = 0
const carrosselImages = document.querySelectorAll(".carrossel .img-destaque")

function showSlide(index) {
  if (index >= carrosselImages.length) {
    currentIndex = 0
  } else if (index < 0) {
    currentIndex = carrosselImages.length - 1
  } else {
    currentIndex = index
  }

  const offset = -currentIndex * 100
  carrosselImages.forEach((img) => {
    img.style.transform = `translateX(${offset}%)`
  })
}

document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentIndex + 1)
})

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentIndex - 1)
})

showSlide(currentIndex)
