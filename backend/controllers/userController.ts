import { Request, Response } from "express";
import prisma from "../prisma/client";
import bcrypt from "bcryptjs";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hashedPassword } });
  res.json(user);
};