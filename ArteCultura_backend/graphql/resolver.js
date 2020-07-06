const { userQueryResolvers, userMutationResolvers } = require('../resolvers/user');
const { eventQueryResolvers, eventMutationResolvers } = require('../resolvers/event');
const { authQueryResolvers } = require('../resolvers/auth');

module.exports.rootQueryResolvers = {
  ...userQueryResolvers,
  ...eventQueryResolvers,
  ...authQueryResolvers
}

module.exports.rootMutationResolvers = {
  ...userMutationResolvers,
  ...eventMutationResolvers
}
