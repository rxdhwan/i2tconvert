const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        const identifier = uuidv4();
        const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
        const newFilePath = path.join(__dirname, '..', 'uploads', `${identifier}.png`);

        fs.renameSync(filePath, newFilePath);

        res.json({ identifier });
    } catch (error) {
        res.status(500).json({ error: 'Image upload failed' });
    }
});

module.exports = router;
