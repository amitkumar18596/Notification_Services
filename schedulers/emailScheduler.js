/**
 * Here we are going to have the logic to schedule the sending of the email
 */
const cron = require('node-cron')
const Notification = require('../models/notification.model')
const emailTransporter = require('../notifiers/emailService')

cron.schedule("10 * * * * *", async ()=>{
    console.log("Hello Guys!");
    /**
     * Write the logic to read from DB and send Email
     */

    /**
     * Fetch all the notification requestes which are in UN_SENT status
     */
    const notifications = await Notification.find({status : "UN_SENT"})

    /**
     * send the email notification coresponding to each of those request
     */
    if (notifications){
        console.log("Number of unsent requests are : ", notifications.length);
        /**
         * send email for each single notification request
         */
        notifications.forEach( n =>{
            const mailObj  = {
                to : n.recepientsEmails,
                subject : n.subject,
                text : n.content
            }

            console.log("sending email for ", mailObj);
            emailTransporter.sendMail(mailObj, async(err, info)=>{
                if(err){
                    console.log("Error while sending email ", err.message);
                }else{
                    console.log("Successfully sent the Email ", info);
                    /**
                     * I need to go and update the status of the notification
                     */
                    n.status = "SENT"
                    await n.save()
                }
            })
        })
    }
})