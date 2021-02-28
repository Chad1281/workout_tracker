const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
      db.Workout.find({}, (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.json(data);
        }
      });    
    }
);

// router.get("/api/workouts", (req, res) => {
//   db.Workout.aggregate([
//     {$addField: {
//     totalDuration: { $sum: "$exercises.duration"}
//   }   
// }]).then((data) => {
//     res.json(data);
// }).catch((error) => {
//     res.sendStatus(500).json(error);
// });    
// });

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.query.id)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
      
        {id: req.params.id}, 
        console.log("check" + req.body),
        // req.body,
        {$addToSet: {excercises: req.body}}
        )
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        })
        // {$set: {excercises: req.body}},
        // (error, data) => {
        // if (error) {
        //     res.send(error);
        // } else {
        //     res.send(data);
        // }
        // }    
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });    
  }
);

module.exports = router;