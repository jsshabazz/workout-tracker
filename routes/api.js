const router = require("express").Router();
const workout = require("../models/workout.js");

router.get("/workout", (req, res) => {
    workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
        }
    }
}
    ])
        .then(dbworkouts => {
            res.json(dbworkouts);
          })
          .catch(err => {
            res.status(400).json(err);
          });
        });
    



router.post("/api/workout/bulk", ({ body }, res) => {
  workout.insertMany(body)
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
 workout.aggregate([
    {
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
    }
}
    }
]).limit(8)
    .sort({ _id: -1 }) 
    .then(dbworkout => {  
        res.json(dbworkout);
    }) 
.catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate({
            _id: req.params.id
    },
        {
       
           $push: { exercises: req.body }
        }
    )


      .then(dbworkouts => {
        res.json(dbworkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
    });
module.exports = router;
