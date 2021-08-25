const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
  if (error) {  
    callback(error, null);
  } 
  const data = JSON.parse(body);
  const breeddescription = data[0].description;
  callback(null, breeddescription);
  });
};


module.exports = { fetchBreedDescription };