/**
 * controller to create notification
 * validation of notification request body should be written at middleware
 */
const Notification = require('../models/notification.model')

exports.acceptNotificationRequest = async(req, res) =>{
    try{
        /**
     * create notification obj to be inserted based on req body
     */
    const notificationObj = {
        subject : req.body.subject,
        recepientsEmails : req.body.recepientsEmails,
        content : req.body.content,
        requester : req.body.requester,
        status : req.body.status
    }

    const notification = await Notification.create(notificationObj)

    /**
     * save the notification request
     */

    /**
     * send the tracking id back to caller
     * _id of the created notification object can be used
     */
    res.status(201).send({
        message : "Request Accepted",
        trackingId : notification._id
    })
    }catch(err){
        console.log('Error while storing the notification request');
        res.status(500).send({
            message : 'Internal server error'
        })
    }
}

/**
 * controller to fetch notification based on notification id
 */
exports.getNotificationDetails = async(req,res) =>{
    try{
        const trackingId = req.params.id
        const notification = await Notification.findOne({_id : trackingId})

        res.status(200).send(notification)
    }catch(err){
        console.log("Error while receiving notification ", err.message);
        res.status(500).send({
            message : "Internal server error"
        })
    }
}