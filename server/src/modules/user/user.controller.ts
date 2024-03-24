import { Request, Response } from "express";
import prisma from "../../DB/db.config";
import "dotenv/config";
import { Secret, sign } from "jsonwebtoken";

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
      process.env.JWT_SECRET as Secret
    );
    return res.status(200).json({ status: "success", data: dbRes, token: jwt });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ status: "Failed" });
  }
};

export const userSignin = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      return res
        .status(403)
        .json({ status: "failed", message: "User not Found" });
    }
    const jwt = await sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET as Secret
    );

    res.status(200).json({ status: "success", token: jwt });
  } catch (e) {
    console.log(e);
    res.status(404).json({ status: "Failed" });
  }
};
