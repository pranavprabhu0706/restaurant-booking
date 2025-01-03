const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings, checkAvailability, deleteBooking } = require('../controllers/bookingController');

// Route to create a booking
router.post('/bookings', createBooking);

// Route to get all bookings
router.get('/bookings', getAllBookings);

// Route to check availability
router.post('/check-availability', checkAvailability);


module.exports = router;
