var client = require('./connection.js');
// var csv=require("csv");
// var obj=csv(); 
// // Define the MyCSV object with parameterized constructor, this will be used for storing the data read from the csv into an array of MyCSV. You will need to define each field as shown above.
// var MyData = []; 
// // MyData array will contain the data from the CSV file and it will be sent to the clients request over HTTP. 
// obj.from.path('departments.csv').to.array(function (data) {
//     for (var index = 1; index < data.length; index++) {
//         var ob={'title':data[index][0],'url':data[index][1]};
//         MyData.push(ob);
//     }
//     console.log(MyData.length);
//     for(var i=0;i<MyData.length;i++)
// {
//   console.log("INSIDE");
//   client.index({  
//     index: 'department',
//     id: String(i),
//     type: 'depInfo',
//     body: {
//       "title":MyData[i].title,
//       "url":MyData[i].url
//     }
//   },function(err,resp,status) {
//       console.log(resp);
//   });
   
  
// }
// });
// //console.log(MyData.length);
// for(var i=0;i<MyData.length;i++)
// {
//   console.log("INSIDE");
//   client.index({  
//     index: 'department',
//     id: str(index+1),
//     type: 'depInfo',
//     body: {
//       "title":MyData[i].title,
//       "url":MyData[i].url
//     }
//   },function(err,resp,status) {
//       console.log(resp);
//   });
   
  
// }
// // MyData.forEach(function(e,index){
// // client.index({  
// //   index: 'department',
// //   id: str(index+1),
// //   type: 'depInfo',
// //   body: {
// //     "title":e.title,
// //     "url":e.url
// //   }
// // },function(err,resp,status) {
// //     console.log(resp);
// // });
  

// // })
// //Creation of an Index
// // client.indices.create({  
// //   index: 'department'
// // },function(err,resp,status) {
// //   if(err) {
// //     console.log(err);
// //   }
// //   else {
// //     console.log("create",resp);
// //   }
// // });
// //Insertion one at a time
// // client.index({  
// //   index: 'department',
// //   id: '1',
// //   type: 'depInfo',
// //   body: {
// //     "title":"ANAESTHESIA",
// //     "url":"https://www.cmch-vellore.edu/DeptContent.aspx?dept=156"
// //   }
// // },function(err,resp,status) {
// //     console.log(resp);
// // });
// //Gives the count
// // client.count({index: 'department',type: 'depInfo'},function(err,resp,status) {  
// //   console.log("constituencies",resp);
// // });
// //Used for deletion 
// // client.delete({  
// //   index: 'department',
// //   id: '1',
// //   type: 'depInfo'
// // },function(err,resp,status) {
// //     console.log(resp);
// // });
//Searching
// client.search({  
//   index: 'department',
//   type: 'depInfo',
//   body: {
//     query: {
//       match:{
//         "title":"biochemistry"
//       }
      
//     }
//   }
// },function (error, response,status) {
//     if (error){
//       console.log("search error: "+error)
//     }
//     else {
//       console.log("--- Response ---");
//       console.log(response);
//       console.log("--- Hits ---");
//       response.hits.hits.forEach(function(hit){
//         console.log(hit);
//       })
//     }
// });
