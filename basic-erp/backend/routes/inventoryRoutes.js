const express = require('express');
const { getInventory, addInventory } = require('../contollers/inventoryController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getInventory);
router.post('/', authMiddleware, addInventory);

module.exports = router;
