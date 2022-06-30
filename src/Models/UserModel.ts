import { Schema, model } from 'mongoose'

type Role = 'client'| 'restaurateur'| 'deliverer'| 'developer'| 'commercial'| 'technician'| 'admin'

export interface IUser {
    _id: String,
    lastname: String,
    firstname: String,
    role: Role,
    subscription: {
        endpoint: String,
        keys: {
            auth: String,
            p256dh: String
        }
    }
}

const UserSchema = new Schema<IUser>({
  _id: { type: String, required: true },
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  role: { type: String, required: true },
  subscription: {
    endpoint: { type: String, required: true },
    keys: {
      auth: { type: String, required: true },
      p256dh: { type: String, required: true }
    }
  }
})

export default model('Users', UserSchema)
