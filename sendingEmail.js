/**
 * this file will contain sample code for sending email notifications
 */
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    port : 465,
    //host : "smtp.gmail.com",
    service : "gmail",
    auth : {
        user : "maharana.amulya64@gmail.com",
        pass : "clnjkdzltiuerdaj"
    },
    secure : true
})

/**
 * sending email
 */
const mailDataObj = {
    from : 'crm-no-reply@gmail.com',
    to : 'maharana.amit96@gmail.com',
    subject : 'Testing the code to send email',
    text : 'Sample test context',
    html : '<b> Hello World! </b>'
}

transporter.sendMail(mailDataObj, (err, data) =>{
    if (err){
        console.log(err.message);
    }else {
        console.log('Email sent successfully');
    }
})