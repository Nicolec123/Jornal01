document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidade para abrir links ao clicar
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault() // Prevenir o comportamento padrão de ancoragem
      const targetSection = document.querySelector(link.getAttribute("href"))

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        })
      } else {
        alert("Essa seção ainda não foi criada.")
      }
    })
  })

  // Funcionalidade de busca
  const searchForm = document.querySelector(".busca form")
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const query = document
      .querySelector('.busca input[type="text"]')
      .value.trim()
      .toLowerCase()

    if (query) {
      // Fazer a busca (essa é uma busca simples, sem back-end por enquanto)
      const sections = document.querySelectorAll("section")
      let found = false

      sections.forEach((section) => {
        if (section.innerText.toLowerCase().includes(query)) {
          section.scrollIntoView({ behavior: "smooth" })
          found = true
        }
      })

      if (!found) {
        alert("Nenhum resultado encontrado.")
      }
    } else {
      alert("Por favor, insira um termo de busca.")
    }
  })

  // Funcionalidade para abrir matéria ao clicar nas imagens de "Mais Lidas"
  const popularImages = document.querySelectorAll(".popular-news img")
  popularImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      // Por enquanto, uma rota genérica até que as páginas das matérias sejam criadas
      alert(`Abrindo matéria para imagem ${index + 1} (rota genérica)`)
      window.location.href = `/materia/${index + 1}` // URL genérica para cada matéria
    })
  })
})
