import { MessageModel } from '../models/message-model'
describe('Classes', () => {
  it('Class Message Model', () => {
    const messageModel = new MessageModel()
    expect(messageModel.message).toEqual('This is a test')
    expect(messageModel.to).toEqual('Juan Perez')
    expect(messageModel.from).toEqual('Rita Asturia')
    expect(messageModel.timeToLifeSec).toEqual(45)
  })
})
