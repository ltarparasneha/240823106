const express=require("express")
const mongoose=require("mongoose")

const studentroute=require("./routes/studentroutes");
const app=express();
const PORT=3000;
app.use(express.json());

mongoose.connect(
    "mongodb+srv://tarparasneha_db_user:123@nodejs.pkikywx.mongodb.net/song",
);

app.use("/song",studentroute);

app.listen(PORT,()=>{console.log("server is running:"+PORT);
});