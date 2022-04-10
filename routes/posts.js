const express = require('express');
const router = express.Router();

const {
    loadPostsForStory,
    createPost
} = require("../controllers/posts");

router.route('/createpost').post(createPost);
router.route('/loadPostsForStory').post(loadPostsForStory);


module.exports = router;