const express = require("express")
const nodemailer = require("nodemailer")
const mysql = require("mysql2")

const app = express()
app.use(express.json())

// Configuração do banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sua_senha",
  database: "seu_banco_de_dados",
})

// Rota para receber os dados do formulário
app.post("/enviar-mensagem", (req, res) => {
  const { name, email, message } = req.body

  // Salvar no banco de dados
  const query = "INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)"
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ success: false })
    }

    // Configurar transporte de email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "danielefloripa42@gmail.com", // Seu email
        pass: "sua_senha_de_email", // Senha do email
      },
    })

    // Opções do email
    const mailOptions = {
      from: email,
      to: "danielefloripa42@gmail.com",
      subject: "Nova mensagem de contato",
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    }

    // Enviar o email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error)
        return res.status(500).json({ success: false })
      }
      res.json({ success: true })
    })
  })
})

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})
