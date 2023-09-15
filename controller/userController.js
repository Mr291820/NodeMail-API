
const utils = require("../utils/utils");




// Send an otp to the given email of user for restting login password
const sendOTP = async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const bank = req.body.bank;
    const branch = req.body.branch;
    const accountNo = req.body.accountno;
    const ifsc = req.body.ifsc;
    const accountHolder = req.body.accountholder;
    const amount = req.body.amount;
    const uid = req.body.uid;


    try {
        await utils.sendMail(email, name, bank, branch, accountNo, ifsc, accountHolder, amount, uid);
        res.status(200).json("OK");
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }



};




module.exports = {

    sendOTP,

};