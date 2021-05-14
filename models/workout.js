const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
        {
            type: { 
                type: String,
                required: "Please enter an exercise type"
            }, 
            name: {
                type: String,
                required: "Please enter an exercise name"  
            },
            duration: {
                type: Number,
                required: "Please enter a time"
            },
            weight: {
                type: Number,
                
            },
            reps: {
                type: Number,
                
            },
            sets: {
                type: Number,
                
            },
            distance: {
                type: Number,
                
            }
            

                
            
            
        }
    ]
   
  });