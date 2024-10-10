// db.js
const mysql = require("mysql2")

// Criar a conexão com o banco de dados
const db = mysql.createConnection({
  host: "localhost", // Substitua pelo host do seu MySQL
  user: "seu_usuario", // Substitua pelo usuário do seu MySQL
  password: "sua_senha", // Substitua pela senha do seu MySQL
  database: "nome_do_banco", // O nome do banco de dados
})

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err)
  } else {
    console.log("Conectado ao banco de dados MySQL!")
  }
})

module.exports = db
