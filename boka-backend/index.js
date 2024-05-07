// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Importerar routes
const bookingRoutes = require('./server');

// använda Routes
app.use('/boka', bookingRoutes);

// Starta server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; 
