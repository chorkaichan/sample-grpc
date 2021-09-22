/* eslint-disable no-console */
import {
  Server,
  ServerCredentials,
  ServerWritableStream,
} from '@grpc/grpc-js'
import { MultiGreeterService } from '../../gen/proto/chatexample_grpc_pb'
import { Message } from '../../gen/proto/chatexample_pb'

const PORT = 9091

const users: ServerWritableStream<Message.AsObject, Message.AsObject>[] = []

const notifyChat = (message: Message.AsObject): void => {
  users.forEach((user) => {
    user.write(message)
  })
}

const join = (call: ServerWritableStream<Message.AsObject, Message.AsObject>): void => {
  users.push(call)
  notifyChat({ user: 'Server', text: 'new user joined.' })
}

const send = (call: ServerWritableStream<Message.AsObject, Message.AsObject>): void => {
  notifyChat(call.request)
}

const startServer = () => {
  const server = new Server()
  server.addService(MultiGreeterService, {
    join,
    send,
  })
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error)
      }

      server.start()
      console.log(`server start listing on port ${port}`)
    },
  )
}

startServer()
