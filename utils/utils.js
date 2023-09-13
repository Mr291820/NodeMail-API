
const nodemailer = require('nodemailer');





const sendMail = async (toEmail, name, bank, branch, accountNo, ifsc, accountHolder, amount) => {
    try {
        const transporter = await nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: `"FollowFX "<${process.env.EMAIL_USER}>`,
            to: `${toEmail}`,
            subject: `Withdraw funds request from ${name}`,
            html: '<p>Hii FollowFX, I want to withdraw my funds from my account. My details are listed below.' + ' <br>' + 'BANK : ' + bank + '<br>' + 'BRANCH : ' + branch + '<br>' + 'ACCOUNT NO : ' + accountNo + '<br>' + 'IFSC : ' + ifsc + '<br>' + 'ACCOUNT HOLDER : ' + accountHolder + '<br>' + 'AMOUNT : INR ' + amount + ' </p>'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(info);
            }
        })
    } catch (error) {
        res.send(400).json({ error });
    }
};

module.exports = { sendMail };
