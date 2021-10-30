var express = require('express');
var app = express();
var fs = require('fs');

// Home
app.get('/', (req, res)=>{
    fs.readFile('./index.html', 'utf-8', (err, data)=>{
        if(err) throw err;
        res.send(data);
    })
})


app.listen(process.env.PORT||8080, ()=>{
    console.log('Listening on port '+process.env.PORT||8080)
})
