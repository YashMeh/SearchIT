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
                  title:{
                    query:dept,
                    fuzziness:2
                  }
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
app.post("/search",function(req,res){
    var q=req.body.q;
    getResult(q).then(function(arr){
          arr=arr.hits.hits;
          console.log(arr);          
          res.render("result",{arr:arr});
    }).catch(function(err){
        console.log(err);
        res.send("SORRY SOME ERROR OCCURED")
    })
})

app.listen(port,function(err){
    if(err)
    throw err;
    else
    console.log("App running on port "+port);
})