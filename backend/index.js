// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const cors =require("cors");
const formRoutes=require('./routes/formRoutes');

// Creating an express app instance
const app = express();

// Setting the port for the server
const port = 3001;

app.use(cors());
// Middleware to parse JSON data from incoming requests
app.use(express.json());

// MongoDB connection setup with correct options
mongoose.connect('mongodb://localhost:27017/mydbproject', {
    useNewUrlParser: true,   // Use new URL parser (to avoid warnings)
    useUnifiedTopology: true // Use unified topology (recommended for MongoDB)
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB: ', err);
});
// Define a simple route to test the server
app.get('/', (req, res) => {
    res.send('Connected to MongoDB!');
});
// 
app.use('/api', formRoutes);
// app.post('/submit', savedata);

app.listen(port, () => {
    console.log(`Server running on http:localhost:${port}`);
});

