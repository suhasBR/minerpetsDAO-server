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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
