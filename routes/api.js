const routes = require("express").Router()
const Post = require("../models/post")
// Get all posts
routes.get("/posts", async (req, res) => {
    try {
        const list = await Post.find()
        res.json(list)
    } catch(err) {
        res.send(err.message);
    }
})
// Get specific posts
routes.get("/posts/:id", async (req, res) => {
    try {
        const users = await Post.findById(req.params.id)
        res.json(users)
    } catch(err) {
        res.send(err.message);
    }
})
// To post a new post
routes.post("/posts", async (req, res) => {
    const newPost = new Post ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedPost = await newPost.save()
        res.json(savedPost)
    } catch(err) {
        res.send(err.message);
    }
})

// To delete specific post
routes.delete("/posts/:id", async (req, res) => {
    try {
        const deletedUser = await Post.deleteOne({_id: req.params.id})
        res.json(deletedUser)
    } catch(err) {
        res.json(err)
    }
})
// To change specific post
routes.patch("/posts/:id", async (req, res)=> {
    try {
        const patched = await Post.updateOne(
            {
                _id: req.params.id
            },
            {
                $set: { name: req.body.name, password: req.body.password, email: req.body.email }
            }
        )
        res.json(patched)
    } catch(err) {
        res.json(err)
    }
})

// Exporting all
module.exports = routes