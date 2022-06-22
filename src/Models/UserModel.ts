import { Schema, model } from 'mongoose'

type Role = 'client'| 'restaurateur'| 'deliverer'| 'developer'| 'commercial'| 'technician'| 'admin'

export interface IUser {
    _id: String,
    nom: String,
    prenom: String,
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
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
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
