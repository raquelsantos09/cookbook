const express = require('express');
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard')
const router = express.Router();
const Recipe = require('../models/Recipe.model')
const User = require('../models/User.model')
const fileUploader = require('../config/cloudinary.config')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get('/profile', isLoggedIn, (req, res) => {
  console.log('SESSION =====> ', req.session)

  res.render('profile', { user: req.session.user })
})

router.get("/category/breakfast", async (req, res, next) => {
  try {
    const body = req.body
    const catRecipes = await Recipe.find({category: "breakfast" })
    console.log(body)
    res.render("category/breakfast", { catRecipes })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
});

router.get("/category/vegan", async (req, res, next) => {
  try {
    const body = req.body
    const catRecipes = await Recipe.find({category: "vegan" })
    res.render("category/vegan", { catRecipes })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
});

router.get("/category/vegetarian", async (req, res, next) => {
  try {
    const body = req.body
    const catRecipes = await Recipe.find({category: "vegetarian" })
    res.render("category/vegetarian", { catRecipes })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
});

router.get("/category/appetizers", async (req, res, next) => {
  try {
    const body = req.body
    const catRecipes = await Recipe.find({category: "appetizers" })
    res.render("category/appetizers", { catRecipes })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
});

router.get("/category/maindish", async (req, res, next) => {
  try {
    const body = req.body
    const catRecipes = await Recipe.find({category: "maindish" })
    res.render("category/maindish", { catRecipes })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
});

router.get("/category/soup", async (req, res, next) => {
  try {
    const body = req.body
    const catRecipes = await Recipe.find({category: "soup" })
    res.render("category/soup", { catRecipes })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
});

router.get("/category/salad", async (req, res, next) => {
  try {
    const body = req.body
    const catRecipes = await Recipe.find({category: "salad" })
    res.render("category/salad", { catRecipes })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
});

router.get("/category/dessert", async (req, res, next) => {
  try {
    const body = req.body
    const catRecipes = await Recipe.find({category: "dessert" })
    res.render("category/dessert", { catRecipes })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
});

router.get("/category/drinks", async (req, res, next) => {
  try {
    const body = req.body
    const catRecipes = await Recipe.find({category: "drinks" })
    res.render("category/drinks", { catRecipes })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
});




module.exports = router;
