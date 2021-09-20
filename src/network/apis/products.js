import { axiosInstance } from "./index";

export const GetProducts = async () => {
  return await axiosInstance.get(`products`);
};
