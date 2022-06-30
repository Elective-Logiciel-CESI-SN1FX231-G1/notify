import { Handler } from 'express'
import UserModel from '../Models/UserModel'

const webpush = require('web-push')

const publicVapidKey = 'BJNiL2IsS_Qs7emjtkdOu9kA1K5nRxqWmeJ4yjeDpVoMYd4XAnxn5_PUV_wurl_jOMifohaFg237-N7B91BLbfM'
const privateVapidKey = 'SXm6XPPNs1xzZ_Z1Yb4UxGhY5OBGxcpjCW0gj8oXfM8'

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey)

export const subscribe: Handler = async (req, res) => {
  const user = req.body

  const userExist = await UserModel.findOne({ _id: user._id })

  if (userExist) return res.sendStatus(200)

  const newUser = new UserModel(user)
  try {
    await newUser.save()
    return res.status(201).send(newUser)
  } catch (err) {
    if (err instanceof Error && err.message) return res.status(400).send(err.message)
    else throw err
  }
}

export async function pushMessage (message: String, id: number) {
  const user = await UserModel.findOne({ _id: id })

  if (!user) return -1

  const payload = JSON.stringify({
    title: `[${user.firstname}] V'EAT`,
    content: message
  })

  webpush.sendNotification(user.subscription, payload).catch((error: { stack: any }) => {
    console.error(error.stack)
  })

  return 1
}

export default {
  subscribe,
  pushMessage
}
