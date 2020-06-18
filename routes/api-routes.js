module.exports = function(app) {
    let db = require("../models");
    //finding all workouts
    app.get("/api/workouts", function(req,res) {
        db.Workout.find({}, (err,found) => {
            if(err) {
               res.json(err);
            } else {
                res.json(found);
            }
        });
    });
    
    // creating a workout
    app.post("/api/workouts", function(req,res) {
        db.Workout.create(req.body)
        .then(newWorkout => {
            console.log(newWorkout);
            res.json(newWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // update by id

    app.put("/api/workouts/:id", function(req,res) {
        db.Workout.findByIdAndUpdate(req.params.id,
            { $push: {exercises: req.body} },
            { new:true, runValidators:true }
        ).then(workout => res.json(workout))
        .catch(err => res.json(err));
    });

    app.get("/api/workouts/range", function(req,res){
        db.Workout.find({day: {$gte: req.start, $lte: req.end}})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => res.json(err));
    });
};