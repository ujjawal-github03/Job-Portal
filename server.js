//import from common js syntax->
// const express=require('express');

//module based approach(es6)/module js->
// Packages imports
import express from 'express';
import 'express-async-errors'
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
// File imports
import connectDB from './config/db.js';
// Routes import
import testRoutes from './routes/testRoute.js';
import authRoutes from './routes/authRoute.js'
import errorMiddleware from './middlewares/errorMiddleware.js';





// DOTENV config
dotenv.config();

// MongoDB connection->
connectDB()


//rest object
const app=express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.get('/',(req,res)=>
{
    res.send("<h1>Welcome to Job portal</h1>")
})
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);

// validation middleware
app.use(errorMiddleware);






// Port and listen
const PORT=process.env.PORT || 3000;
app.listen(PORT,(req,res)=>
{
    console.log(`Servert is live at port ${PORT}`);
})