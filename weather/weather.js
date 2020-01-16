const axios = require('axios');
const appId = '96e0c97966d64b2ef4c15d85bd42f00f';

const getWeather = async(lat, lng) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}&units=metric`);

    return response.data.main.temp;
}

module.exports = {
    getWeather
}