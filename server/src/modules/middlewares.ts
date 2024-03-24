import { NextFunction, Request, Response } from "express";
import { JwtPayload, Secret, verify } from "jsonwebtoken";
import "dotenv/config";

export interface RequestWithUserId extends Request {
  userId: JwtPayload;
}

export async function checkToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Token Middleware");
  const authHeader = req.headers["authorization"] || "";
  console.log(authHeader);

  const user = verify(authHeader, process.env.JWT_SECRET as Secret);
  console.log(user);

  if (user) {
    //@ts-ignore
    req.userId = user.id as JwtPayload;
    next();
  } else {
    return res
      .status(403)
      .json({ status: "Failed", message: "You are not authorized" });
  }
}
