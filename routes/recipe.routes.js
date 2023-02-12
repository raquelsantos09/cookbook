const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')

router.get('/all', async (req, res, next) => {
    try {
      const allRecipes = await Recipe.find()
      console.log('All recipes :', allRecipes)
      res.render('recipe/all', { hopper: allRecipes })
    } catch (error) {
      console.log('Route to all recipes', error)
    }
  })
/* GET new recipe page */
router.get('/new',  (req, res, next) => {
    res.render('recipe/new')
  })
  
  router.post('/new', async (req, res) => {
    const body = req.body
    console.log(body)
    
    const newRecipe = await (await Recipe.create({ ...body, ingredients: body.ingredients.split(' ') }))
    res.render('recipe/one',{newRecipe})
  })
  
  router.get("/", async (req, res) =>{
    try{
        const allRecipes = await Recipe.find()
        res.render("recipe/all", {allRecipes})
    }
    catch (error) {
        console.log(error)
        res.redirect("/")
    }
})

router.get("/:id", async (req, res) => {
  try {
      const recipeFound = await Recipe.findById(req.params.id)
      res.render("recipe/recipeDetails", { recipeFound })
  }
  catch(error) {
      console.log(error)
      res.redirect("/recipe")
  }
})




module.exports = router;
