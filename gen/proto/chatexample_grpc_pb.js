// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_chatexample_pb = require('../proto/chatexample_pb.js');

function serialize_chatexample_Message(arg) {
  if (!(arg instanceof proto_chatexample_pb.Message)) {
    throw new Error('Expected argument of type chatexample.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatexample_Message(buffer_arg) {
  return proto_chatexample_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var MultiGreeterService = exports.MultiGreeterService = {
  join: {
    path: '/chatexample.MultiGreeter/join',
    requestStream: true,
    responseStream: true,
    requestType: proto_chatexample_pb.Message,
    responseType: proto_chatexample_pb.Message,
    requestSerialize: serialize_chatexample_Message,
    requestDeserialize: deserialize_chatexample_Message,
    responseSerialize: serialize_chatexample_Message,
    responseDeserialize: deserialize_chatexample_Message,
  },
  send: {
    path: '/chatexample.MultiGreeter/send',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatexample_pb.Message,
    responseType: proto_chatexample_pb.Message,
    requestSerialize: serialize_chatexample_Message,
    requestDeserialize: deserialize_chatexample_Message,
    responseSerialize: serialize_chatexample_Message,
    responseDeserialize: deserialize_chatexample_Message,
  },
};

exports.MultiGreeterClient = grpc.makeGenericClientConstructor(MultiGreeterService);
