const express=require('express');
const bodyParser= require('body-parser');

const bcrypt =require('bcrypt-nodejs');
const cors=require('cors');

const app=express();

//db
const knex=require('knex');


const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',//= localhost
    user : 'postgres',
    password : 'houssam',
    database : 'smartop'
  }
});
//00
app.use(bodyParser.json());

app.use(cors());


app.get('/',(req,res)=>{
  db.raw(`select * from interventions order by surgeon`)
  .then(users=>{
    res.send(users.rows);
  })

  
})

app.get('/surgen',(req,res)=>{
  db.raw(`select * from surgen `)
  .then(users=>{
    res.send(users);
  })

  
})

app.listen(3001,()=>{

  console.log('app is runing on port 3001');
})