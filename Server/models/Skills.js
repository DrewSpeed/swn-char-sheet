const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
  {
    combat: {
        punch: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
          },
          stab: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
          },
          shoot: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
          },
    },
    basic: {
        administer: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
          },
        connect: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        exert: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        fix: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        heal: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        know: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        lead: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        notice: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        perform: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        pilot: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        program: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        sneak: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        survive: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        talk: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        trade: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
        work: {
            type: Number,
            required: true,
            default: 0,
            maxlength: 2
        },
    },
    psionic: {
        biopsionics: {
            type: Number,
            maxlength: 2
        },
        metapsionics: {
            type: Number,
            maxlength: 2
        },
        precognition: {
            type: Number,
            maxlength: 2
        },
        telekenesis: {
            type: Number,
            maxlength: 2
        },
        precognition: {
            type: Number,
            maxlength: 2
        },
        teleportation: {
            type: Number,
            maxlength: 2
        },
    },
    magic: {
        castmagic: {
            type: Number,
            maxlength: 2
        },
        knowmagic: {
            type: Number,
            maxlength: 2
        },
        sunblade: {
            type: Number,
            maxlength: 2
        },
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = reactionSchema;