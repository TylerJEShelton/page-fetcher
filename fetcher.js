const request = require('request');
const fs = require('fs');

// obtain the source url from the first command line argument
const url = process.argv[2];
// obtain the destination path and file name from the second command line argument
const destPath = process.argv[3];

request(url, (err, response, body) => {
  // if the requested url is valid and working write the contents of the url to the destPath file
  if (response.statusCode === 200) {
    fs.writeFile(destPath, body, 'utf-8', (error) => {
      if (error)
        console.log(error);
      else {
        console.log(`Downloaded and saved ${body.length} bytes to ${destPath}`);
      }
    });
  }
});
