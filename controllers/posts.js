const Posts = require("../models/Posts");

const createPost = async (req, res) => {
  try {
    let newPost = await Posts.create(req.body);
    res.status(201).json({ newPost });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      err: true,
      msg: error,
    });
  }
};

const loadPostsForStory = async (req, res) => {
  try {
    let posts = await Posts.find({ storyID: req.body.storyID });
    res.status(201).json({ posts });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      err: true,
      msg: error,
    });
  }
};

module.exports = {
  loadPostsForStory,
  createPost,
};
