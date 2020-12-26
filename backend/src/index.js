const express = require('express');
const config = require('./server/config');
const app = config(express());

// DataBase
require('./database');

app.listen(app.get('port'), () =>{
    console.log('server in port', app.get('port'));
});