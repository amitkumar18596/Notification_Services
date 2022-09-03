/**
 * this file will contain sample code for sending email notifications
 */
 const nodemailer = require('nodemailer')

 module.exports = nodemailer.createTransport({
     port : 465,
     //host : "smtp.gmail.com",
     service : "gmail",
     auth : {
         user : "maharana.amulya64@gmail.com",
         pass : "clnjkdzltiuerdaj"
     },
     secure : true
 })
 
 