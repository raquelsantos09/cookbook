const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')

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
  
  router.get("/all", async (req, res) =>{
    try{
        const allRecipes = await Recipe.find()
        res.render("recipe/all", {allRecipes})
    }
    catch (error) {
        console.log(error)
        res.redirect("/")
    }
})

router.get('/myRecipes', async (req, res,) => {
  try {

  const myRecipes = await Recipe.find({author: User._id})
  console.log(myRecipes)
  res.render("recipe/myRecipes", {myRecipes})
} 
catch (error) {
  console.log('Route to my recipes', error)
}
})



router.get('/myFavRecipes',  (req, res,) => {
  
  res.render("recipe/myFavRecipes")

})


router.get("/:id", async (req, res) => {
  try {
      const recipeFound = await Recipe.findById(req.params.id).populate("author")
      res.render("recipe/recipeDetails", { recipeFound })
  }
  catch(error) {
      console.log(error)
      res.redirect("/recipe")
  }
})


router.get("/:id/update", async (req, res) =>{
  try {
      const allUsers = await User.find()
      const recipeFound = await Recipe.findById(req.params.id).populate("author")
      res.render("recipe/updateRecipe", { recipeFound, allUsers })
  }
  catch(error) {
      console.log(error)
      res.redirect("/recipe/all")
  }
})



router.post("/:id/update", async (req, res) =>{
  try {
      await Recipe.findByIdAndUpdate(req.params.id, {...req.body})
      res.redirect(`/recipe/${req.params.id}`)
  }
  catch(error) {
      console.log(error)
      res.redirect("/recipe/all")
  }
})


router.post("/:id/delete", async (req, res) =>{
  try {
      await Recipe.findByIdAndDelete(req.params.id)
      res.redirect("/recipe/all")
  }
  catch(error) {
      console.log(error)
      res.redirect("/recipe/all")
  }
})



module.exports = router;
