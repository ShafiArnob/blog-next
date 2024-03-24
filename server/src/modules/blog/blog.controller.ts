import { Request, Response } from "express";
import prisma from "../../DB/db.config";
import { RequestWithUserId } from "../middlewares";

export const createBlog = async (req: Request, res: Response) => {
  const body = req.body;
  //@ts-ignore
  const userId = req.userId;
  try {
    const dbRes = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: String(userId),
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

export const updateBlog = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const dbRes = await prisma.blog.update({
      where: {
        id: body.id, //blog id
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return res.status(200).json({ status: "success", data: dbRes });
  } catch (e) {
    console.log(e);
    return res
      .status(404)
      .json({ status: "Failed", message: "blog not updated" });
  }
};

export const showSingleBlog = async (req: Request, res: Response) => {
  const params = req.params;

  try {
    const dbRes = await prisma.blog.findFirst({
      where: {
        id: params.id,
      },
    });
    return res.status(200).json({ status: "success", data: dbRes });
  } catch (e) {
    console.log(e);
    return res
      .status(404)
      .json({ status: "Failed", message: "blog not found" });
  }
};
