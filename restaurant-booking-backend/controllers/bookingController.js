const bookings = [];

// Check if a booking slot is available
const isAvailable = (date, time) => {
  return !bookings.some(
    (booking) => booking.date === date && booking.time === time
  );
};

// Check availability
const checkAvailability = (req, res) => {
  const { date, time } = req.body;

  if (isAvailable(date, time)) {
    return res.status(200).send({ message: 'Time slot is available' });
  } else {
    return res.status(400).send({ message: 'The selected time slot is already booked' });
  }
};

// Create a new booking
const createBooking = (req, res) => {
  const { name, email, date, time, guests } = req.body;

  // Check if the time slot is already booked
  const existingBooking = bookings.find(
    (booking) => booking.date === date && booking.time === time
  );

  if (existingBooking) {
    return res.status(400).send({ message: 'The selected time slot is already booked.' });
  }

  const newBooking = { name, email, date, time, guests };
  bookings.push(newBooking);
  res.status(201).send({ message: 'Booking created successfully!', booking: newBooking });
};

// Delete a booking
const deleteBooking = (req, res) => {
  const { date, time, name } = req.body;

  // Find the index of the booking to delete
  const bookingIndex = bookings.findIndex(
    (booking) => booking.date === date && booking.time === time && booking.name === name
  );

  if (bookingIndex === -1) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  // Remove the booking from the list
  bookings.splice(bookingIndex, 1);

  // Send success response
  res.status(200).json({ message: 'Booking deleted successfully' });
};

// Get all bookings
const getAllBookings = (req, res) => {
  res.status(200).send({ bookings });
};

module.exports = {
  checkAvailability,
  createBooking,
  deleteBooking,
  getAllBookings,
};
