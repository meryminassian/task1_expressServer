const NotFoundError = require('../common/not-found.error');
const citiesRepository = require('./cities.repository');

module.exports = {
    async getCityByZipCode(zipCode){
        const response = await citiesRepository.getCityDataByZipCode(zipCode); 
        
        if (response === undefined) {
            throw new NotFoundError(`City with ${zipCode} is not found`);
        }

        return(`${response.data.places[0]['place name']}, ${response.data.places[0]['state abbreviation']}, ${response.data.country} `); 
    }
} 
