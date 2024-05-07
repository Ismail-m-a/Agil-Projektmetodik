//server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();


router.post('/', (req, res) => { 
    // console.log(req.body);
    const filePath = path.resolve(__dirname, 'boka.json');

    fs.readFile(filePath, (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Failed to read JSON' });
        }
        
        let bookings = data.length ? JSON.parse(data) : [];
        bookings.push(req.body);
        
        fs.writeFile(filePath, JSON.stringify(bookings, null, 2), err => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save JSON' });
            }
            res.status(200).json({ message: 'JSON saved successfully' });
        });
    });
});

module.exports = router;