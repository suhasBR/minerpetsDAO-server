const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    uname:{
        type: String,
    },
    storyID:{
        type: String,
        required: true
    },
    content: {
      type: String,
      required: true,
      default:'',
    },
    stakedMRS:{
        type: Number,
        required: true,
        default: 0,
    },
    likes:{
        type: Number,
        default: 0,
    },
  },
);

module.exports = mongoose.model("Posts", PostsSchema);
