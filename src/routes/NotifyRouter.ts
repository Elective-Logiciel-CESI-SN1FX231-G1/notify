import express from 'express'
import NotifyController from '../controllers/NotifyController'
const NotifyRouter = express.Router()

NotifyRouter.post('/subscribe', NotifyController.subscribe)
// NotifyRouter.post('/send/:id', NotifyController.pushMessage)
NotifyRouter.use('/', express.static('./public'))

export default NotifyRouter
