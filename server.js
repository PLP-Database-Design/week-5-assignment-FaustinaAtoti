//declare dependences / variables

const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require ('dotenv');
const cors = require('cors');

app.use(express.json());
app.use(cors());
dotenv.config();

//Connect to the database **

const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME
    });

//Check if db connection works
db.connect((err) => {
    //No wedding
    if(err) return console.log("Error connecting to the mysql db");

//Yes wedding
    console.log("Connected to mysql successfully as id:",
        db.threadId)


        /// Your code goes here
        //GET method

        app.set('view engine','ejs');
        app.set('views',__dirname +'/views');



        //Question 1 
        //Data is the name of file in this folder
        app.get('/data',(req,res)=>{
          //retrieve data
          db.query('SELECT * FROM patients',(err,results) =>{
            if(err){
            console.error(err);
        res.statusMessage(500).send('Error retrieving data');
    }else{
        //Display the records to the browser
        res.render('data',{results:results});
    }
          });  
        });
//Above is the ending of added code to initial


//Question 2

app.set('view engine','ejs');
        app.set('views',__dirname +'/views');

        //provider is the name of file in this folder
        app.get('/data',(req,res)=>{
            //retrieve data
            db.query('SELECT * FROM providers',(err,results) =>{
              if(err){
              console.error(err);
          res.statusMessage(500).send('Error retrieving data');
      }else{
          //Display the records to the browser
          res.render('data',{results:results});
      }
            });  
          });
  //Above is the ending of added code to initial
  
  
  
           
  //Above is the ending of added code to initial
  





        app.listen(process.env.PORT,()=>{
console.log(`Server listening on port ${process.env.PORT}`);


//send message to the browser
console.log('Sending message to browser...');
app.get('/',(req,res) => {
res.send('Server started succesfully Wedding can go On!!')
    })
        }); 
});
