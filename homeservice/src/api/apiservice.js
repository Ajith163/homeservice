import axios from "axios";
import { API_CONFIG } from "./config";
import { handleApiError, logError } from "./errorHandler";

const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: API_CONFIG.headers,
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => {
    logError(error, "Request Interceptor");
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorData = handleApiError(error);
    logError(errorData, "Response Interceptor");
    return Promise.reject(errorData);
  }
);

export default apiClient;
