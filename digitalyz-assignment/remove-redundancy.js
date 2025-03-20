const fs = require('fs');

// Load the JSON file
const data = JSON.parse(fs.readFileSync('cleaned_data.json', 'utf8'));

// Clean the requestsTable array by removing entries with only the "Credits" field
const cleanedRequestsTable = data.requestsTable.filter(request => Object.keys(request).length > 1);

// Update the data object
data.requestsTable = cleanedRequestsTable;

// Save the cleaned data back to the JSON file
fs.writeFileSync('cleaned_data_without_redundant.json', JSON.stringify(data, null, 4));

console.log('Cleaned data saved to cleaned_data.json');