 const express = require('express');
 const app = express();
 const citiesController = require('./cities/cities.controller');
 const errorHandler = require('./common/error-handler.middleware');
 
 
app.use('/', citiesController);

app.listen(3000, () => {
    console.log('Server is running under 3000 port');
}); 

app.use(errorHandler);

