const router = require("express").Router();
const controller = require("../controller/userController");
const multer = require("multer");
const path = require("path");




// Initializing routes


// Send OTP to given user id
router.post('/email/send', controller.sendOTP);


module.exports = router;