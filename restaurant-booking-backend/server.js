const express = require('express');
const cors = require('cors');
const {
  checkAvailability,
  createBooking,
  deleteBooking,
  getAllBookings,
} = require('./controllers/bookingController'); // Adjust the path if needed

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.post('/check-availability', checkAvailability);
app.post('/bookings', createBooking);
app.get('/bookings', getAllBookings);
app.delete('/bookings', deleteBooking);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
