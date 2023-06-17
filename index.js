const express=require('express');
const port=8000;
const app=express();




//use express routers
app.use('/',require('./routs'));



//use ejs
app.set('view engine','ejs');
app.set('views','./views');










app.listen(port,function(err){
    if(err){
        console.log(err,"error in listen");
    }

    console.log("server is up and running on port:",port);
})