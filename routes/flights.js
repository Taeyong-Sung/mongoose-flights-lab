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
// SHOW localhost:3000/skills/:skillID
router.get('/:flightId', flightsCtrl.show)



export { router }
