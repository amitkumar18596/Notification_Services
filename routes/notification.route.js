const notificationController = require('../controllers/notification.controller')

module.exports = (app) =>{
    /**
     * Insert a new notification request
     * POST notiserve/api/v1/notifications
     */
    app.post('/notiserve/api/v1/notifications', notificationController.acceptNotificationRequest)

    /**
     * get the notification status if the notification mail was sent or not
     * GET notiserve/api/v1/notifications/:id
     */
    app.get('/notiserve/api/v1/notifications/:id', notificationController.getNotificationDetails)
}