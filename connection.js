var elasticsearch=require('elasticsearch');
var dotenv=require("dotenv")
dotenv.config();
var client = new elasticsearch.Client( {  
  hosts: [
    process.env.URL
  ]
});

module.exports = client;  