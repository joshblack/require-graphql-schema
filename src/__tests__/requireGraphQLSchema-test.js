const GraphQL = require('graphql');
const { requireGraphQLSchema, requireGraphQLAST } = require('../');

const schemaKeys = [
  '_queryType',
  '_mutationType',
  '_subscriptionType',
  '_directives',
  '_typeMap',
  '_implementations'
];

describe('package', () => {
  describe('#requireGraphQLSchema', () => {
    it('should resolve a valid GraphQL Schema definition and create a schema from it', () => {
      const schema = requireGraphQLSchema('../__stubs__/schema.graphql');

      Object.keys(schema).forEach((key) => {
        expect(schema[key]).toBeDefined();
      });
    });
  });

  describe('#requireGraphQLAST', () => {
    it('should build a valid GraphQL AST from the schema path', () => {
      const schema = requireGraphQLAST('../__stubs__/schema.graphql');

      expect(schema.kind).toBe('Document');
    });
  });
});

