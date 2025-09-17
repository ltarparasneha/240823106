const sequalize=require("sequelize")
const db=new sequalize('student','root','',{
    host:"localhost",
    dialect:"mysql",
});
db.authenticate()
.then(()=>{
    console.log ("connection successfully.");
})
.catch((err)=>{
    console.error("unable to database:",err);
})

const student=db.define("student",{
    id:{
        type:sequalize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:sequalize.STRING,
        allowNull:false
    },
    city:{
        type:sequalize.STRING,
        allowNull:false
    },
    email:{
        type:sequalize.STRING,
        allowNull:false
    }
})

student.sync()
    .then(()=>{
        console.log("student table created");
    })
    .catch((err)=>{
        console.log("unable to create table:",err)
    })

student.create({
        name:"sneha",
        city:"rajkot",
        email:"sneha@gmail.com",
    })
     .then(()=>{
        console.log("data inserted successfully");
    })
    .catch((err)=>{
        console.log("unable to insert table :",err)
    })

student.findAll()
   .then((students)=>{
        console.log(student);
    })
    .catch((err)=>{
        console.log("unable to fetch data :",err)
    }) 

student.findByPk(2)
.then((student)=>{
    console.log(student);
})
.catch((err)=>{
    console.log("unable to fetchdata:",err);
})

student.update({
    name:"abc",city:"kalavad"}, 
    {where:{id:2},
})
.then(()=>{
    console.log("data updated");
})
.catch((err)=>{
    console.log("unable to update:",err);
})

student.destroy({
     
    where:{id:2},
})
.then(()=>{
    console.log("data deleted");
})
.catch((err)=>{
    console.log("unable to delete:",err);
})