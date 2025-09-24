const sequelize=require("sequelize");
const db=require("../db");
const { type } = require("os");

const student=db.define("student",{
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequelize.STRING,
        allowNull:false,
    },
     city:{
        type:sequelize.STRING,
        allowNull:false,
    },
     email:{
        type:sequelize.STRING,
        allowNull:false,
        unique:true,
    },
})

db.sync()
.then(()=>{
    console.log("student table created successfully");
})
.catch((err)=>{
    console.error("unable to create table:",err);
})

module.exports=student;
