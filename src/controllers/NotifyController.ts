import { Handler } from 'express'

const webpush = require('web-push')

const publicVapidKey = 'BJNiL2IsS_Qs7emjtkdOu9kA1K5nRxqWmeJ4yjeDpVoMYd4XAnxn5_PUV_wurl_jOMifohaFg237-N7B91BLbfM'
const privateVapidKey = 'SXm6XPPNs1xzZ_Z1Yb4UxGhY5OBGxcpjCW0gj8oXfM8'

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey)

export const subscribe: Handler = async (req, res) => {
  const subscription = req.body
  res.status(201).json({})
  const payload = JSON.stringify({ title: 'test' })

  console.log(subscription)

  webpush.sendNotification(subscription, payload).catch((error: { stack: any }) => {
    console.error(error.stack)
  })
}

export default {
  subscribe
}
