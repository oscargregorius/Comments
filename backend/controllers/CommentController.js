import { Comment } from "../models/models.js";

export const createComment = async (req, res) => {
  try {
    await Comment.create(req.body);
    res.json({ message: "Comment created" });
  } catch (error) {
    console.log(error);
  }
};
