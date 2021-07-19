// importing request package
const chalk = require('chalk');
const request = require('request');
const apidata = require('../apidata/apidata.json');

const geoCode = (address, callback) => {
    const dumyUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiZHVndWFyeWEiLCJhIjoiY2txdGk3dnc1MXJ0MzJ6cWhnbjNteHFicyJ9.TXLwkaw0jsrFPf4wVigG7A";
    const geoLocation = apidata.mapboxapi;
    let geoUrl = `${geoLocation.url}${encodeURIComponent(address)}.json?access_token=${geoLocation.Key}`;
    console.log(chalk.cyan(`Requested geolocation url -> ${geoUrl}`))

    request({ url: geoUrl, json: true, limit: 1 }, (error, response) => {
        // console.log(response)
        if (error) {
            callback('  - > Unable to Connect to geo location Api < -  ', undefined);
        }
        else if (response.body.features.length == 0) {
            callback(' - > Unable to find location. Please Check Inputs < - ', undefined);
        }
        else {
            /*callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                placeName: response.body.features[0].place_name
            })*/
            const data = {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                placeName: response.body.features[0].place_name
            }
            callback(undefined, data)
        }
    })

}

module.exports = {
    geocode: geoCode
}