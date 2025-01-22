// Create un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
// All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

const express = require('express')
const router = express.Router()

// Index 
router.get("/", (req, res) => { // BONUS
    res.json("Lista dei post")
})

// Show
router.get("/:id", (req, res) => { // BONUS
    res.json(`Dettaglio del post: ${req.params.id}`)
})

// Store
router.post("/", (req, res) => {
    res.send("Creazione nuovo post")
})

// Update 
router.put("/:id", (req, res) => {
    res.send(`Modifica totale del post: ${req.params.id}`)
})

// Modify
router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post: ${req.params.id}`)
})

// Delete
router.delete("/:id", (req, res) => {
    res.send(`Eliminazione del post: ${req.params.id}`)
})

module.exports = router