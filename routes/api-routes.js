const db = require("../models");
module.exports = function(app) {
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

    // update by id

    app.put("/api/workouts/:id", function(req,res) {
        db.Workout.findByIdAndUpdate(req.params.id,
            { $push: {exercises: req.body} },
            { new:true }
        ).then(workout => res.json(workout))
        .catch(err => res.json(err));
    });

    
    // creating a workout
    app.post("/api/workouts", function(req,res) {
        db.Workout.create({day: Date.now()})
        .then(workout => {
            console.log(workout);
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    
    app.get("/api/workouts/range", function(req,res){
        db.Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => res.json(err));
    });
};