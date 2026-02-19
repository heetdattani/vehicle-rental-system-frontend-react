import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVehicleById } from "../api/vehicleApi";
import { createBooking } from "../api/bookingApi";

function VehicleDetails() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const res = await getVehicleById(id);
      console.log(res, "vehicle details");
      if (res.status === "success") {
        setVehicle(res.vehicle);
      } else {
        alert("Failed to fetch vehicle details!");
      }
    };
    fetch();
  }, [id]);

  const handleBooking = async () => {
    const res = await createBooking({
      vehicleId: vehicle._id,
      startDate,
      endDate,
    });

    console.log(res, "booking response");

    if (res.status == "success") {
      alert("Booking successful!");
      navigate("/");
    } else {
      alert(res.message || "Booking failed!");
    }
  };

  return (
    <div className="container mt-4">
      <h1>{vehicle.name}</h1>
      <p>{vehicle.type}</p>
      <p>${vehicle.rentPerDay}/day</p>
      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={handleBooking} className="btn btn-primary ms-2">
        Book Now
      </button>
    </div>
  );
}

export default VehicleDetails;
