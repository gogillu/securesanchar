var nodemailer = require('nodemailer');
function sendmail(email,url, cb) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pratikshagupta789@gmail.com',
            pass: 'spanishtoll'
        }
    });
    
    var mailOptions = {
        from: 'pratikshagupta789@gmail.com',
        to: email,
        subject: 'Confirmation mail for registeration on Secure sanchar',
        html: "<h2><a href='"+url+"'> click here to verify</a></h2><br/>"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            cb(false)
        } else {
            cb(true)
        }
    });
}
module.exports = {sendmail:sendmail}