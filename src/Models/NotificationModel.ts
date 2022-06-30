export type Role = 'client'| 'restaurateur'| 'deliverer'| 'developer'| 'commercial'| 'technician'| 'admin'

export interface INotification {
  topic: string,
  body: {
    msg: string,
    url?: string
  },
  roles?: [Role],
  users?: [string]
}
