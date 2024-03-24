import { Request, Response } from "express";
import prisma from "../../DB/db.config";

export const createBlog = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const dbRes = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: "27996bf0-a3da-4ee5-a16b-f9f2cd16e5d7", //later change using middleware
      },
    });
    return res.status(200).json({ status: "success", data: dbRes });
  } catch (e) {
    console.log(e);
    return res
      .status(404)
      .json({ status: "Failed", message: "blog not created" });
  }
};
