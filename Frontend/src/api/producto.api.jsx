import { api } from "./axios.api";

export const getProductos = () => api.get("producto/");
export const createProducto = (data) => api.post("producto/", data);
export const updateProducto = (id, data) => api.put(`producto/${id}/`, data);
export const deleteProducto = (id) => api.delete(`producto/${id}/`);