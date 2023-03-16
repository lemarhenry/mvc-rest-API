dotenv= require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const workoutRoutes =require('./Routes/workoutRoutes')

PORT = process.env.PORT
MONGO_URI = process.env.MONGO_URI




app.use(cors())

//middleware so we can access the request body in on the post request on workoutRoutes
app.use(express.json())

//middleware logger
app.use((req,res,next)=>{

console.log(req.path,req.method)
next()

})
//workRoutes middleware
app.use('/api/workouts',workoutRoutes)

//mongoose database connection
mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URI)
.then(()=>{
	app.listen(PORT,()=>{
	console.log(`Server is listening on ${PORT}`)
})

	console.log('connected to the database')
})
.catch((error)=>{
    console.log(error)
})

