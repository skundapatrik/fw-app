const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get back all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})


//Submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        savedPost.
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

//Get size of posts collection
router.get('/size', async (req, res) => {
    try {
        const posts = await Post.countDocuments();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

//Get specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
})

//Delete specific post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

//Patch specific post
router.delete('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId },
            { $set: { title: req.body.title }}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;