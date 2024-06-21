class ApiError extends Error {
  constructor(
    message = "Internal server error",
    statusCode = 500,
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = null;
    this.success = false;
    this.message = message;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


export default ApiError;