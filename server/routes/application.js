const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

// Apply for Job
router.post('/apply', async (req, res) => {
  const { jobId, userId, resume } = req.body;
  const application = new Application({ jobId, userId, resume });
  await application.save();
  res.status(201).json({ message: 'Application submitted' });
});

module.exports = router;
