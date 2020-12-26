const mongoose = require('mongoose');
const { conexiondatabase }= require('./keys');

mongoose.connect(conexiondatabase.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));