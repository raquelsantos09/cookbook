const { Schema, model } = require('mongoose')

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String,
     required: true,
      enum: ["vegan", "vegeterian", "soup", "salad", "dessert", "breakfast", "maindish", "appetizers", "drinks"],
    },
    origin: {
      type: String,
    },
    servingSize: {
      type: Number,
    required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    cookingTime: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
     required: true,
    },
    directions: {
      type: String,
   required: true,
    },
    image: {
      data: Buffer,

      contentType: String,
    },
    videoURL: {
      type: String,
    },

  }
)

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;