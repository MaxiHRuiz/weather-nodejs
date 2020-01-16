const axios = require('axios');

const getPlaceLatLng = async(address) => {

    const encodedUrl = encodeURI(address);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '50bcf307d3msh0d229f622ac7e64p1e0604jsnb5d530bb58b6' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`There is not result to: ${address}`);
    }

    const data = response.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        name,
        lat,
        lng
    }
};

module.exports = {
    getPlaceLatLng: getPlaceLatLng
}