const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./models/model')
const port = 5000

app.use(express.urlencoded())
app.use(express.json())
app.use(cors({origin: "http://localhost:3000"}))


       

app.listen(port,(err)=>{
    if(err)console.log(err.message)
    else{
        connection
        console.log(`Listening on port : http://localhost:${port}`)
    }
        
})


app.get('/get',(req,res)=>{
    
    let sql = 'SELECT * FROM contacts'
    connection.query(sql , (err ,result)=>{
       if(err)
       {
        console.log(err.message)
       }
       else{
         res.json(result)
       }
    })
})


app.post("/add", (req, res)=>{
    console.table(req.body)
    let {fname , mname , lname , email, PhoneNo1 , PhoneNo2 , Address} = req.body;
    PhoneNo1 = Number(PhoneNo1)
    PhoneNo2 = Number(PhoneNo2)
    const sql = 'INSERT INTO contacts (FirstName, MiddleName, LastName, Email, PhoneNo1, PhoneNo2, Address) VALUES (?,?,?,?,?,?,?)';
    let values = [fname , mname , lname , email , PhoneNo1 , PhoneNo2 , Address];
    connection.query(sql, values , (error,result)=>{
        if(error)console.log(error.message)
        if(result) console.log(result)
    })
    
})


app.post('/search', (req, res) => {
    const { searchData, Option } = req.body;
    const sql = `SELECT * FROM contacts WHERE ${Option} = ?`;
    const values = [searchData];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            // Handle the results (e.g., send them back to the client)
            res.json(results);
        }
    });
});

app.get('/delete',(req,res)=>{
    console.log(req.query.id)
    let sql= `DELETE FROM contacts WHERE id = ?`
    let values = [req.query.id]
    connection.query(sql , values , (err , result)=>{
        if(err){
            console.error(err.message)
            res.status(500).json({error:'Internal server Error'})
        }
        else{
            console.log('deleted')
            res.send('contact deleted.')
        }

    })
})
app.post('/edit',(req,res)=>{
    let sql = 'UPDATE contacts SET FirstName = ? , MiddleName = ? , LastName = ? ,Email = ? , PhoneNo1 = ? , PhoneNo2 = ? , Address = ? WHERE id = ?';
    let {fname , lname , mname , email , PhoneNo1 , PhoneNo2 , Address , id} = req.body;
    PhoneNo1 = Number(PhoneNo1)
    PhoneNo2 = Number(PhoneNo2)
    let values = [fname , mname , lname , email , PhoneNo1 , PhoneNo2 , Address , id]

    connection.query(sql , values , (err , result)=>{
        if(err){
            console.error(err.message)
            res.status(500).json({error:'Internal server Error'})
        }
        else{
            console.log('Updated')
            res.send('contact updated.')
        }

    })
})