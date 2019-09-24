const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config')
const bCrypt = require('bcrypt-nodejs');

const app = express();
config.express(app);
config.routes(app);

const {appPort, mongoUri} = config.app;

mongoose.connect(mongoUri , { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen(
        appPort, 
        () => {console.log(' listening ' + appPort)
        console.log( bCrypt.hashSync('password'))}
    ))
    .catch( err => console.error('error connecting ' + mongoUri, err))

