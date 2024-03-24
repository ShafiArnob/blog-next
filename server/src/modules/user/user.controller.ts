import { Request, Response } from "express";
import prisma from "../../DB/db.config";

export const userSignup = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const dbRes = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    res.status(200).json({ status: "success", data: dbRes });
  } catch (e) {
    console.log(e);
    res.status(404).json({ status: "Failed" });
  }
};
