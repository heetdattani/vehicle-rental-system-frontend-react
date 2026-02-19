import api from "./axios";

export const createBooking = async (data) => {
  const response = await api.post("/bookings", data);
  console.log(" :>> ", response);
  return response.data;
};

export const cancelBooking = async (id) => {
  const response = await api.delete(`/bookings/${id}`);
  return response.data;
};

export const getUserBookings = async () => {
  const response = await api.get("/bookings/my-bookings");
  return response.data;
};
