const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send the index.html file
});

// Routes
app.post('/split-bill', (req, res) => {
  const { totalAmount, numberOfPeople } = req.body;
  const perPersonAmount = totalAmount / numberOfPeople;
  res.json({ perPersonAmount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
