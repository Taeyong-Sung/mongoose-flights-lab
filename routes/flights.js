import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET / INDEX
router.get('/', flightsCtrl.index)
// GET / NEW
router.get('/new', flightsCtrl.new)
// GET / POST
router.post('/', flightsCtrl.create)
// DELETE / FLIGHTS / :flightID
router.delete('/:flightId', flightsCtrl.delete)
// PUT flights/:flightId
router.put('/:flightId', flightsCtrl.update)
// SHOW skills/:skillID
router.get('/:flightId', flightsCtrl.show)
// EDIT flights/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)
// POST flights/:flightsId/createTicket
router.post('/:flightId/tickets', flightsCtrl.createTicket)
//POST localhost:3000/flights/:flightId/meals/:mealId
router.post('/:flightId/meals', flightsCtrl.addToFoodList)


export { router }
