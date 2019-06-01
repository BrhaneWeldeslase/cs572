const axios=require('axios');
const express=require('express');
const {from}=require('rxjs');
const {map}=require('rxjs/operators');



var app = express();
var result;
const port =5000;

axios.get('http://jsonplaceholder.typicode.com/users/')
     .then((data)=>console.log(data)) 
     .catch((err)=>console.log('error')); 

app.set('trust proxy',true);

//strict rout
app.set('strict routing',true);

// case sensitive rout
app.enable('case sensetive routing');

// framework disabled from displaying
app.set('x-powered-by',false);

app.get('/users',(req,res)=>{
    from(axios.get('http://jsonplaceholder.typicode.com/users/'))
        .pipe(
            map((response)=>response.data)
        )
        .subscribe((data)=>{
            res.status(200);
            res.set('Content-Type','application/json');
            res.send(data);
            res.end();
        })
})


app.listen(port,()=>console.log('Server started on port %s',port));

