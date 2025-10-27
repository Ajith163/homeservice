import apiClient from "./apiservice";
import { logError } from "./errorHandler";

const getProducts = async () => {
  try {
    const response = await apiClient.get("/photos?_limit=20");
    return response.data || [];
  } catch (error) {
    logError(error, "getProducts");
    return [];
  }
};

const getProductById = async (id) => {
  try {
    const response = await apiClient.get(`/photos/${id}`);
    return response.data || null;
  } catch (error) {
    logError(error, "getProductById");
    return null;
  }
};

export { getProducts, getProductById };
export default getProducts;
