const mysql=require('mysql');
const connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'vis2807',
    database:'mysql'
    

});
module.exports=connect;