const User = require('../models/users');
//both must start with exports

//get all the users
exports.getAllUsers= async (req,res)=>{
    const users= await User.find();
    res.render('index',{users});
}

//get single user
exports.getUserById= async(req,res)=>{
    const user=await User.findById(req.params.id);
    res.render('show',{user});
}
//create a new user
exports.createNewUser= async(req,res)=>{
    const {username, age}= req.body;
    const newUser= new User({username,age});
    await newUser.save();
    res.redirect('/');
}

//show edit-form
exports.showEditForm= async (req,res)=>{
    const user = await User.findById(req.params.id);
    res.render('edit',{user});
}
//update or edit a user
exports.editUser= async(req,res)=>{
    const {username, age}= req.body;
    await User.findByIdAndUpdate(req.params.id, { username, age });
    res.redirect('/');
}
//delete a user
exports.deleteUser= async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/');
}

exports.createForm= async (req,res)=>{
    res.render('create');
}


