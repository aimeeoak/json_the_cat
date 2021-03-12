const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url + breedName, (error, response, body) => {
  if (error) {
    callback(error, null);
    return;
    }

    let data = JSON.parse(body);
    if (!data.length) {
      callback(null, `The cat ${breedName} is not in the system`)
      return;
    }

    callback(null, data[0].description);
    }
)};


module.exports = { fetchBreedDescription };