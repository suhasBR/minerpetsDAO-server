const Profile = require("../models/Profile");
const router = require("../routes/profile");

const createProfile = async (req, res) => {
  try {
    let userFound = await Profile.findOne({ address: req.body.address });
    if (userFound) {
        let newUser = await Profile.findOneAndUpdate({address: req.body.address},
          req.body,
          {
            new:true
          }
          )
      return res.status(201).json({newUser})
    } else {
      let newUser = await Profile.create(req.body);
      res.status(201).json({ newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({
      err: true,
      msg: error,
    });
  }
};

const updateUname = async (req, res) => {
  try {
    //find the user by address
    const addr = req.body.address;
  

    const updatedUser = await Profile.findOneAndUpdate(
      {address : addr},
      { uname: req.body.uname },
      { runValidators: true,new: true }
    );

    res.status(201).json({ updatedUser });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      err: true,
      msg: error,
    });
  }
};

module.exports = {
  createProfile,
  updateUname,
};
