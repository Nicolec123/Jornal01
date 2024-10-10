document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Enviar dados para o back-end
    fetch("/enviar-mensagem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Mensagem enviada com sucesso!")
        } else {
          alert("Erro ao enviar a mensagem.")
        }
      })
      .catch((error) => {
        console.error("Erro:", error)
        alert("Erro ao enviar a mensagem.")
      })
  })
