const fs = require('fs');

// Function to generate a 2D array
function generate2DArray(width, length) {
    const result = [];
    let value = 1;  // You can start from any value you want

    for (let i = 0; i < length; i++) {
        const row = [];
        for (let j = 0; j < width; j++) {
            row.push(2);
            value++;  // Increment the value
        }
        result.push(row);
    }

    return result;
}

// Example parameters for width and length
const width = 69;  // Number of columns
const length = 24; // Number of rows

// Generate the 2D array
const data = generate2DArray(width, length);

// Convert the data to a JSON string with spaces between arrays
const jsonData = JSON.stringify(data)
    .replace(/\],\[/g, '],\n['); // Add newline between arrays

// Write the JSON string to a file
fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been written successfully!');
    }
});
