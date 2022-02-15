const routes = require("express").Router()
const Post = require("../models/post")

routes.get("/posts", async (req, res) => {
    try {
        const list = await Post.find()
        res.json(list)
    } catch(err) {
        res.send(err.message);
    }
})

routes.get("/posts/:id", async (req, res) => {
    try {
        const users = await Post.findById(req.params.id)
        res.json(users)
    } catch(err) {
        res.send(err.message);
    }
})

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


routes.delete("/posts/:id", async (req, res) => {
    try {
        const deletedUser = await Post.deleteOne({_id: req.params.id})
        res.json(deletedUser)
    } catch(err) {
        res.json(err)
    }
})



module.exports = routes