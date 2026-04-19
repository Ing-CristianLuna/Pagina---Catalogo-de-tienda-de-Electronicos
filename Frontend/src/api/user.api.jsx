import { api } from "./axios.api";

export const createUser = (data) => api.post("userCreate/", data);
export const loginUser = (data) => api.post("userLogin/", data);