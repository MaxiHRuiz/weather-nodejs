const argv = require('./config/yargs').argv;
const place = require('./place/place');
const weather = require('./weather/weather');


const getInfo = async(address) => {

    try {
        let placeResponse = await place.getPlaceLatLng(address);
        let temp = await weather.getWeather(placeResponse.lat, placeResponse.lng);
        return `The temperature in ${address} is of ${temp}°C`;
    } catch (error) {
        return `Oh no! the temperature to ${address} can not be found.`;
    }

};

getInfo(argv.address)
    .then(resp => console.log(resp))
    .catch(console.log);