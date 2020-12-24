// app.js
const express = require('express')

// Create Express app
const app = express()
const path = require('path');

// A sample route
app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(__dirname))

// Start the Express server
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));