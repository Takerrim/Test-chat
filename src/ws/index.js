import Sarus from '@anephenix/sarus'
import EventEmitter from 'eventemitter3'

export default class Ws extends EventEmitter {
  constructor(username) {
    super()
    this.connection = new Sarus({
      url: `wss://nane.tada.team/ws?username=${username}`,
      eventListeners: {
        open: [this.noteOpened.bind(this)],
        error: [this.handleError.bind(this)],
        close: [this.noteClosed.bind(this)],
        message: [this.parseMessage.bind(this)],
      }
    })
  }

  parseMessage(event) {
    this.emit('message', JSON.parse(event.data))
  }

  sendMessage(data) {
    this.connection.send(JSON.stringify(data))
  }

  noteOpened() {
    console.log('Connection opened')
    this.emit('connectionOpened')
  }

  handleError(error) {
    console.error(error)
  }

  noteClosed() {
    console.log('Connection closed')
    this.emit('connectionClosed')
  }
}
