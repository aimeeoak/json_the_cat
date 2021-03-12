const request = require("request");

let breed = process.argv.slice(2);
let searchString = `https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`

request(searchString, (error, response, body) => {
  const data = JSON.parse(body);
    if (error) {
    console.log('error:' + error);
    } else if (data.length > 2) {
      console.log(`The cat ${breedName} is not in the system`)
    } else {
      console.log(data[0]["description"]);
    }
});

