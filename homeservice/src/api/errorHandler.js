import { ERROR_MESSAGES, HTTP_STATUS } from "./config";

export const handleApiError = (error) => {
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;

    switch (status) {
      case HTTP_STATUS.BAD_REQUEST:
        return {
          message: data.message || ERROR_MESSAGES.BAD_REQUEST,
          code: HTTP_STATUS.BAD_REQUEST,
          data: data,
        };

      case HTTP_STATUS.UNAUTHORIZED:
        return {
          message: ERROR_MESSAGES.UNAUTHORIZED,
          code: HTTP_STATUS.UNAUTHORIZED,
          data: data,
        };

      case HTTP_STATUS.FORBIDDEN:
        return {
          message: ERROR_MESSAGES.FORBIDDEN,
          code: HTTP_STATUS.FORBIDDEN,
          data: data,
        };

      case HTTP_STATUS.NOT_FOUND:
        return {
          message: ERROR_MESSAGES.NOT_FOUND,
          code: HTTP_STATUS.NOT_FOUND,
          data: data,
        };

      case HTTP_STATUS.SERVER_ERROR:
        return {
          message: ERROR_MESSAGES.SERVER_ERROR,
          code: HTTP_STATUS.SERVER_ERROR,
          data: data,
        };

      default:
        return {
          message: data.message || ERROR_MESSAGES.UNKNOWN_ERROR,
          code: status,
          data: data,
        };
    }
  }

  if (error.request) {
    return {
      message: ERROR_MESSAGES.NETWORK_ERROR,
      code: "NETWORK_ERROR",
      data: null,
    };
  }

  if (error.code === "ECONNABORTED") {
    return {
      message: ERROR_MESSAGES.TIMEOUT_ERROR,
      code: "TIMEOUT_ERROR",
      data: null,
    };
  }

  return {
    message: error.message || ERROR_MESSAGES.UNKNOWN_ERROR,
    code: "UNKNOWN_ERROR",
    data: null,
  };
};

export const logError = (error, context = "API") => {
  console.error(`❌ [${context}] Error:`, {
    message: error.message,
    code: error.code,
    data: error.data,
    timestamp: new Date().toISOString(),
  });
};
