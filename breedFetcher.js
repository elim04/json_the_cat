const request = require('request');

//get the command line arg 
const arg = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {

  //edge case for if error in requesting api or URL  it will just console.log the error and exit the function with return
  if (error) {
    console.log(error)
    return //error is null if no error
  }

  const data = JSON.parse(body);

  //edge case if breed is not found - data is technically undefined
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log("Breed not found.")
  }

});


  
  //after using JSON.parse we have turned data into an object as shown by the console.log
  // console.log(typeof data);

  //make sure we are getting the body of the search for the siberian cat
  // console.log('body: ', body);

  //before JSON.parse - shows us that the body is a string
  // console.log(typeof body);