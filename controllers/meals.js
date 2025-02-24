import { Meal } from '../models/meal.js'

async function newMeal(req, res) {
    try {
      const meals = await Meal.find({})
      res.render('meals/new', {
        title: 'Add meal',
        meals,
      })
    } catch (error) {
      console.log(error)
      res.redirect('/flights')
    }
  }

  async function create(req, res) {
    try {
      const meal = await Meal.create(req.body) 
      res.redirect('/meals/new')
    } catch (error) {
      console.log(error)
      res.redirect('/meals/new') 
    }
  }

export {
  newMeal as new,
  create,

}