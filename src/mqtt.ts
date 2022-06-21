import mqtt from 'async-mqtt'
import config from 'config'

const client = mqtt.connect(config.get('mqtt.url'))

client.on('message', async function (topic, message) {
  try {
    const msg = JSON.parse(message.toString())
    console.log(msg)
  } catch (error) {
    console.error(error)
  }
})

export const connect = async function () {
  if (!client.connected) { await new Promise(resolve => client.once('connect', resolve)) }
  await client.subscribe('sponsor/sponsorship/restaurateur')
  await client.subscribe('sponsor/sponsorship/client')
  await client.subscribe('auth/users/edit')
  await client.subscribe('auth/users/delete')
}

export default client
