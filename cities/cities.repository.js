const axios = require('axios').default;

module.exports = {
    getCityDataByZipCode(zip){
        return axios.get(`https://api.zippopotam.us/us/${zip}`)
        .catch(err => {
                     console.log(err);}) 
    },
}; 

