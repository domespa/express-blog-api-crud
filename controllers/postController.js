const postsData = require("../data/postsData")

// Index
const index = (req, res) => { 
    res.json(postsData)
};

// Show
const show = (req, res) => { 
    const post = postsData.find((elm) => elm.id == req.params.id)
    //res.json(`Dettaglio del post: ${req.params.id}`)//
    if (!post) {
        return res.status(404).json ({ // BONUS
            error:"Post not found"
        });
    }
    res.json(post);
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
    //res.send(`Eliminazione del post: ${req.params.id}`)//
    const post = postsData.find((elm) => elm.id == req.params.id);

    if (!post) {
        return res.status(404).json ({ // BONUS
            error:"Post not found"
        });
    }
    postsData.splice(postsData.indexOf(post), 1);
    res.json({
        error: `${post.title} has been deleted (RIP)`
    });
};

module.exports = { index, show, store, update, modify, destroy};