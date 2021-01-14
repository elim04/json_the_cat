const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    //edge case for if error in requesting api or URL  it will just console.log the error and exit the function with return
    if (error) {
      callback(error, null);
      return; //error is null if no error
    }
  
    const data = JSON.parse(body);
  
    //edge case if breed is not found - data is technically undefined
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback("There is no breed.");
    }
  
  });
};

module.exports = { fetchBreedDescription };


  
//after using JSON.parse we have turned data into an object as shown by the console.log
// console.log(typeof data);

//make sure we are getting the body of the search for the siberian cat
// console.log('body: ', body);

//before JSON.parse - shows us that the body is a string
// console.log(typeof body);