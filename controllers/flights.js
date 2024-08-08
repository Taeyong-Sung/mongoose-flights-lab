import { Flight } from "../models/flight.js";

async function index(req, res) {
  try {
    const flights = await Flight.find({});
    res.render("flights/index", {
      title: "All Flights",
      flights,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flights",
  });
}

async function create(req, res) {
  try {
    await Flight.create(req.body);
    res.redirect("/flights");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}

async function deleteFlight(req, res) {
  try {
    await Flight.findByIdAndDelete(req.params.flightId);
    res.redirect("/flights");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}

async function update(req, res) {
  try {
    await Flight.findByIdAndUpdate(req.params.flightId, req.body);
    res.redirect(`/flights/${req.params.flightId}`);
  } catch (error) {
    console.log(error);
    res.redirect(`/flights/${req.params.flightId}`);
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightId);
    res.render("flights/show", {
      flight,
      title: "Flight Details",
    });
  } catch (error) {
    console.log(error);
    res.redirect("/flights");
  }
}

async function edit(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightId);
    res.render("flights/edit", {
      flight,
      title: "Edit Flight",
    });
  } catch (error) {
    console.log(error);
    res.redirect("/flights");
  }
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,
  update,
  show,
  edit,
};
