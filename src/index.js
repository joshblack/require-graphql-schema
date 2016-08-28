'use strict';

var fs = require('fs');
var path = require('path');
var callsite = require('callsite');
var GraphQL = require('graphql');

exports.requireGraphQLAST = requireGraphQLAST;
exports.requireGraphQLSchema = requireGraphQLSchema;

function requireGraphQLSchema(schemaPath) {
  return GraphQL.buildSchema(readSchemaFileFrom(schemaPath));
}

function requireGraphQLAST(schemaPath) {
  return GraphQL.parse(readSchemaFileFrom(schemaPath));
}

function readSchemaFileFrom(schemaPath) {
  var stack = callsite();
  var requester = path.dirname(stack[2].getFileName());
  var schemaFilePath = path.resolve(requester, schemaPath);

  return fs.readFileSync(schemaFilePath, 'utf8');
}

