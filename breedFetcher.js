const request = require('request');
const breedName = process.argv.slice(2);
request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
  if (error) {
    console.log('error', error);
    console.log('statusCode:', response && response.statusCode);
    process.exit();
  } else if (breedName === undefined) {
    console.log(`This ${breedName} is not exist`)
  } else {
  //console.log(typeof body)
  const data = JSON.parse(body);
  const breeddescription = data[0].description;
  console.log(breeddescription);
  // console.log(data);
  // console.log(typeof data);
  }
});
