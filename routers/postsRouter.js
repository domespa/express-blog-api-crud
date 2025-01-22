// Create un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
// All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

const express = require('express')
const postController = require("../controllers/postController")
const router = express.Router()

// Index 
router.get("/", postController.index);

// Show
router.get("/:id", postController.show);

// Store
router.post("/", postController.store);

// Update 
router.put("/:id", postController.update);

// Modify
router.patch("/:id", postController.modify);

// Delete
router.delete("/:id", postController.destroy);

module.exports = router