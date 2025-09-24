const { error } = require("console");
const student=require("../model/Student");
const { execPath } = require("process");
exports.index=(req,res)=>{
    student.findAll()
    .then((students)=>{
        console.log("all student retrived successfully:",students);

        res.send({message:"student retrived successfully:",data:students});

    })
    .catch((error)=>{
        console.log("all student retrived successfully:",error);

        res.send({message:"student retrived successfully:",error:error});

    })
};

exports.store=(req,res)=>{
    student.create(req.body)
    .then((newstudent)=>{
        console.log("student created successfully:",newstudent);

        res.send({message:"student created successfully:",data:newstudent});

    })
     .catch((error)=>{
        console.log("error creating student:",error);

        res.send({message:"error creating student:",error:error});

    })
}
exports.update=(req,res)=>{
    student.update(req.body,{where:{id:req.params.id}})
    .then(()=>{
        console.log("student updated successfully:");

        res.send({message:"student updated successfully:",data:req.body});

    })
     .catch((error)=>{
        console.log("error updating student:",error);

        res.send({message:"error updating student:",error:error});

    })
}
exports.delete=(req,res)=>{
    student.destroy({where:{id:req.params.id}})
    .then(()=>{
        console.log("student deleted successfully:");

        res.send({message:"student created successfully:"});

    })
     .catch((error)=>{
        console.log("error deleted student:",error);
    })
}