const express = require('express');
const router = express.Router();
const dealController = require('../controllers/dealController');
const authMiddleware = require('../middleware/auth');

// Create a new deal
router.post('/', authMiddleware, dealController.createDeal);

// Get all deals
router.get('/', authMiddleware, dealController.getAllDeals);

// Get a specific deal by ID
router.get('/:id', authMiddleware, dealController.getDealById);

// Update a deal by ID
router.put('/:id', authMiddleware, dealController.updateDealById);

// Delete a deal by ID
router.delete('/:id', authMiddleware, dealController.deleteDealById);

module.exports = router;