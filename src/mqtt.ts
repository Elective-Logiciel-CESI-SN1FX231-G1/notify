import mqtt from 'async-mqtt'
import config from 'config'
import { pushMessage } from './controllers/NotifyController'

const client = mqtt.connect(config.get('mqtt.url'))

client.on('message', async function (topic, message) {
  try {
    const msg = JSON.parse(message.toString())
    pushMessage(msg.message, msg.id)
  } catch (error) {
    console.error(error)
  }
})

export const connect = async function () {
  if (!client.connected) { await new Promise(resolve => client.once('connect', resolve)) }
  await client.subscribe('notify')
}

export default client
