const express = require('express');
const app = express();
const fs = require('fs');
const cors=require('cors');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));


// Define the default JSON data
const defaultData = {
  // Add your default data here
};

// Define an API endpoint to handle JSON file updates
app.post('/api/update-json', (req, res) => {
  const newData = req.body;

  // Read the existing JSON file or use the default data if the file doesn't exist
  const filePath = 'src/assets/db.json';
  let jsonData = {};

  try {
    jsonData = JSON.parse(fs.readFileSync(filePath));
  } catch (error) {
    console.log('JSON file not found. Using default data.');
    jsonData = defaultData;
  }

  // Update the JSON data with the new data
  Object.assign(jsonData, newData);

  // Write the updated JSON data back to the file
  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

  // Send a response indicating success
  res.json({ success: true });
});

// Define an API endpoint to retrieve the JSON data
app.get('/api/get-json', (req, res) => {
  const filePath = 'src/assets/db.json';

  // Read the JSON file or use the default data if the file doesn't exist
  let jsonData = {};

  try {
    jsonData = JSON.parse(fs.readFileSync(filePath));
  } catch (error) {
    console.log('JSON file not found. Using default data.');
    jsonData = defaultData;
  }

  // Send the JSON data as the response
  res.json(jsonData);
});

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
