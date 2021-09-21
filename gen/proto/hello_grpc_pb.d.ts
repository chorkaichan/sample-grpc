// package: helloworld
// file: proto/hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_hello_pb from "../proto/hello_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<proto_hello_pb.HelloRequest, proto_hello_pb.HelloReply> {
    path: "/helloworld.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<proto_hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<proto_hello_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<proto_hello_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<proto_hello_pb.HelloRequest, proto_hello_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: proto_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: proto_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
