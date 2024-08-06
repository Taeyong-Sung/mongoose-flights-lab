import { Flight } from "../models/flight.js"

async function index(req, res) {
    try {
        const flights = await Flight.find({})
            res.render('flights/index',{
            title: 'All flights',
            flights
            })
        
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
}

function newFlight(req, res) {
    res.render('flights/new', {
      title: 'Add Flight'
    })
  }

export{
    index,
    newFlight as new,
}