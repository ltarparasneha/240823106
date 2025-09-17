const song=require("../models/song");
exports.index=(req,res)=>
{
    song.find()
    .then((allSongs) => {
        console.log("all songs retrived successfully:",allSongs);
     res.send({message:"songs retrived successfully",allSongs});   
    })
    .catch((error)=>{console.log("error retriving songs:",error);});

};
exports.show=(req,res)=>{
    song.findById(req.params.id)
    .then((song)=>{console.log("all song retrived successfully:",song);
    res.send({message:"song retrived successfully",data:song});
})
.catch((error)=>{console.error("error retrieved songs:",error);});
};

exports.store=(req,res)=>{
    const newSong=new song({
        title:req.body.title,
        artist:req.bosy.artist,
        category:req.body.category,
        album:req.body.album,
        url:req.body.url,
        photo:req.body.photo,
        year:req.body.year,
    });
    newSong
    .save()
    .then(()=>{
       console.log( "new song added successfully");
    })
    .catch((error)=>{console.error("error adding songs:",error);});
    res.send({message:"data stored successfully",data:newSong});
};
exports.update=(req,res)=>{
    song.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((updatedSong)=>{
        console.log( "updated successfully");
        res.send({message:"song updated successfully",data:updatedSong});
     })
     .catch((error)=>{console.error("error updating songs:",error);});
    
 };
 exports.delete=(req,res)=>{
    song.findByIdAndDelete(req.params.id)
    .then(()=>{
        console.log( "deleted successfully");
        res.send({message:"song deleted successfully"});
     })
     .catch((error)=>{console.error("error deleted songs:",error);});
    
 };
