const express = require('express');
const router = express.Router();

const {
    createProfile,
    updateUname
} = require("../controllers/profile");

router.route('/createUser').post(createProfile);
router.route('/updateuname').patch(updateUname);

module.exports = router;