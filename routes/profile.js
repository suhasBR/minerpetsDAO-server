const express = require('express');
const router = express.Router();

const {
    createProfile,
    updateUname,
    giveFreeDrop
} = require("../controllers/profile");

router.route('/createUser').post(createProfile);
router.route('/updateuname').patch(updateUname);
router.route('/freedrop').post(giveFreeDrop);

module.exports = router;