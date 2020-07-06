const {
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType
  } = require('graphql');
  
  module.exports = new GraphQLObjectType({
    name: 'AuthType',
    fields: () => ({
      userId:           { type: GraphQLID     },
      token:            { type: GraphQLString },
      expiration:       { type: GraphQLInt }
    })
  });
  