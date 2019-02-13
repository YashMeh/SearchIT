var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'https://site:ce1f8f242e163a6bcf43bad8516a9da0@eu-west-1.searchbox.io'
  ]
});

module.exports = client;  