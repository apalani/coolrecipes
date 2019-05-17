const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    recipeId: {
      type: Schema.Types.ObjectId,
      ref: "recipe"
    },
    comment: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", CommentSchema);
