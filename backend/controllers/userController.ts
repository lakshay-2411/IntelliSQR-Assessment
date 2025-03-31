import { Request, Response } from "express";
import prisma from "../utils/client";
import bcrypt from "bcryptjs";
import { handleError } from "../utils/handleError";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
      return;
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "User with this email already exists.",
      });
      return;
    }

    // Ensure password meets security requirements
    if (password.length < 6) {
      res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long.",
      });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    res
      .status(201)
      .json({ success: true, message: "User registered successfully.", user });
  } catch (error) {
    handleError(res, error, "An error occurred while registering the user.");
  }
};
