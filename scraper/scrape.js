const request = require('request');
const cheerio = require('cheerio');

// Request Header for the request
// Must pass user information.
var options = {
    url: 'https://netnutrition.cbord.com/nn-prod/vucampusdining',
    jar: true
};

// Function that scrapes all the dining options on-campus
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(body);
        let diningOptions = $('.cbo_nn_unitNameLink')
        let diningOptionsText = diningOptions.map(function(i, el) {
            return $(this).text();
        }).get();
        return diningOptionsText; 
    }
});
