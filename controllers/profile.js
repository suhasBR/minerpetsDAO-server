const Profile = require("../models/Profile");
const router = require("../routes/profile");
const ethers = require('ethers');
const myAbi = require('../abi.json');

const provider = new ethers.providers.JsonRpcProvider("https://eth-rinkeby.alchemyapi.io/v2/dgu3bXE7_K41FjeQ3nPkyglD4qG3mjc1")
const privateKey = process.env.PRIVATE_KEY;

const signer = new ethers.Wallet(privateKey, provider);

const address = "0x2f8B8B239C89588d46b83Ad2fAA7CA7B3AB476f0";



const myContract_write = new ethers.Contract(address, myAbi, signer);
const myContract_read = new ethers.Contract(address, myAbi, provider);

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

const giveFreeDrop = async (req,res) => {
  try {
    let address = req.body.address;

    let userFound = await Profile.findOne({ address: req.body.address });
    console.log(userFound)
    if(userFound.freedrop){
      console.log('free drop given')
      return res.status(400).json({
        err:true,
        msg:'Freedrop already given'
      })
    }
    
  
   
    //else give freedrop
    const tx = await myContract_write.transfer(address,'500000000000000000');
    // await tx.wait();

    //update freedrop
    const updatedUser = await Profile.findOneAndUpdate(
      {address : address},
      { freedrop : true },
      { runValidators: true,new: true }
    );

    return res.status(201).json({updatedUser})

  } catch (error) {
    console.log(error);
    res.status(501).json({
      err: true,
      msg: error,
    });
  }
}

module.exports = {
  createProfile,
  updateUname,
  giveFreeDrop
};
