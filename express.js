const express = require('express');
const app = express()
const port = 8080

const fs = require('fs');

//app.use(express.static('public'))

app.get('/ajax', (req,res)=>{
    const form = fs.readFileSync('./form.html');
    res.end(form)
})
app.post('/addName', (req, res) => {
    //Insert into db
    var body = req.body;
    res.send({
       fName: body.FName,
       lName: body.LName
    });
 });

 app.listen(8080,()=>{
    console.log("express is working")
})