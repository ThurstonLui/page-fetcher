const urlArr = process.argv.slice(2);
const url = urlArr[0]
const file = url[1]

const fs = require("fs");



const request = require('request');
request(urlArr[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

fs.writeFile(file, "h3ll0 file!\n", (error) => {
  if (error) {
    // Handle error
    console.log("Failed to write to file");
    return;
  }
  // Success!
  console.log("Downloaded and saved 1235 bytes to ./index.html");
});

