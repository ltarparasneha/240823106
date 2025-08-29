const express = require("express")
const Router=express.Router();
const{ 
    createValidator,
    updateValidator,
    validate,
}= require("../validatator/studentvalidatator");

const{
    index,
    show,
    store,
    update,
    destroy,
}=require("../controller/studentController.js")

Router.get("/",index)
Router.get("/show/:id",show)
Router.post("/store", (req, res, next) => {
const result = validate(createValidator, req.body);

  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }

  studentController.store(req, res, next);
});
Router.put("/update/:id",update)
Router.delete("/delete/:id",destroy)

module.exports=Router;