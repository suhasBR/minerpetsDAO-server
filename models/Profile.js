const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    uname: {
      type: String,
      default: null
    },
    nftsowned: [{}],
    freedrop: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
