const AuthType = require('../types/auth');
const User = require('../models/User');
const { secretKey } = require('../config/constants');
const { GraphQLString, GraphQLNonNull } = require('graphql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authQueryResolvers = {
    login: {
        type: AuthType,
        args: {
            email:      { type: new GraphQLNonNull(GraphQLString) },
            password:   { type: new GraphQLNonNull(GraphQLString) }
        },
        async resolve(parent, args) {
            console.log('Trying to authenticate...');           
            const user = await User.findOne({ email: args.email });
            if (!user) {
                console.log('User not found.');
                throw new Error('User not found.');
            }
            const valid = await bcrypt.compare(args.password, user.password);
            if (!valid) {
                console.log('Invalid password!');
                throw new Error('Invalid password!');
            }
            const token = jwt.sign({ userId: (await user).id,  email: user.email }, secretKey, {
                expiresIn:  '3h'
            });
            console.log('Authenticated!');
            return { userId: user.id, token: token, expiration: 3 };
        }
    }
}