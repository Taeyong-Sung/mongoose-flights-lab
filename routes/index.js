import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/
router.get('/', function(req, res) {
  res.render('index', { title: 'Mongoose Movies' })
})

export { router }