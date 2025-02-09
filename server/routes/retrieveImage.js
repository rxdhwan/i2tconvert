const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        const { identifier } = req.body;
        const filePath = path.join(__dirname, '..', 'uploads', `${identifier}.png`);

        if (fs.existsSync(filePath)) {
            res.json({ image: `${identifier}.png` });
        } else {
            res.status(404).json({ error: 'Image not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Image retrieval failed' });
    }
});

module.exports = router;
