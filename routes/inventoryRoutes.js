const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', authMiddleware, inventoryController.getItems);
router.post('/', authMiddleware,adminMiddleware,inventoryController.addItem);

module.exports = router;
