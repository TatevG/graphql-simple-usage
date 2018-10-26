const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');

const schema = require('./schema');
const port = 4000;

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.listen(port, () => console.log(`Server on ${port}`));