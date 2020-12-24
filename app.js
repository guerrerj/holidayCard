// app.js
const express = require('express')

// Create Express app
const app = express()

// A sample route
app.get('/', (req, res) => res.redirect('card.html'))
app.use(express.static(__dirname))

// Start the Express server
app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));
    
