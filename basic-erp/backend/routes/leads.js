// backend/routes/leads.js
const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// Get all leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a lead by ID
router.get('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (lead == null) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new lead
router.post('/', async (req, res) => {
  const lead = new Lead({
    name: req.body.name,
    source: req.body.source,
    status: req.body.status,
    potentialValue: req.body.potentialValue,
  });
  try {
    const newLead = await lead.save();
    res.status(201).json(newLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a lead
router.put('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (lead == null) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    lead.name = req.body.name || lead.name;
    lead.source = req.body.source || lead.source;
    lead.status = req.body.status || lead.status;
    lead.potentialValue = req.body.potentialValue || lead.potentialValue;

    const updatedLead = await lead.save();
    res.json(updatedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a lead
router.delete('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (lead == null) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    await lead.remove();
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
