const User = require('../models/User');
const mongoose = require('mongoose');
const UserType = require('../types/user');
const bcrypt = require('bcrypt');

const {
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');


module.exports.userQueryResolvers = {

  user: {
    type: UserType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve(parent, args) {
      return User.findById(args.id);
    }
  },

  users: {
    type: new GraphQLList(UserType),
    resolve() {
      return User.find({});
    }
  }
};

module.exports.userMutationResolvers = {

  addUser: {
    type: UserType,
    args: {
      name:         { type: new GraphQLNonNull(GraphQLString) },
      username:     { type: new GraphQLNonNull(GraphQLString) },
      email:        { type: new GraphQLNonNull(GraphQLString) },
      password:     { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      bcrypt.hash(args.password, 12).then((hashedPassword) => {
        let user = new User({
          _id:          new mongoose.Types.ObjectId(),
          ...args,
          password:     hashedPassword,
        });
        return user.save();
      })
    }
  },

  updateUser: {
    type: UserType,
    args: {
      id:           { type: new GraphQLNonNull(GraphQLID)     },
      name:         { type: GraphQLString },
      username:     { type: GraphQLString },
      email:        { type: GraphQLString }
    },
    resolve(parent, args) {
        let user = new User(args);
        return User.findByIdAndUpdate(args.id, user);
    }
  },

  deleteUser: {
    type: UserType,
    args: {
      id:           { type: new GraphQLNonNull(GraphQLID)     },
    },
    resolve(parent, args) {
        return User.findByIdAndRemove(args.id);
    }
  },



};

