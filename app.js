const express = require('express')
const app = express()
const port = 3002
const postsRouter = require("./routers/postsRouter.js")


app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Server del mio Blog')
})

app.get("/bacheca", (req, res) => {
    res.json(posts)
})

// Registrare il router dentro app.js con il prefisso posts/
app.use("/posts", postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})