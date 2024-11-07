const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post a new job (for employers)
router.post('/create', async (req, res) => {
  const { title, description, location, salary, company } = req.body;
  try {
    const job = new Job({ title, description, location, salary, company });
    await job.save();
    res.status(201).json({ message: 'Job created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
