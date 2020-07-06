const { rootQueryResolvers, rootMutationResolvers } = require('./resolver');

const {
  GraphQLSchema,
  GraphQLObjectType
} = require('graphql');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: rootQueryResolvers
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: rootMutationResolvers
});


module.exports.rootSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
