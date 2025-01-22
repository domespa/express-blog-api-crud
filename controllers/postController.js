const postsData = require("../data/postsData")

// Index
const index = (req, res) => { 
    res.json(postsData)
};

// Show
const show = (req, res) => { 
    res.json(`Dettaglio del post: ${req.params.id}`)
};

// Store 
const store = (req, res) => {
    res.send("Creazione nuovo post")
};

// Update 
const update = (req, res) => {
    res.send(`Modifica totale del post: ${req.params.id}`)
};

// Modify
const modify = (req, res) => {
    res.send(`Modifica parziale del post: ${req.params.id}`)
};

// Delete
const destroy = (req, res) => {
    res.send(`Eliminazione del post: ${req.params.id}`)
};

module.exports = { index, show, store, update, modify, destroy};