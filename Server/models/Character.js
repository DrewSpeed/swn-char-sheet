const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: 'You need to name your character!',
      minlength: 1,
      maxlength: 25
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    class: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      default: 1,
      required: true
    },
    xp: {
      type: Number,
      default: 0,
      required: true
    },
    hp: {
      type: Number,
      required: true,
      maxhp: {
        type: Number,
        required: true
      }
    },
    strain: {
      type: Number,
      required: true,
      maxstrain: {
        type: Number,
        required: true
      }
    },
    effort: {
      type: Number,
      maxeffort: {
        type: Number,
      }
    },
    atkbonus: {
      type: Number,
      default: 0,
      required: true
    },

    username: {
      type: String,
      required: true
    },
    abilities: {
      type: Object
    },
    foci: {
      type: Object
    },
    attributes: [attributesSchema],
    skills: [skillsSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);


module.exports = Character;
