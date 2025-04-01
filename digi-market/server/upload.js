const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    const timestamp = new Date().getTime();
    cb(null, `${timestamp}-${file.name}`)
  }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ filepath: `/images/${req.file.filename}` });
});

module.exports = router;