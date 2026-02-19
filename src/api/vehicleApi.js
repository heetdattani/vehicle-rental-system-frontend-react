import api from "./axios";

export const getVehicles = async (params) => {
  const response = await api.get("/vehicles", { params });
  return response.data;
};

export const getVehicleById = async (id) => {
  const response = await api.get(`/vehicles/${id}`);
  return response.data;
};
