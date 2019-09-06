const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8000;
app.listen(port,function(){
    console.log("app is running");
});

app.use(express.static('./'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'./portal/release/index.html'));
});