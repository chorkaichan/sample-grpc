import { useState, useEffect, ReactElement, FormEvent } from 'react'
import { MultiGreeterClient } from '../../gen/proto/chatexample_grpc_pb'
import { Message } from '../../gen/proto/chatexample_pb'
import { credentials } from '@grpc/grpc-js'

const PORT = 9001
const serverURL = `localhost:${PORT}`
const client = new MultiGreeterClient(
  serverURL,
  credentials.createInsecure(),
)

const Index = (): ReactElement | null => {
  const [ inputMsg, setInputMsg ] = useState<string>('')
  const [ messages, setMessages ] = useState<string[]>([])

  const handleDataCallback = (message: Message.AsObject): void => {
    setMessages((val) => [ ...val, message.text ])
  }

  const startChat = () => {
    const channel = client.join()
    channel.on('data', handleDataCallback)
  }

  const handleInputEnter = (e: FormEvent) => {
    e.preventDefault()
    const Request = new Message()
    Request.setUser(window.location.port)
    Request.setText(inputMsg)

    setInputMsg('')
    client.send(Request, (error, _response: Message) => {
      if (error) {
        const errorMsg = error?.message || 'something went wrong'
        setMessages((val) => [ ...val, errorMsg ])
      }
    })
  }

  useEffect(() => {
    startChat()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <form onSubmit={handleInputEnter}>
        <input
          type="text"
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
        />
      </form>
      {
        messages.map((msg) => (
          <div key={msg}>
            {msg}
          </div>
        ))
      }
    </div>
  )
}

export default Index
