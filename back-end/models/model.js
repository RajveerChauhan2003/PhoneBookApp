const mysql = require('mysql')

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'contacts_db'
})
connection.connect((error)=>{
    if(error){
        console.log(error.message)
    }
    else{
        console.log('Database Conntected.')    
    }
})

module.exports = connection;