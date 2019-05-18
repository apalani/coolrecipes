const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema(
  {
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    name: {
      type: String,
      required: true
    },
    ingredients: [String],
    description: [String],
    prepTimeinMins: {
      type: Number,
      required: true
    },
    cookTimeinMins: {
      type: Number,
      required: true
    },
    serves: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String
    },
    videoUrl: {
      type: String
    },
    ratings: {
      count: {
        type: Number
      },
      value: {
        type: Number
      }
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("recipe", RecipeSchema);
