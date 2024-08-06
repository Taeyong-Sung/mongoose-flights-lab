import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET/
router.get('/', flightsCtrl.index)
// GET
router.get('/new', flightsCtrl.new)

export { router }
