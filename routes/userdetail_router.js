var express=require('express');
var usermodel=require('../models/user_model');
var router=express.Router();

router.get('/',async (req,res)=>{
    
    var data=await usermodel.find();
    res.json(data);
});
router.post('/',async (req,res,next)=>{
 
    var reqbody={
        gender:req.body.gender,
        age:req.body.age,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        mobilenumber:req.body.mobilenumber,
        dob:req.body.dateofbirth,
        email:req.body.email,
        place:req.body.place,
        
    };
    const postData=await new usermodel(reqbody);
    postData.save().then(dbres=>{
        res.json(dbres);
    })
    
});
router.delete('/:id',async (req,res)=>{
    var id=req.params.id;
    await usermodel.findByIdAndDelete(id,(err,docs)=>{
        if(err)
        {
            console.log("ERror:\n");
            console.log(err);
        }else{
            res.json(JSON.stringify(docs));
        }
    });
});
router.put('/:id',async (req,res)=>{
    console.log(req.body);
    var id=req.params.id;
    console.log(id);
    const data=await usermodel.findByIdAndUpdate(id,req.body);
    res.json(data);
});

module.exports=router;