import { Post, Comment } from "../models/models.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "author", "content", "createdAt"],
      include: [
        {
          model: Comment,
          attributes: ["id", "author", "content", "createdAt"],
        },
      ],
      order: [
        ["id", "asc"],
        [Comment, "createdAt", "desc"],
      ],
    });
    await res.send(posts);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const test = await Post.create(req.body);
    res.json({ message: "Post created" });
  } catch (error) {
    console.log(error);
  }
};
