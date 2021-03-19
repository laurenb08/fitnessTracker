const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter the type of workout",
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                distance: {
                    type: Number
                },
                duration: {
                    type: Number,
                    required: "Enter a duration for your workout"
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                }
            }
        ]
    },
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;