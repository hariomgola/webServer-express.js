// importing request package
const chalk = require('chalk');
const request = require('request');
const apidata = require('../apidata/apidata.json');

const wheatherApi = (geodata, callback) => {
    // dumy Url is only for testing purpose
    const dumyUrl = 'http://api.weatherstack.com/current?access_key=0a64e2610865af7f3ce1cd49d4723220&query=40.714,-74.006&unit=f'
    const weatherStack = apidata.wheatherapi;
    const url = `${weatherStack.url}?access_key=0a64e2610865af7f3ce1cd49d4723220&query=${geodata.latitude},${geodata.longitude}&unit=f`;
    console.log(chalk.cyan('Requested WheatherApi urs -> ', url));

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('  - > Unable to Connect to Weather Api < -  ', undefined);
        }
        else if (response.body.error) {
            callback('Unable to find Weather data. Please Check Inputs.', undefined);
        }
        else {
            callback(undefined, response.body.current);
        }
    })
}

module.exports = {
    wheatherapi: wheatherApi
}