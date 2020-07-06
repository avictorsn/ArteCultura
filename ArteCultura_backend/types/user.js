const {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    _id:          { type: GraphQLID     },
    name:         { type: GraphQLString },
    username:     { type: GraphQLString },
    email:     { type: GraphQLString },
    password:     { type: GraphQLString }
  })
});
