import express from 'express'
import 'express-async-errors'

import { auth } from './auth'
import NotifyRouter from './routes/NotifyRouter'

const app = express()

app.use(auth)
app.use(require('body-parser').json())
app.use('/api/notify', NotifyRouter)

export default app
