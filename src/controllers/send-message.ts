export class SendMessage {
  handle (httpRequest: any): any {
    if (!httpRequest.body.message) {
      return {
        statusCode: 400,
        body: new Error('error in the: message')
      }
    }

    if (!httpRequest.body.to) {
      return {
        statusCode: 400,
        body: new Error('error in the: to')
      }
    }
  }
}
