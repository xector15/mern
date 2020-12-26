const express = require('express');
const routes = require('../routers/index');

module.exports = app  => {
    // settings
    app.set('port', process.env.PORT || 4000);

    // Routes, Rutas
    routes(app);

    return app;
}
