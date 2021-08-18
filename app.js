var express=require('express');
var app=express();
var mongoose=require('mongoose');
var cors=require('cors');
app.use(cors());

var bodyParser=require('body-parser');
var userdetailRouter=require('./routes/userdetail_router');
// var userschema=require('./models/user_model');

app.use(bodyParser.json());

app.use('/',userdetailRouter);
app.use('/getdata',userdetailRouter);
app.use('/postdata',userdetailRouter);
app.use('/deletedata',userdetailRouter);
app.use('/updatedata',userdetailRouter);

mongoose.connect('mongodb+srv://kashishshahr:kashishshahr@cluster0.eeaxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true },(err)=>{
    if(!err)
    {
        console.log("Database Conected");
    }else{
        console.log("Database Not Conected");
    }
});
const port=process.env.PORT||3000;
app.listen(port,err=>{
    if(!err)
    {
        console.log("App is Listening");
    }else{
        console.log("App Crashed");
    }
});