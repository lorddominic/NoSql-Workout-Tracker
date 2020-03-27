const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        }
    }]

});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;