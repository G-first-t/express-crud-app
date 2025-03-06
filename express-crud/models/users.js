
//first step is  creating user model
const mongoose= require('mongoose');



//mongoose is good in schema rather than db Collection
const UserSchema= new mongoose.Schema({
    username: {type: String},
    age:{type:Number}
});



//exporting the module
module.exports=mongoose.model('User',UserSchema);

