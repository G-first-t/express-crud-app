const express= require('express');
const mongoose= require('mongoose');

const app = express();


const router=require('./routes/routes');


//set view
app.set('view engine', 'ejs');


//database connection
mongoose.connect('mongodb://localhost:27017/UsersDB')
    .then(()=>console.log('connected successfully'))
    .catch((err)=>console.error('Failed due to::',err));


app.use(router);

app.listen(3000, (err)=>{
    if(err){
        console.error('Failed due to ::',err);
    }
    console.log('application run on port 3000');
})