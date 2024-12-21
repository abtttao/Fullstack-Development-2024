const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
 } );
 

app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});

app.post("/", (req,res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2; // รวมค่า
    res.send("The calculation result is : " + result); // แสดงผลvar num1 = req.body.num1; // อ่านค่าจาก input1
    var num2 = req.body.num2; // อ่านค่าจาก input2
    var result = num1 + num2; // รวมค่า
    res.send("The calculation result is : " + result); // แสดงผล
  
 });
 
