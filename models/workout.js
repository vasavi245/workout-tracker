const mongoose = require("mongoose");

//creating schema

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now
         },
         exercises: [
             {
                 type: {
                     type: String,
                     trim: true,
                     required: "Enter the exercise type"
                 },
                 name: {
                     type: String,
                     trim: true,
                     required: "Enter the name of exercise"
                 },
                 duration: {
                     type: Number,
                     required: "Enter the duration of the exercise"
                 },
                 weight: {
                     type: Number
                 },
                 reps: {
                     type: Number
                 },
                 sets: {
                     type: Number
                 },
                 distance: {
                     type: Number
                 }
             }
         ]
    }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;