const express=require("express");
const app=express();
const port=process.env.port || 3000;
const client=require("./connection.js");
const bodyParser=require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
var getResult=function(dept)
{
    return new Promise(function(resolve,reject){
        client.search({  
            index: 'department',
            type: 'depInfo',
            body: {
              query: {
                match:{
                  "title":dept
                }
                
              }
            }
          },function (error, response,status) {
              if (error){
                reject(error);
              }
              else {
                console.log("--- Response ---");
                console.log(response);
                resolve(response);
                console.log("--- Hits ---");
                
              }
          });
          
    })
}
app.get("/",function(req,res){
    res.sendFile("home.html",{root:__dirname});
})

app.listen(port,function(err){
    if(err)
    throw err;
    else
    console.log("App running on port "+port);
})