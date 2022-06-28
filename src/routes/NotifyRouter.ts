import express from 'express'
import NotifyController from '../controllers/NotifyController'
const NotifyRouter = express.Router()

/**
 * @api {post} /notify/api/notify/subscribe Register a user to notifications
 * @apiName Subscribe
 * @apiGroup Notify
 *
 * @apiBody {String} _id User's unique ID.
 * @apiBody {String} nom Lastname of the user.
 * @apiBody {String} prenom Firstname of the user.
 * @apiBody {String} role Role of the user.
 * @apiBody {Object} subscription Subscription as described by web-push API.
 *
 *@apiExample {json} Request-Example:
 *    {
 *      "_id": "46Juzcyx",
 *      "nom": "Delpech",
 *      "prenom": "Michel",
 *      "role": "restaurateur",
 *      "subscription": {
 *          "endpoint": "https://fcm.googleapis.com/fcm/send/fdkzq15d2:DUIOQ5dfqDDQZ413fqefesq5",
 *          "keys": {
 *              "auth": "RSQD4512DzqSD_QZdzq",
 *              "p256dh": "dzqDFQZ4fdqzq1fdQF1drthkHJKbvs2135fsedNUIJFB"
 *          }
 *      }
 *    }
 *
 * @apiSuccess {String} _id User's unique ID.
 * @apiSuccess {String} nom Lastname of the user.
 * @apiSuccess {String} prenom Firstname of the user.
 * @apiSuccess {String} role Role of the user.
 * @apiSuccess {Object} subscription Subscription as described by web-push API.
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "_id": "46Juzcyx",
 *      "nom": "Delpech",
 *      "prenom": "Michel",
 *      "role": "restaurateur",
 *      "subscription": {
 *          "endpoint": "https://fcm.googleapis.com/fcm/send/fdkzq15d2:DUIOQ5dfqDDQZ413fqefesq5",
 *          "keys": {
 *              "auth": "RSQD4512DzqSD_QZdzq",
 *              "p256dh": "dzqDFQZ4fdqzq1fdQF1drthkHJKbvs2135fsedNUIJFB"
 *          }
 *      }
 *    }
 *
 */
NotifyRouter.post('/subscribe', NotifyController.subscribe)
// NotifyRouter.post('/send/:id', NotifyController.pushMessage)
NotifyRouter.use('/', express.static('./public'))

export default NotifyRouter
