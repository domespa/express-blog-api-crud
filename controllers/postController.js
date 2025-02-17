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
    const newId = postsData[postsData.length -1].id + 1
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    postsData.push(newPost)


    res.status(201).json(newPost);
};

// Update 
const update = (req, res) => {
    const post = postsData.find((elm) => elm.id == req.params.id); 
    if (!post) {
        res.status(404);

        return res.json({ 
            error:"Post not found",
        });
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;


    res.json(post);
};

// Modify
const modify = (req, res) => {
    const post = postsData.find((elm) => elm.id == req.params.id); 
    if (!post) {
        res.status(404);

        return res.json({ 
            error:"Post not found",
        });
    }

    post.title = req.body.title || post.title; 
    post.content = req.body.content || post.content;
    post.image = req.body.image || post.image;
    post.tags = req.body.tags || post.tags;


    res.json(post);
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