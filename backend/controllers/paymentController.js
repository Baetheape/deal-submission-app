const stripe = require('stripe')('your-stripe-secret-key');

// Function to create a payment intent
const createPaymentIntent = async (amount, currency) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });
        return paymentIntent;
    } catch (error) {
        throw new Error(`Error creating payment intent: ${error.message}`);
    }
};

// Function to confirm a payment
const confirmPayment = async (paymentIntentId) => {
    try {
        const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
        return paymentIntent;
    } catch (error) {
        throw new Error(`Error confirming payment: ${error.message}`);
    }
};

module.exports = { createPaymentIntent, confirmPayment };