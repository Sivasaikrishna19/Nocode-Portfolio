const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors');


const app = express()
app.use(express.json());
app.use(cors());

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

const dbURI = 'mongodb+srv://sivasaikrishna25301:Siva7781@cluster0.k7dflwp.mongodb.net/my_portfolio'

mongoose.connect(dbURI).then((result)=>{
    app.listen(5050);
}).catch((e)=>{console.log(e)});

app.get('/',(req,res)=>{
    res.send('hello')
    res.end()
})
app.use('/profile', require('./controllers/profileController'));



  
  