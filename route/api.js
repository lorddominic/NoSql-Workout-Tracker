const router = require("express").Router();
const path = require("path");
const db = require("../models");
router.get("/api/workouts", (req, res) => {

    db.Workout.find({}).then((data) => {
            console.log(data)
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})
router.post("/api/workouts", (req, res) => {
    console.log("INSIDE API ROUTE")
    db.Workout.create({}).then((data) => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})
router.put("/api/workouts/:id", (req, res) => {
    console.log("INSIDE put ROUTE", req.params.id, req.body)
    db.Workout.create({}).then((data) => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})
module.exports = router;