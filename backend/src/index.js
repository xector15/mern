const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
    res.json({
        "hola" : "hola",
        'name' : 'Gregorio'
    });
});

app.listen(app.get('port'), () =>{
    console.log('server in port', app.get('port'));
});