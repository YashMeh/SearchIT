var client = require('./connection.js');

var createIndex=function(indexName)
{
//Creation of an Index
client.indices.create({  
  index: indexName
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});


}

//Do bulk indexing from the csv

//Search