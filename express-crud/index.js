const express= require('express');
const mongoose= require('mongoose');
const User= require('./models/users');

const app = express();



const router=require('./routes/routes');


//set view
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


//some dummy data

let users=[
{ username:'Gregory', age:21},
{username:'Julio', age:22},
{username:'magdalena', age:30},
{username:'Cosmas',age:42}
];



//database connection
mongoose.connect('mongodb://localhost:27017/UsersDB')
    .then(()=>{console.log('connected successfully');


    let users=[
        { username:'Gregory', age:21},
        {username:'Julio', age:22},
        {username:'magdalena', age:30},
        {username:'Cosmas',age:42}
        ];
    
    
    User.insertMany(users);
    }
)
    .catch((err)=>console.error('Failed due to::',err));


app.use(router);

app.listen(3000, (err)=>{
    if(err){
        console.error('Failed due to ::',err);
    }
    console.log('application run on port 3000');
})