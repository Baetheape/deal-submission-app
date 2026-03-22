const mongoose = require('mongoose');

// Define the Deal schema
const dealSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    propertyDetails: {
        type: Object,
        required: true,
        properties: {
            address: { type: String, required: true },
            size: { type: Number, required: true }, // in square feet
            type: { type: String, enum: ['apartment', 'house', 'commercial'], required: true },
        }
    },
    paymentAuthorization: {
        type: Object,
        required: true,
        properties: {
            method: { type: String, enum: ['credit_card', 'bank_transfer'], required: true },
            status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
        }
    },
    employeeInfo: {
        name: { type: String, required: true },
        contact: { type: String, required: true },
    },
    statusTracking: {
        status: { type: String, enum: ['draft', 'submitted', 'approved', 'rejected'], default: 'draft' },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    }
});

// Create the Deal model from the schema
const Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;