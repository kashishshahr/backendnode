var mongoose=require('mongoose');
var userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

});

module.exports=mongoose.model('userDetail',userschema)