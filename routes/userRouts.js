const router = require("express").Router();
const controller = require("../controller/userController");





// Initializing routes


// Send OTP to given user id
router.post('/email/send', controller.sendOTP);


module.exports = router;