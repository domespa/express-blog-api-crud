const postsData = require("../data/postsData")

// Index
const index = (req, res) => { 
    let postsFiltered = postsData;
    const { tag } = req.query;
    if (tag) {
        postsFiltered = postsFiltered.filter((post) => 
            post.tags.includes(tag))
    }
    res.json(postsFiltered)
};

// Show
const show = (req, res) => { 
    const {id} = req.params;

    const post = postsData.find((elm) => elm.id == id)
    if (!post) {
        return res.status(404).json ({ // BONUS
            error:"Post not found"
        });
    }
    res.json(post);
};

// Store 
const store = (req, res) => {
    console.log(req.body);
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
    const {id} = req.params;

    const post = postsData.findIndex((elm) => elm.id == id);

    if (post < 0 ) {
        return res.status(404).json ({ 
            error:"Post not found"
        });
    }
    postsData.splice(post, 1);
    res.json({
        error: `${post.title} has been deleted (RIP)`
    });
};

module.exports = { index, show, store, update, modify, destroy};