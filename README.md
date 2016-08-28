# `require-graphql-schema`

Require and parse GraphQL Schema definitions into a `GraphQLSchema` or into a Document AST.

### Installation

```bash
npm install --save require-graphql-schema
```

### Usage

```js
// src/index.js

import { requireGraphQLSchema, requireGraphQLAST } from 'require-graphql-schema';

const schema = requireGraphQLSchema('./path-to-schema-definition.graphql');
const astSchema = requireGraphQLAST('./path-to-schema-definition.graphql');

// ./path-to-schema-definition.graphql
type Query {
  testString: String
}
```
