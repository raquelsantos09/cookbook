# Project's name
cookbook

https://cookbookapp.adaptable.app
[Click here to see deployed web app] 

## Description
Recipe app with featured vegan and vegetarien categories to find, store and create recipes.


## MVP
- Express
- Mongoose for models and database communication
- 2 Models - Recipe and User
- Validation on User Model
- Sign up, log in & log out functionality with encrypted password and authorization
- Logged-in users are authorized to create, update and delete a recipe
- Implementation of all CRUD actions


## Data structure
Models: 
Cookbook app uses two models - Recipe and User

Routes:
There are three type of routes;
- Index routes - designed for users who are not logged in or signned up. 
    Includes; Home page, all recipes, category based recipes 
- Auth routes - designed for authentication.
    Includes; sign-up, log-in , profile and log-out
- Recipe routes - designed for recipe pages
    Includes pages for; create a recipe, recipe is created, recipe details, update & delete recipes.

Navigation bar: two navigation bars are designed on for the users who are not authenticated yet and one for the auth. users.

CRUD is applied - user can Create, Read, Update and Delete a recipe.

## States y States Transitions
For the users not signed-up or logged-in;
- Homepage: a page showing all recipes & category based recipes
If a user would like to create a recipe;
- User needs to sign-up or log-in in order to create a recipe.
- User can see the recipe details and update & delete them if it is needed.
- User is able to change user details with the profile page.


## Backlog
- Logout is not working properly.
- Only auth. users should be able to update/delete recipes.
- Search bar is not functioning now.
- Add to favourite feature is not working now.

## Task
- Logout routh will be worked.


## Links

- [Trello Link] https://trello.com/b/s8KQo2j1/cookbook
- [Slides Link](https://docs.google.com/presentation/d/1KVoY_QBCCMX-dj2AVdrp9dmXR0D6dfHZPaqEQMoPSbI/edit?usp=sharing)
- [Github repository Link] https://github.com/raquelsantos09/cookbook.git
- [Deployment Link] https://cookbookapp.adaptable.app