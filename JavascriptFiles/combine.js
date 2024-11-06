const fs = require('fs');

// Read and parse the JSON file
const data = JSON.parse(fs.readFileSync('../test.json', 'utf-8'));

// Get the arrays from the data
const arrays = Object.values(data);

// Initialize the final merged array
const mergedArray = [];


// Output the merged array
console.log(mergedArray.length);
