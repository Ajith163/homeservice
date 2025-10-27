export const API_CONFIG = {
  baseURL: import.meta.env.VITE_BASE_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your internet connection.",
  TIMEOUT_ERROR: "Request timeout. Please try again.",
  SERVER_ERROR: "Server error. Please try again later.",
  BAD_REQUEST: "Invalid request. Please check your input.",
  UNAUTHORIZED: "Unauthorized access. Please login.",
  FORBIDDEN: "Access forbidden. You don't have permission.",
  NOT_FOUND: "Resource not found.",
  UNKNOWN_ERROR: "An unexpected error occurred.",
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
