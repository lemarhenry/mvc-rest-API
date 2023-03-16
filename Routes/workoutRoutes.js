const express = require('express');
const router = express.Router();

const {createWorkout,updateWorkout,deleteWorkout,getAllworkouts,getWorkoutbyID} = require('../Controller/workoutController')



//GET all workout
router.get('/',getAllworkouts);
//GET a single workout
router.get('/:id',getWorkoutbyID);
//create a new workout
router.post('/',createWorkout)
//update an existing workout
router.patch('/:id',updateWorkout)
	
//delete the a workout with the given id
router.delete('/:id',deleteWorkout)


module.exports = router


