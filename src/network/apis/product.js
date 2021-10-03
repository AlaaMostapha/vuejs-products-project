import { axiosInstance } from "./index";

export const GetProduct = async (id) => {
  return await axiosInstance.get(`products/${id}`);
};
