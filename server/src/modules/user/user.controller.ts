import { Request, Response } from "express";
import prisma from "../../DB/db.config";
import "dotenv/config";
import { sign } from "jsonwebtoken";

export const userSignup = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const dbRes = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const jwt = await sign(
      {
        id: dbRes.id,
      },
      process.env.JWT_SECRET
    );
    res.status(200).json({ status: "success", data: dbRes, token: jwt });
  } catch (e) {
    console.log(e);
    res.status(404).json({ status: "Failed" });
  }
};
