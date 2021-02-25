

app.get("/api/workouts", (req, res) => {
      db.workout.findAll({}, (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.json(data);
        }
      });    
    });