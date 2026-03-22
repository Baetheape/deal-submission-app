const Deal = require('../models/deal'); // Adjust the path as necessary

// Create a new deal
exports.createDeal = async (req, res) => {
    try {
        const deal = new Deal(req.body);
        await deal.save();
        res.status(201).send(deal);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all deals
exports.getAllDeals = async (req, res) => {
    try {
        const deals = await Deal.find({});
        res.status(200).send(deals);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get deal by ID
exports.getDealById = async (req, res) => {
    try {
        const deal = await Deal.findById(req.params.id);
        if (!deal) {
            return res.status(404).send();
        }
        res.status(200).send(deal);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a deal
exports.updateDeal = async (req, res) => {
    try {
        const deal = await Deal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!deal) {
            return res.status(404).send();
        }
        res.status(200).send(deal);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a deal
exports.deleteDeal = async (req, res) => {
    try {
        const deal = await Deal.findByIdAndDelete(req.params.id);
        if (!deal) {
            return res.status(404).send();
        }
        res.status(200).send(deal);
    } catch (error) {
        res.status(500).send(error);
    }
};
