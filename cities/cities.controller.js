const express = require('express');
const asyncHandler = require('express-async-handler');
const citiesService = require('./cities.service');
const router = express.Router();

router.get('/cities/:zipCode/', asyncHandler(async (req, res, next) => {
    const zipCode = req.params['zipCode'];
    const result = await citiesService.getCityByZipCode(zipCode); 
    res.send(result);
}));  

module.exports = router;


