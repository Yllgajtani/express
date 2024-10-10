// var experss = require('express')
// var app = experss()
// app.get("/home", function(req,res){
//     res.send('text response')
// });
// app.listen('1010');

// var express = require('express'); 
// var app = express(); 

// app.get("/user", (req, res) => {
//     var user = {
//         name: "Filan",
//         surname: "Fisteku"
//     };
//     res.send('Pershendetje ' + user.name + ' ' + user.surname);
// });

// app.listen(1210, () => {
//     console.log('Server is running on port 1010'); 
// });

// var express = require('express'); 
// var app = express(); 

// app.get("/users/:id",function(req, res) {
//     var users = [
//         {id:1,name: "Filan"},
//         {id:2, surname: "Fisteku"}
// ];
// const user=users.find(item =>{
//      return item.id==req.params.id
// });
//    res.send('Pershendetje ' + user.name);
// });
// app.listen(8011);

var express = require('express'); 
 var app = express(); 

 app.get("/users/:id",function(req, res) {
    var users = [
         {id:1,Libri: "1000 kujtime", autori:"autori i kesaj libre eshte naim frashri"},
         {id:2,Libri: "nata pa re", autori:"autori i kesaj libre eshte migjeni"},
 ];
 const user=users.find(item =>{
      return item.id==req.params.id
 });
    res.send('ky eshte libri ' + user.Libri + user.autori);
 });
 app.listen(2012);
