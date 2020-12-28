const express = require('express');
const routes = require('../routers/index');
const cors = require('cors');

module.exports = app  => {
    // settings
    app.set('port', process.env.PORT || 4000);

    //middelwares
    app.use(cors());
    app.use(express.json());
    // Routes, Rutas
    routes(app);

    return app;
}
