const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
port = 8080
const app = express()
app.use(cors())


app.get('/' ,(req , res ) =>{ 
    res.json('Running')
})


app.listen(port , (req, res ) =>{
    console.log(`Listennin on port ${port}`)
})


const db = mysql.createConnection({
    host  : "localhost" ,
    user : 'root',
    password : '',
    database : 'saffron'
})


app.get('/products' , (req , res ) =>{
    query = 'select * from products'
    db.query(query , (err , data) =>{
        res.json(data)
    })
})