const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
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
      enum: ["vegan", "vegetarian", "soup", "salad", "dessert", "breakfast", "maindish", "appetizers", "drinks"],
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
    instructions: {
      type: String,
   required: true,
    },
    imageURL: {
      type: String,
    },
    videoURL: {
      type: String,
    },
  },
    {
    timestamps: true
  }
)

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;