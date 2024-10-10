const express = require("express")
var bodyParser = require("body-parser")
const path = require("path")
const app = express()
const db = require("./db") //conexão com o banco de dados

app.use(bodyParser.json()) // Suporte a JSON
app.use(
  bodyParser.urlencoded({
    extended: true, // Suporte a dados URL-encoded
  })
)

app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")
app.use("/public", express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "/pages"))

// Rota principal
app.get("/", (req, res) => {
  if (req.query.busca == null) {
    res.render("home", {}) // Renderiza a página home
  } else {
    res.send("Você buscou: " + req.query.busca)
  }
})

// Rota para a página "Sobre"
app.get("/sobre", (req, res) => {
  res.render("sobre", {}) // Renderiza a página sobre.html
})

// Rota para a página "Contato"
app.get("/contato", (req, res) => {
  res.render("contato", {}) // Renderiza a página contato.html
})

// Rota para a página "Assine"
app.get("/assine", (req, res) => {
  res.render("Assine", {}) // Renderiza a página contato.html
})

// Rota para a página "login"
app.get("/login", (req, res) => {
  res.render("login", {}) // Renderiza a página contato.html
})

// Rota para a página "Acesso_funcionario"
app.get("/acess_restrict", (req, res) => {
  res.render("Acess_restrict", {}) // Renderiza a página contato.html
})

// Rota dinâmica para qualquer slug
app.get("/:slug", (req, res) => {
  res.send("Você acessou a página: " + req.params.slug) // Exibe o slug na URL
})

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000!")
})
