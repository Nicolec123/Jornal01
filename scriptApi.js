// script.js
//api de noticias
async function fetchLatestNews() {
  try {
    const response = await fetch("/api/news") // Chama o endpoint do seu backend
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    updateNewsSection(data)
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error)
  }
}

function updateNewsSection(data) {
  // Implementar a lógica para atualizar o DOM com as notícias
}

// Chama a função para buscar e exibir as notícias
fetchLatestNews()
///////////////////////////////////////////////////////////////

//api de tradução Libre Translate
document
  .getElementById("tradutorForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault()

    const texto = document.getElementById("texto").value
    const idiomaOrigem = document.getElementById("idiomaOrigem").value
    const idiomaDestino = document.getElementById("idiomaDestino").value

    try {
      const resultado = await traduzirTexto(texto, idiomaOrigem, idiomaDestino)
      document.getElementById("resultado").textContent = resultado
    } catch (error) {
      console.error("Erro:", error)
      document.getElementById("resultado").textContent = "Erro na tradução."
    }
  })

async function traduzirTexto(texto, idiomaOrigem, idiomaDestino) {
  const response = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: texto,
      source: idiomaOrigem,
      target: idiomaDestino,
      format: "text",
    }),
  })

  if (!response.ok) {
    throw new Error("Erro na tradução: " + response.statusText)
  }

  const data = await response.json()
  return data.translatedText
}
