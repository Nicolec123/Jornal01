// server.js para protejer apis de noticias
import express from "express"
import fetch from "node-fetch"
const app = express()
const port = 3000

const apiKey = "mxr7KOod5EKbK3_8TuK0frOPz55Saar4_lPkO-fi6uj7MNLp"
const apiUrl =
  "https://api.currentsapi.services/v1/latest-news?language=en&apiKey="

app.get("/api/news", async (req, res) => {
  try {
    const response = await fetch(apiUrl + apiKey)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" })
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
