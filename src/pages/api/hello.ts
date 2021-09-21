/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next'
import { HelloRequest, HelloReply } from '../../../gen/proto/hello_pb'
import { GreeterClient } from '../../../gen/proto/hello_grpc_pb'
import { credentials, ServiceError } from '@grpc/grpc-js'

const GRPC_CLIENT_OPTIONS = {
  'grpc.lb_policy_name': 'round_robin',
  'grpc.dns_min_time_between_resolutions_ms': 5000,
  'grpc.keepalive_timeout_ms': 1000,
}

const PORT = 9000
const serverURL = `localhost:${PORT}`

type ApiRequest = NextApiRequest & {
  query: {
    name?: string
  }
}

export type RequestParams = {
  name?: string;
};

const getMessage = ({ name = 'World' }: RequestParams): Promise<HelloReply.AsObject | {error: Error}> => {
  const Request = new HelloRequest()
  const Client = new GreeterClient(
    serverURL,
    credentials.createInsecure(),
    GRPC_CLIENT_OPTIONS,
  )
  Request.setName(name || '')

  return new Promise<HelloReply.AsObject | {error: Error}>((resolve, reject) => {
    Client.sayHello(Request, (error: ServiceError | null, response: HelloReply) => {
      if (error) {
        console.error(error)
        reject({
          code: error?.code || 500,
          message: error?.message || 'something went wrong',
        })
      }

      return resolve(response.toObject())
    })
  })
}

const handler = async (
  req: ApiRequest,
  res: NextApiResponse<HelloReply.AsObject | {error: Error}>,
): Promise<void> => {
  const { name } = req.query
  const result = await getMessage({ name })
    .catch((error) => ({ error }))

  res.json(result)
}

export default handler
