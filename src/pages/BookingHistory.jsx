import { userEffect, useState } from "react";
import { getUserBookings, cancelBooking } from "../api/bookingApi";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const fetchBookings = async () => {
    const res = await getUserBookings();
    setBookings(res.data.bookings);
  };

  useEffect(() => {
    fetchBookings();
  }, []);
  const handleCancel = async (id) => {
    await cancelBooking(id);
    fetchBookings();
  };

  return (
    <div className="container mt-4">
      <h1>My Bookings</h1>
      {bookings.map((b) => (
        <div key={b._id} className="card p-3 mb-3">
          <p>Vehicle: {b.vehicle.name}</p>
          <p>
            {b.startDate} to {b.endDate}
          </p>
          <button
            onClick={() => handleCancel(b._id)}
            className="btn btn-danger"
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookingHistory;
