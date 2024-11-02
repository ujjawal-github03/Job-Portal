//import from common js syntax->
// const express=require('express');


//module based approach(es6)/module js->
import express from 'express';
import dotenv from 'dotenv';
// DOTENV config
dotenv.config();
//rest object
const app=express();

// routes
app.get('/',(req,res)=>
{
    res.send("<h1>Welcome to Job portal</h1>")
})

const PORT=process.env.PORT || 3000;

app.listen(PORT,(req,res)=>
{
    console.log(`Servert is live at port ${PORT}`);
})