export class MessageModel {
  message: string
  to: string
  from: string
  timeToLifeSec: number

  constructor () {
    this.message = 'This is a test'
    this.to = 'Juan Perez'
    this.from = 'Rita Asturia'
    this.timeToLifeSec = 45
  }
}
