const routes = require("express").Router()
const Post = require("../models/post")

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


routes.get("/posts", (req, res) => {
    res.send("this is posts page")
})

module.exports = routes