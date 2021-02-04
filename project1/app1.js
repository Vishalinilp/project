var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var connection=require('./model/database');
//const connect = require('./model/database');

app.set("views","./views");
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/sign',function(req,res){
    console.log('signup page');
    res.render('sign');
})


app.post('/check',function(req,res){
  var name =req.body.username;
  var rollno =req.body.roll;
  var email=req.body.email;
  var password=req.body.pass;
  var confirmpass =req.body.con;
  var checkbox=req.body.checkbox;
  console.log("Submitted");
  
  connection.query('insert into signup values(?,?,?,?,?)',[name,rollno,email,password,confirmpass],(err,results)=>{
    if(err)throw err;
    if(results){
      console.log("Values Inserted");
      res.render('login');
    }
  })

 /* res.writeHead(200,{'Content-type':'text/html'});
  res.write("<h2>Registration done successfully</h2>");
  res.end();*/
})

app.get('/login',function(req,res){
    console.log('login page');
    res.render('login');
})
app.post('/validate',function(req,res){
    var Email =req.body.email;
    var Password=req.body.pass;
    console.log("Login Done");
    /*res.send(`Username:${Email},Password:${Password}`);*/
    connection.query('select email from signup where email like ?',[Email],(err,results)=>{
        if(err)throw err;
        if(results){
          connection.query('select password from signup where email like ? and password like ?',[Email,Password],(err,results)=>{
            if (results)
            {
              connection.query('select student_details.*,signup.email from student_details join signup on student_details.rollno=signup.rollno where signup.email like ?',[Email],(err,data)=>{
                if(err) throw err;
                if(data)
                {
                  res.render("students",{userdata:data});
                  console.log(data);
                }
                
              })
            }
          })
        }
      })
   
})


app.listen(5004,()=>{
 console.log("Server is running at the port 5004");
})
