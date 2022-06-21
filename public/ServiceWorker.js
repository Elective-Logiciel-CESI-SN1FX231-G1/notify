self.addEventListener('push', function (event) {
  const data = event.data.json()
  console.log('Got push', data)
  self.registration.showNotification(data.title, {
    body: 'Hello, World!',
    icon: 'http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
  })
})
