const {
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType
} = require('graphql');

const { GraphQLDate } = require('graphql-iso-date');

module.exports = new GraphQLObjectType({
  name: 'EventType',
  fields: () => ({
    _id:          { type: GraphQLID     },
    organizer:    { type: GraphQLString },
    event_name:   { type: GraphQLString },
    description:  { type: GraphQLString },
    date:         { type: GraphQLDate   },
    local:        { type: GraphQLString },
    time:         { type: GraphQLString }
  })
});
