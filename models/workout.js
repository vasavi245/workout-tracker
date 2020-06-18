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
                     type: Number
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
    },
    {
        toJSON: {
            //Include any Virtual properties when data is requested
            virtuals: true
        }
    }
);

// aads a dynamically created property to schema
WorkoutSchema.virtual("totalDuration").get(function() {
    // use reduce function to reduce the array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;