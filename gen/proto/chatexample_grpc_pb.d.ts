// package: chatexample
// file: proto/chatexample.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_chatexample_pb from "../proto/chatexample_pb";

interface IMultiGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    join: IMultiGreeterService_Ijoin;
    send: IMultiGreeterService_Isend;
}

interface IMultiGreeterService_Ijoin extends grpc.MethodDefinition<proto_chatexample_pb.Message, proto_chatexample_pb.Message> {
    path: "/chatexample.MultiGreeter/join";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_chatexample_pb.Message>;
    requestDeserialize: grpc.deserialize<proto_chatexample_pb.Message>;
    responseSerialize: grpc.serialize<proto_chatexample_pb.Message>;
    responseDeserialize: grpc.deserialize<proto_chatexample_pb.Message>;
}
interface IMultiGreeterService_Isend extends grpc.MethodDefinition<proto_chatexample_pb.Message, proto_chatexample_pb.Message> {
    path: "/chatexample.MultiGreeter/send";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_chatexample_pb.Message>;
    requestDeserialize: grpc.deserialize<proto_chatexample_pb.Message>;
    responseSerialize: grpc.serialize<proto_chatexample_pb.Message>;
    responseDeserialize: grpc.deserialize<proto_chatexample_pb.Message>;
}

export const MultiGreeterService: IMultiGreeterService;

export interface IMultiGreeterServer extends grpc.UntypedServiceImplementation {
    join: grpc.handleBidiStreamingCall<proto_chatexample_pb.Message, proto_chatexample_pb.Message>;
    send: grpc.handleUnaryCall<proto_chatexample_pb.Message, proto_chatexample_pb.Message>;
}

export interface IMultiGreeterClient {
    join(): grpc.ClientDuplexStream<proto_chatexample_pb.Message, proto_chatexample_pb.Message>;
    join(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_chatexample_pb.Message, proto_chatexample_pb.Message>;
    join(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_chatexample_pb.Message, proto_chatexample_pb.Message>;
    send(request: proto_chatexample_pb.Message, callback: (error: grpc.ServiceError | null, response: proto_chatexample_pb.Message) => void): grpc.ClientUnaryCall;
    send(request: proto_chatexample_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_chatexample_pb.Message) => void): grpc.ClientUnaryCall;
    send(request: proto_chatexample_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_chatexample_pb.Message) => void): grpc.ClientUnaryCall;
}

export class MultiGreeterClient extends grpc.Client implements IMultiGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public join(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_chatexample_pb.Message, proto_chatexample_pb.Message>;
    public join(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_chatexample_pb.Message, proto_chatexample_pb.Message>;
    public send(request: proto_chatexample_pb.Message, callback: (error: grpc.ServiceError | null, response: proto_chatexample_pb.Message) => void): grpc.ClientUnaryCall;
    public send(request: proto_chatexample_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_chatexample_pb.Message) => void): grpc.ClientUnaryCall;
    public send(request: proto_chatexample_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_chatexample_pb.Message) => void): grpc.ClientUnaryCall;
}
