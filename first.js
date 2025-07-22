// import add from "./add.js";
// const add=require("./add.js")
// console.log(add(11,22));

// import path from "path"
// const path=require("path")
// console.log(path.basename("myfile.txt"))
// console.log("directory name:",__dirname)
// console.log("full path:",path.resolve(__dirname,"myfile.txt"))

// const moment=require("moment")
// console.log("current data and time:",moment().format("dd-mm-yyyy hh:mm:ss"))

// const { capitalize } = require("lodash")
// const ls=require("lodash")
// console.log("capitalize:",ls,capitalize("hello world"))


const fs=require("fs")
fs.writeFile("myfile.txt",'hello mca -z2 class',(err)=>{
    if(err)throw err;
    console.log("file has been saved..")
})

fs.readFile("myfile.txt","utf8",(err,data)=>{
    if(err)throw err;
    console.log("file contant:",data)
})

