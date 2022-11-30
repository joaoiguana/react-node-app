const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Have Node serve the files for out built React APP
app.use(express.static(path.resolve(__dirname, '../client/build')))

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All othher GET requests not handled before will return out React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

// Server to run API
app.listen(PORT, () => {
  console.log(`Server listening o PORT ${PORT}...`)
})
