//workout model
const Workout = require('../Model/workoutsModel')

const mongoose = require('mongoose')

//create a new workout function
const createWorkout = async(req,res) =>{
	const {exerciseName,reps,weights,sets}=req.body;

		try {
			const workout = await Workout.create({exerciseName,reps,weights,sets})

			res.status(200).json({
			
				message: 'Workout created successfully',
                 data: workout
		})

		}catch(error){
			res.status(400).json({

                message: 'Something went wrong',
				error: error.message

            })
		}
}
//get all workouts
const getAllworkouts = async(req,res)=>{
	//get all workout and sort them by descending order
		const workout= await Workout.find({}).sort({createdAt:-1})
		res.json({
		message: 'All workouts',
		data: workout
	})
}
//get a workout by id
const getWorkoutbyID = async(req,res)=>{
		const {id} = req.params
		
			if(!mongoose.Types.ObjectId.isValid(id)){
				return res.status(401).json({
                    message: 'Not a valid Id'
                })
            }

			const workout = await Workout.findById(id)

				if(!workout){
		
			return res.status(404).json({
				message: 'No workout with that ID'
			})
				}
			res.status(200).json({
			
				message: `Workout for ${id}` ,
                data: workout
			
		})
		
}
//update workout by id
const updateWorkout = async (req,res)=>{
		const {id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(401).json({
                    message: 'Not a valid Id'
                })
            }
		try {
			const workout = await Workout.findOneAndUpdate({_id:id},{
				...req.body
			})

		if(!workout){
		
			return res.status(404).json({
				message: 'No workout with that ID'
			})
		}
			res.status(200).json({

				message: 'Workout updated successfully',
                data: workout
		})

		}catch(error){
			res.status(400).json({

                message: 'Something went wrong',
				error: error.message

            })
		}




}
//delete workout by id
const deleteWorkout= async(req,res)=>{
	const {id} = req.params

		if(!mongoose.Types.ObjectId.isValid(id)){
				return res.status(401).json({
                    message: 'Not a valid Id'
                })
            }
		
		try{
			const workout = await Workout.findByIdAndDelete({_id:id})
				if(!workout){

					return res.status(400).json({
                        message: 'No workout with that ID'
                    })
				}
			res.status(200).json({
			
				message: 'Workout deleted successfully',
				data: workout   
			})     
		}catch(error){

		
			res.status(400).json({

                message: 'Something went wrong',
				error: error.message

            })
		}
}




module.exports = {
	createWorkout,
	getWorkoutbyID,
	getAllworkouts,
	updateWorkout,
	deleteWorkout
	}