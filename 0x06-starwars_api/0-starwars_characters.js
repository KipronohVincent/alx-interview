#!/usr/bin/node
// Import the request module
const request = require('request');
// Get the movie ID from the first argument passed to the script
const movieId = process.argv[2];
// Build the URL for the film endpoint
const url = `https://swapi.dev/api/films/${movieId}/`;

// Make a GET request to the URL
request(url, function (error, response, body) {
  if (error) {
    // If there is an error in the request, display the error and exit the script
    console.error(error);
    return;
  }
  // Parse the response body as JSON

  const data = JSON.parse(body);
  // Get the list of characters
  const characters = data.characters;

  // Loop through each character
  characters.forEach(function (character) {
    // Make a GET request to the character endpoint
    request(character, function (error, response, body) {
      if (error) {
        // If there is an error in the request, display the error and continue to the next character
        console.error(error);
        return;
      }
      // Parse the response body as JSON
      const characterData = JSON.parse(body);
      // Display the name of the character
      console.log(characterData.name);
    });
  });
});
