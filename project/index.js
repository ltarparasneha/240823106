
const { Router } = require("express");
const express = require("express")
const app = express()
const PORT=80;
app.use(express.json())


const StudentRouter=require("./route/studentRoute.js")
app.use("/student",StudentRouter)

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}/`)
})