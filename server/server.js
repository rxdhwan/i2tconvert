const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const uploadImageRouter = require('./routes/uploadimage');
const retrieveImageRouter = require('./routes/retrieveimage');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/upload-image', upload.single('image'), uploadImageRouter);
app.use('/api/retrieve-image', retrieveImageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
