const publicVapidKey = 'BJNiL2IsS_Qs7emjtkdOu9kA1K5nRxqWmeJ4yjeDpVoMYd4XAnxn5_PUV_wurl_jOMifohaFg237-N7B91BLbfM'

if ('serviceWorker' in navigator) {
  run().catch(error => console.error(error))
}

async function run () {
  console.log('Registering service worker')
  const registration = await navigator.serviceWorker.register('/notify/api/notify/ServiceWorker.js', { scope: '/notify/api/notify/' })
  console.log('Registered service worker')

  console.log('Waiting for service worker to be ready')
  await navigator.serviceWorker.ready
  console.log('Service worker is ready')

  console.log('Registering push')
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  })
  console.log('Registered push')

  console.log('Sending push')

  const fullBody = {
    _id: '123456',
    lastName: 'Delpech',
    firstName: 'Michel',
    role: 'restaurateur',
    subscription
  }

  console.log(fullBody)

  const stringBody = JSON.stringify(fullBody)

  await fetch('subscribe', {
    method: 'POST',
    body: stringBody,
    headers: {
      'content-type': 'application/json'
    }
  })
  console.log('Sent push')
}

function urlBase64ToUint8Array (base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
