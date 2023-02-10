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
      type: String,
      ref: "User",
    },
    category: {
      type: String,
      required: true,
      enum: ["Vegan", "Vegeterian", "Soup", "Salad", "Dessert", "Breakfast", "Main dish", "Appetizers", "Drinks"],
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

    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe
