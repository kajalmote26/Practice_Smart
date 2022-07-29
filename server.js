var express=require('express');
var app=express();
app.get("/",(req,res)=>{
    res.send(
        "<h1>Just Practice</h1>"
        +"<hr/>"
        +"<h3> Practice for End Module"
        +"<br/>"
        +"<ol>"
        +"<li>Laptop</li>"
        +"<li>mobile</li>"
        +"<li>Watch</li>"
        +"<li>ABC</li>"
        +"<li>CVB</li>"

    );
});

var server=app.listen(9000);
console.log("Practice Listning on 9000");