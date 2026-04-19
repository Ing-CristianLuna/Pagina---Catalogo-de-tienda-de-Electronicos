import { api } from "./axios.api";

export const getMarcas = () => api.get("marca/");
export const createMarca = (data) => api.post("marca/", data);
export const updateMarca = (id, data) => api.put(`marca/${id}/`, data);
export const deleteMarca = (id) => api.delete(`marca/${id}/`);