const Event = require('../models/Event');
const mongoose = require('mongoose');
const EventType = require('../types/event');

const {
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

const { GraphQLDate } = require('graphql-iso-date');


module.exports.eventQueryResolvers = {

  events: {
    type: new GraphQLList(EventType),
    resolve(parent, args, req) {
      if (req.isAuth) {
        return Event.find({});
      } else {
        throw new Error('Unauthorized');
      }
    }
  },

  event: {
    type: EventType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve(parent, args) {
      return Event.findById(args.id);
    }
  }
}

module.exports.eventMutationResolvers = {

  addEvent: {
    type: EventType,
    args: {
      organizer:    { type: new GraphQLNonNull(GraphQLString) },
      event_name:   { type: new GraphQLNonNull(GraphQLString) },
      description:  { type: new GraphQLNonNull(GraphQLString) },
      date:         { type: new GraphQLNonNull(GraphQLDate)   },
      local:        { type: new GraphQLNonNull(GraphQLString) },
      time:         { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parent, args) {
      console.log('Trying to create event...');
      let event = new Event({
        _id:          new mongoose.Types.ObjectId(),
        ...args
      });
      console.log(event);
      return event.save();
    }
  },

  updateEvent: {
    type: EventType,
    args: {
      id:           { type: new GraphQLNonNull(GraphQLID)     },
      organizer:    { type: new GraphQLNonNull(GraphQLString) },
      event_name:   { type: new GraphQLNonNull(GraphQLString) },
      description:  { type: new GraphQLNonNull(GraphQLString) },
      date:         { type: new GraphQLNonNull(GraphQLDate)   },
      local:        { type: new GraphQLNonNull(GraphQLString) },
      time:         { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parent, args) {
      let event = new Event({
        organizer:    args.organizer,
        event_name:   args.event_name,
        description:  args.description,
        date:         args.date,
        local:        args.local,
        time:         args.time
      });
      return Event.findByIdAndUpdate(args.id, event);
    }
  },

  deleteEvent: {
    type: EventType,
    args: {
      id:           { type: new GraphQLNonNull(GraphQLID)     }
    },
    resolve(parent, args) {
      return Event.findByIdAndRemove(args.id);
    }
  }

}
