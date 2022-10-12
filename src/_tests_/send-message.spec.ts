import { SendMessage } from '../controllers/send-message'
describe('Send a DevOps message', () => {
  test('If the message is empty return 400', () => {
    const sut = new SendMessage()
    const httpRequest = {
      body: {
        message: 'This is a test',
        to: 'Juan Perez',
        from: 'Rita Asturia',
        timeToLifeSec: 45
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
