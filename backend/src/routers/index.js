const express = require('express');
const router = express.Router();

module.exports = app => {

    router.get('/', (req, res) =>{
        res.send('hola mundo');
    });

    app.use(router);
};