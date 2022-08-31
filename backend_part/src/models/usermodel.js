const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
});

const userDetails=new mongoose.modelNames("userdetail",userSchema);

module.exports=userDetails;
