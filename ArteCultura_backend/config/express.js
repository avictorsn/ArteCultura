const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const isAuth = require('../middleware/auth');
const graphqlHttp = require('express-graphql');
const { rootSchema } = require('../graphql/schema');

module.exports = function() {
  let app = express();
  app.set("port", process.env.PORT || 3000);
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(isAuth);
  app.use('/graphQL', graphqlHttp({
    schema: rootSchema,
    graphiql: true
  }));

  return app;
}
