const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

exerciseName:{
	type:String,
	required:true,
},
reps:{
	type:Number,
    required:true,
},
weights:{
	type:Number,
	required:true,
},
sets:{
	type:Number,
	required:true,
}


  
},{timestamps:true});

//exports the workout schema for workout model to use to create the collection on the database
module.exports = mongoose.model('Workout', workoutSchema);