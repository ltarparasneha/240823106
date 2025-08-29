exports.index=(req,res)=>{
    res.send('Hello , MCA student')
}

exports.show=(req,res)=>{
    res.send(`Show student with ID:${req.params.id}`)
}

exports.store=(req,res)=>{
    res.send(`insert ${req.body.name} into database`)
}

exports.update=(req,res)=>{
    res.send(`update ${req.params.id}-${req.body.name} into database`)
}

exports.destroy=(req,res)=>{
    res.send(`delete a record`)
}
