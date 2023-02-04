const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    Strength: {
      type: Number,
      required: true,
      maxlength: 2,
      strmod: {
          type: String,
          maxlength: 2
      }
    },
    Dexterity: {
        type: Number,
        required: true,
        maxlength: 2,
        dexmod: {
            type: String,
            maxlength: 2
        }
      },
      Constitution: {
        type: Number,
        required: true,
        maxlength: 2,
        conmod: {
            type: String,
            maxlength: 2
        }
      },
      Intelligence: {
        type: Number,
        required: true,
        maxlength: 2,
        intmod: {
            type: String,
            maxlength: 2
        }
      },
      Wisdom: {
        type: Number,
        required: true,
        maxlength: 2,
        wismod: {
            type: String,
            maxlength: 2
        }
      },
      Charisma: {
        type: Number,
        required: true,
        maxlength: 2,
        chamod: {
            type: String,
            maxlength: 2
        }
      },
      Saves: {
          Physical: {
              type: Number,
              required: true,
              default: 15
          },
          Evasion: {
            type: Number,
            required: true,
            default: 15
        },
        Mental: {
            type: Number,
            required: true,
            default: 15
        }
      }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = reactionSchema;