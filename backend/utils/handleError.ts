import { Response } from "express";
// Custom error handler function
export const handleError = (
  res: Response,
  error: any,
  message: string,
  statusCode: number = 500
) => {
  console.error(error);
  res.status(statusCode).json({ success: false, message });
};
