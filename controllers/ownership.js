const Ownership = require("../models/Ownership");

const getNFTByOwner = async (req, res) => {
  try {
    let owner = req.query.owner;
    let type = req.query.type;

    const data = await Ownership.find({
      owner: owner,
      type: type
    });
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      err: true,
      msg: error,
    });
  }
};

const addMintInfo = async (req, res) => {
  try {
    const newNFT = await Ownership.create(req.body);
    res.status(201).json({ newNFT });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      err: true,
      msg: error,
    });
  }
};

module.exports = {
  getNFTByOwner,
  addMintInfo
};
